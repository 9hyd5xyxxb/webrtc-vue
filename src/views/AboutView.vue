<template>
  <div class="about">
    <h1>This is an about page</h1>

    <vue-webrtc ref="webrtc" width="100%" roomId="sample-room"></vue-webrtc>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
