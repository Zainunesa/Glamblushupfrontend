<template>
  <div class="admin-orders-container">
    <header class="header">
      <h2>Manage Orders</h2>
    </header>

    <main class="main-content">
      <!-- Orders Table -->
      <section class="orders-table card">
        <table class="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Total Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.customer_name }}</td>
              <td>R{{ Number(order.total_amount).toFixed(2) }}</td>
              <td>
                <button @click="viewOrderDetails(order)" class="btn btn-info">View Details</button>
                <button @click="trackOrder(order.shipment_number)" class="btn btn-primary">Track Order</button>
                <button @click="confirmDelete(order)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Order Details Modal -->
      <div v-if="isOrderDetailsModalOpen" class="modal-overlay">
        <div class="modal card">
          <div class="modal-header">
            <h3>Order Details - Order #{{ selectedOrder.id }}</h3>
            <button type="button" class="close" @click="closeOrderDetailsModal">&times;</button>
          </div>
          <div class="modal-body">
            <p><strong>Customer Name:</strong> {{ selectedOrder.customer_name }}</p>
            <p><strong>Status:</strong> {{ selectedOrder.status }}</p>
            <p><strong>Total Amount:</strong> R{{ Number(selectedOrder.total_amount).toFixed(2) }}</p>
            <p><strong>Order Date:</strong> {{ selectedOrder.created_at }}</p>
            <p><strong>Shipment Number:</strong> {{ selectedOrder.shipment_number }}</p>
            <h5>Items:</h5>
            <ul>
              <li v-for="item in selectedOrder.items" :key="item.product_id">
                {{ item.product_name }} (x{{ item.quantity }}) - R{{ Number(item.price).toFixed(2) }}
              </li>
            </ul>
            <div class="modal-actions">
              <button @click="closeOrderDetailsModal" class="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div v-if="isDeleteConfirmOpen" class="modal-overlay">
        <div class="modal card">
          <div class="modal-header">
            <h3>Confirm Deletion</h3>
            <button type="button" class="close" @click="closeDeleteConfirm">&times;</button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete this order (Order #{{ orderToDelete?.id }})?</p>
            <div class="modal-actions">
              <button @click="deleteOrder" class="btn btn-danger">Yes, Delete</button>
              <button @click="closeDeleteConfirm" class="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminOrders',
  data() {
    return {
      orders: [],
      isOrderDetailsModalOpen: false,
      selectedOrder: null,
      isDeleteConfirmOpen: false,
      orderToDelete: null,
    };
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await fetch('http://localhost:3001/api/orders');
        const data = await response.json();
        this.orders = data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
    viewOrderDetails(order) {
      this.selectedOrder = order;
      this.isOrderDetailsModalOpen = true;
    },
    closeOrderDetailsModal() {
      this.isOrderDetailsModalOpen = false;
      this.selectedOrder = null;
    },
    confirmDelete(order) {
      this.orderToDelete = order;
      this.isDeleteConfirmOpen = true;
    },
    closeDeleteConfirm() {
      this.isDeleteConfirmOpen = false;
      this.orderToDelete = null;
    },
    async deleteOrder() {
      if (this.orderToDelete) {
        try {
          await fetch(`http://localhost:3001/api/orders/${this.orderToDelete.id}`, {
            method: 'DELETE',
          });
          this.orders = this.orders.filter(order => order.id !== this.orderToDelete.id);
        } catch (error) {
          console.error('Error deleting order:', error);
        }
      }
      this.closeDeleteConfirm();
    },
    trackOrder(shipmentNumber) {
      if (shipmentNumber) {
        const trackingUrl = `https://www.dhl.com/track?awb=${shipmentNumber}`;
        window.open(trackingUrl, '_blank'); // Opens DHL tracking page in a new tab
      } else {
        alert('No shipment number available for this order.');
      }
    },
  },
  mounted() {
    this.fetchOrders();
  },
};
</script>

<style scoped>
.admin-orders-container {
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

/* Orders Table */
.orders-table {
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

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover {
  background-color: #138496;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
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

.modal-body p {
  margin: 10px 0;
}

.modal-body ul {
  list-style: none;
  padding: 0;
}

.modal-body ul li {
  margin: 5px 0;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px;
  border-top: 1px solid #ddd;
}
</style>