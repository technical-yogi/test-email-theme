<template>
  <div class="container box">
    <div class="box__left">
      <Sidebar />
    </div>
    <div class="box__right box--white">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/SidebarComponent.vue'
export default {
  components:{
    Sidebar
  }
}
</script>

<style>
body {
  margin:0;
  padding:0;
  min-width: calc(100% - 10px);
  min-height: calc(100% - 10px);
  overflow-x: hidden;
  overflow-y: hidden;
  border: 5px solid black;
}
.container {
  width: 100%;
  height: calc(100vh - 10px);
  z-index: 10;
}
.box {
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
}
.box__left {
  background-color: black;
  opacity: 0.7;
  width: 16%;
  padding: 2%;
}
.box__right {
  width: 70%;
  padding: 3% 5%;
}
.box--white {
  background-color: white;
}
</style>
