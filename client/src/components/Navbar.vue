<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <router-link v-bind:to="{ name: 'Home' }">
        <b-navbar-brand>My Shop</b-navbar-brand>
      </router-link>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <router-link v-bind:to="{ name: 'Cart' }">
            <b-nav-text v-if="this.login">My Cart</b-nav-text>
          </router-link>
          <router-link v-bind:to="{ name: 'Login' }">
            <b-nav-text v-if="!this.login">Login</b-nav-text>
          </router-link>
          <b-nav-item @click="logOutUser" v-if="this.login">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      login: localStorage.token
    };
  },
  computed: {
    getLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    logOutUser() {
      // console.log("ke logout");
      localStorage.removeItem("token");
      localStorage.removeItem("emailUser");
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style>
</style>