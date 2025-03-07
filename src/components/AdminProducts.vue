<template>
  <div class="admin-products-container">
    <header class="header">
      <h2>Manage Products</h2>
      <button @click="openAddProductModal" class="btn btn-primary">Add New Product</button>
    </header>

    <main class="main-content">
      <section class="product-table">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>R{{ parseFloat(product.price).toFixed(2) }}</td>
              <td>
                <button @click="openEditProductModal(product)" class="btn btn-edit">Edit</button>
                <button @click="confirmDelete(product)" class="btn btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div v-if="isModalOpen" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditing ? 'Edit Product' : 'Add New Product' }}</h5>
              <button type="button" class="close" @click="closeModal">&times;</button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <label for="name">Product Name:</label>
                <input type="text" id="name" v-model="productForm.name" required />

                <label for="description">Description:</label>
                <textarea id="description" v-model="productForm.description" required></textarea>

                <label for="price">Price:</label>
                <input type="number" id="price" v-model.number="productForm.price" required />
                
                <label for="image">Image URL:</label>
                <input type="text" id="image" v-model="productForm.image" required />
                
                <label for="category">Category:</label>
                <input type="text" id="category" v-model="productForm.category" required />
                
                <label for="serial_number">Serial Number:</label>
                <input type="text" id="serial_number" v-model="productForm.serial_number" required />
                
                <label for="stock_quantity">Stock Quantity:</label>
                <input type="number" id="stock_quantity" v-model.number="productForm.stock_quantity" required />
                
                <label for="reviews_rating">Reviews Rating:</label>
                <input type="number" id="reviews_rating" v-model.number="productForm.reviews_rating" step="0.1" required />
                
                <label for="reviews_count">Reviews Count:</label>
                <input type="number" id="reviews_count" v-model.number="productForm.reviews_count" required />

                <div class="modal-actions">
                  <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update' : 'Add' }} Product</button>
                  <button type="button" @click="closeModal" class="btn btn-secondary">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isDeleteConfirmOpen" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Confirm Deletion</h5>
              <button type="button" class="close" @click="closeDeleteConfirm">&times;</button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this product: {{ productToDelete?.name }}?</p>
              <div class="modal-actions">
                <button @click="deleteProduct" class="btn btn-danger">Yes, Delete</button>
                <button @click="closeDeleteConfirm" class="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminProducts',
  data() {
    return {
      products: [],
      productForm: {
        id: null,
        name: '',
        description: '',
        price: null,
      },
      isModalOpen: false,
      isDeleteConfirmOpen: false,
      productToDelete: null,
      isEditing: false,
    };
  },
  methods: {
    openAddProductModal() {
      this.productForm = { id: null, name: '', description: '', price: null };
      this.isEditing = false;
      this.isModalOpen = true;
    },
    openEditProductModal(product) {
      this.productForm = { ...product };
      this.isEditing = true;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async submitForm() {
      if (this.isEditing) {
        await this.updateProduct(this.productForm);
      } else {
        await this.createProduct(this.productForm);
      }
      this.closeModal();
    },
    confirmDelete(product) {
      this.productToDelete = product;
      this.isDeleteConfirmOpen = true;
    },
    closeDeleteConfirm() {
      this.isDeleteConfirmOpen = false;
      this.productToDelete = null;
    },
    async deleteProduct() {
      if (this.productToDelete) {
        await fetch(`http://localhost:3001/api/products/${this.productToDelete.id}`, {
          method: 'DELETE',
        });
        this.products = this.products.filter(product => product.id !== this.productToDelete.id);
      }
      this.closeDeleteConfirm();
    },
    async fetchProducts() {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      this.products = data.map(product => ({
        ...product,
        price: parseFloat(product.price), // Ensure price is a number
      }));
    },
    async createProduct(product) {
      const response = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      const newProduct = await response.json();
      this.products.push({ ...newProduct, price: parseFloat(newProduct.price) });
      alert('Product created!')
      window.location.reload();
    },
    async updateProduct(product) {
      const response = await fetch(`http://localhost:3001/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      const updatedProduct = await response.json();
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = { ...updatedProduct, price: parseFloat(updatedProduct.price) };
      }
      alert('Product edited!')
      window.location.reload();
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.admin-products-container {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.product-table {
  margin-top: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.table th,
.table td {
  text-align: left;
  padding: 10px;
}

.table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-dialog {
  max-width: 400px; /* Reduced width */
  width: 90%; /* Responsive width */
  margin: 0 auto;
  animation: slideIn 0.3s ease-in-out;
}

.modal-content {
  background-color: #fff;
  border-radius: 8px; /* Slightly smaller radius */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px; /* Reduced padding */
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
}

.modal-title {
  font-size: 1.25rem; /* Smaller font size */
  font-weight: bold;
}

.modal-body {
  padding: 30px; /* Reduced padding */
  margin: 30px;
}

.modal-body label {
  display: block;
  margin-bottom: 6px; /* Reduced margin */
  font-weight: bold;
  color: #333;
  font-size: 0.9rem; /* Smaller font size */
}

.modal-body input,
.modal-body textarea {
  width: 100%;
  padding: 8px; /* Reduced padding */
  margin-bottom: 10px; /* Reduced margin */
  border: 1px solid #ddd;
  border-radius: 4px; /* Smaller radius */
  font-size: 0.9rem; /* Smaller font size */
  transition: border-color 0.3s ease;
}

.modal-body input:focus,
.modal-body textarea:focus {
  border-color: #6a11cb;
  outline: none;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px; /* Reduced gap */
  padding: 15px; /* Reduced padding */
  border-top: 1px solid #eee;
}

.close {
  background: none;
  border: none;
  font-size: 1.25rem; /* Smaller font size */
  cursor: pointer;
  color: #fff;
  transition: color 0.3s ease;
}

.close:hover {
  color: #ff4757;
}

.btn-edit {
  background-color: #31312f;
  color: #ffffff;
  margin-right: 10px;
}

.btn-delete {
  background-color: #dc3545;
  color: #fff;
}

.btn-primary {
  background-color: #000000;
  color: #fff;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-danger {
  background-color: #ff4757;
  color: #fff;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(-20px); }
  to { transform: translateY(0); }
}
</style>