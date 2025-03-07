<!-- src/components/VideoPage.vue -->
<template>
    <div class="video-container">
      <h1 class="video-title">Glamming up with Thimna_Ndikandika</h1>
      <!-- Replace with your video source (local file or YouTube embed) -->
      <video width="640" height="360" controls class="video-player">
        <source src="@/assets/tutorial_video.mp4" type="video/mp4">
      </video>
    </div>
  </template>
  <script>
  export default {
    name: 'VideoPage'
  }
  </script>
  <style scoped>
  .video-container {
    text-align: center;
    padding: 40px;
  }
  .video-title {
    margin-bottom: 20px;
    color: #333;
  }
  .video-player {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    .video-player {
      width: 90%;
      height: auto;
    }
  }
  </style>