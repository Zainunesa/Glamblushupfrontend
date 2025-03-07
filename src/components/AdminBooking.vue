<template>
  <div class="booking-container">
    <header class="booking-header">
      <h2>Admin Bookings</h2>
      <button @click="exportBookings" class="btn btn-primary export-btn">Export Bookings</button>
    </header>
    <main class="booking-content">
      <section class="booking-card">
        <h3>Booking Management</h3>
        <table class="table table-striped bookings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Stylist</th>
              <th>Special Request</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(booking, index) in bookings" :key="booking.booking_id">
              <td>{{ index + 1 }}</td>
              <td>{{ booking.full_name }}</td>
              <td>{{ booking.email }}</td>
              <td>{{ formatDate(booking.booking_date) }}</td>
              <td>{{ booking.booking_time }}</td>
              <td>{{ booking.stylist }}</td>
              <td>{{ booking.special_request || '-' }}</td>
              <td>
                <span class="status-badge" :class="statusClass(booking.status)">
                  {{ booking.status || 'Pending' }}
                </span>
              </td>
              <td>
                <button v-if="booking.status !== 'Denied'" @click="deleteBooking(booking.booking_id)" class="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "AdminBooking",
  data() {
    return {
      bookings: []
    };
  },
  methods: {
    async fetchBookings() {
      try {
        const response = await fetch("http://localhost:3001/api/admin/bookings");
        this.bookings = await response.json();
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    },
    async deleteBooking(bookingId) {
      if (!confirm("Are you sure you want to delete this booking?")) return;
      try {
        const response = await fetch(`http://localhost:3001/api/admin/bookings/${bookingId}`, {
          method: "DELETE"
        });
        if (response.ok) {
          this.bookings = this.bookings.filter(booking => booking.booking_id !== bookingId);
        } else {
          console.error("Failed to delete booking");
        }
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    },
    statusClass(status) {
      return {
        pending: status === "Pending",
        confirmed: status === "Confirmed",
        approved: status === "Approved",
        denied: status === "Denied"
      };
    }
  },
  mounted() {
    this.fetchBookings();
  }
};
</script>
<style scoped>
.booking-container {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}
.booking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.bookings-table {
  width: 100%;
  margin-top: 15px;
}
.status-badge.pending {
  background-color: #ffd700;
  color: #333;
}
.status-badge.confirmed {
  background-color: #90ee90;
  color: #1a5;
}
.status-badge.approved {
  background-color: #87cefa;
  color: #006;
}
.status-badge.denied {
  background-color: #ff9999;
  color: #c00;
}
.btn-sm {
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 0.8rem;
}
</style>