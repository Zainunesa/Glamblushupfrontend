<template>
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup-content">
      <span class="close-btn" @click="closePopup">X</span>
      <video autoplay loop muted class="video-popup">
        <source src="@/assets/Pink Beige Bold Minimalist Skincare Promotion Instagram Story.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  mounted() {
    const hasPopupBeenShown = localStorage.getItem('popupShown');
    if (!hasPopupBeenShown) {
      this.showPopup = true;
      localStorage.setItem('popupShown', 'true');
    }
  },
  methods: {
    closePopup() {
      console.log("Close button clicked");
      this.showPopup = false;
    },
  },
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure this is higher than the navbar */
}

.popup-content {
  background: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 50%;
  max-width: 300px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 16px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  color: black;
  cursor: pointer;
  border: 2px solid black;
}

.video-popup {
  width: 100%;
  border-radius: 8px;
}
</style>