<template>
  <div class="admin-customers-container">
    <header class="header">
      <h2>Manage Customers</h2>
    </header>

    <main class="main-content">
      <!-- Customer Table -->
      <section class="customer-table card">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer.user_id">
              <td>{{ customer.user_id }}</td>
              <td>{{ customer.email }}</td>
        
              <td>
               
                <button @click="confirmDelete(customer)" class="btn btn-delete">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Add/Edit Customer Modal -->
      <div v-if="isModalOpen" class="modal-overlay">
        <div class="modal card">
          <div class="modal-header">
            <h3>{{ isEditing ? "Edit Customer" : "Add New Customer" }}</h3>
            <button type="button" class="close" @click="closeModal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <label for="first_name">First Name:</label>
              <input
                type="text"
                id="first_name"
                v-model="customerForm.first_name"
                required
              />

              <label for="last_name">Last Name:</label>
              <input
                type="text"
                id="last_name"
                v-model="customerForm.last_name"
                required
              />

              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                v-model="customerForm.email"
                required
              />

              <label for="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                v-model="customerForm.phone"
                required
              />

              <div class="modal-actions">
                <button type="submit" class="btn btn-primary">
                  {{ isEditing ? "Update" : "Add" }} Customer
                </button>
                <button
                  type="button"
                  @click="closeModal"
                  class="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div v-if="isDeleteConfirmOpen" class="modal-overlay">
        <div class="modal card">
          <div class="modal-header">
            <h3>Confirm Deletion</h3>
            <button type="button" class="close" @click="closeDeleteConfirm">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <p>
              Are you sure you want to delete this customer:
              {{ customerToDelete?.first_name }}
              {{ customerToDelete?.last_name }}?
            </p>
            <div class="modal-actions">
              <button @click="deleteCustomer" class="btn btn-danger">
                Yes, Delete
              </button>
              <button @click="closeDeleteConfirm" class="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminCustomer",
  data() {
    return {
      customers: [],
      customerForm: {
        user_id: null,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      },
      isModalOpen: false,
      isDeleteConfirmOpen: false,
      customerToDelete: null,
      isEditing: false,
    };
  },
  methods: {
    async fetchCustomers() {
      try {
        const response = await fetch("http://localhost:3001/api/customers");
        const data = await response.json();
        this.customers = data;
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    },
    openAddCustomerModal() {
      this.customerForm = {
        user_id: null,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      };
      this.isEditing = false;
      this.isModalOpen = true;
    },
    openEditCustomerModal(customer) {
      this.customerForm = { ...customer };
      this.isEditing = true;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async submitForm() {
      try {
        if (this.isEditing) {
          await fetch(
            `http://localhost:3001/api/customers/${this.customerForm.user_id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(this.customerForm),
            }
          );
        } else {
          const response = await fetch("http://localhost:3001/api/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.customerForm),
          });
          const newCustomer = await response.json();
          this.customers.push(newCustomer);
        }
        this.closeModal();
        this.fetchCustomers();
      } catch (error) {
        console.error("Error saving customer:", error);
      }
    },
    confirmDelete(customer) {
      this.customerToDelete = customer;
      this.isDeleteConfirmOpen = true;
    },
    closeDeleteConfirm() {
      this.isDeleteConfirmOpen = false;
      this.customerToDelete = null;
    },
    async deleteCustomer() {
      if (this.customerToDelete) {
        try {
          await fetch(
            `http://localhost:3001/api/customers/${this.customerToDelete.user_id}`,
            {
              method: "DELETE",
            }
          );
          this.customers = this.customers.filter(
            (customer) => customer.user_id !== this.customerToDelete.user_id
          );
        } catch (error) {
          console.error("Error deleting customer:", error);
        }
      }
      this.closeDeleteConfirm();
    },
  },
  mounted() {
    this.fetchCustomers();
  },
};
</script>

<style scoped>
.admin-customers-container {
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

.header h2 {
  font-size: 2rem;
  color: #333;
}

/* Card Styling */
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

/* Customer Table */
.customer-table {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #333;
}

.table td button {
  margin-right: 10px;
}

/* Buttons */
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-edit {
  background-color: #191815;
  color: #ffffff;
}

.btn-edit:hover {
  background-color: #7d7c78;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}

.btn-delete:hover {
  background-color: #494646;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  max-width: 90%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.modal-header h3 {
  font-size: 1.5rem;
  margin: 0;
}

.modal-header .close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
}

.modal-header .close:hover {
  color: #000;
}

.modal-body {
  padding: 15px;
}

.modal-body label {
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}

.modal-body input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px;
  border-top: 1px solid #ddd;
}
</style>
