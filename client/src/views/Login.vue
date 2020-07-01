<template>
  <div>
    <h1>Welcome to my shop!</h1>
    <h3>Login Form</h3>
    <h3>Please login or register to start purchase</h3>
    <b-alert variant="danger" v-if="getMessage" show dismissible>{{this.getMessage}}</b-alert>
    <b-form @submit.prevent="loginUser">
      <b-form-group
        label="Email address:"
        description="We'll never share your email with anyone else."
      >
        <b-form-input type="email" required placeholder="Enter email" v-model="emailLogin"></b-form-input>
      </b-form-group>

      <b-form-group label="Password:">
        <b-form-input
          type="password"
          id="password"
          required
          placeholder="Enter password"
          v-model="passwordLogin"
        ></b-form-input>
      </b-form-group>

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" @click="showPassword()" />
        <label class="form-check-label" for="exampleCheck1">Show Password</label>
      </div>

      <b-button type="submit" variant="success">Login</b-button>
      <router-link v-bind:to="{ name: 'Register' }">
        <b-button type="button" variant="danger">Register</b-button>
      </router-link>
    </b-form>
    <router-link v-bind:to="{ name: 'Home' }">
      <b-button type="button" variant="primary">Back to Dashboard</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      message: "",
      emailLogin: "",
      passwordLogin: ""
    };
  },
  computed: {
    getMessage() {
      return this.$store.state.msg;
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch("login", {
        email: this.emailLogin,
        password: this.passwordLogin
      });
    },
    showPassword() {
      let pass = document.getElementById("password");
      if (pass.type == "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    }
  }
};
</script>

<style>
</style>