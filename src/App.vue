<template>
  <div id="app">
    <div id="nav">
      <menu-nav-bar></menu-nav-bar>
    </div>
    <router-view />
  </div>
</template>

<script>
import  Navigation  from "@/components/Navigation";

export default {
  components: {
    "menu-nav-bar": Navigation,
  },
};
</script>

<style></style>
