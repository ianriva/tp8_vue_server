<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="header" fixed="top">
      <b-navbar-brand href="/"
        ><img src="../assets/logo.png" class="logo" alt="logo" />
        Home</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link to="/dondeEstamos" class="nav-link"
              >Donde Estamos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/productos" class="nav-link"
              >Productos</router-link
            >
          </li>
          <li>
            <!-- MODAL FORM -->
            <b-button v-b-modal.modal class="ml-2 mb-2"
              ><i class="fas fa-plus"></i> Agrega uno</b-button
            >
            <nuevo />
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Buscar</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Nuevo from "./Nuevo.vue";
export default {
  components: {
    Nuevo,
  },
};
</script>

<style>
.logo {
  max-width: 30px;
  max-height: 30px;
}
</style>
