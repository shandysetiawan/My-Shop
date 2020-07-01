<template>
  <div>
    <h3>Register Form</h3>
    <b-alert show variant="danger" dismissible v-if="getMessage">{{getMessage}}</b-alert>
    <b-form @submit.prevent="registerUser">
      <b-form-group
        label="Email address:"
        description="We'll never share your email with anyone else."
      >
        <b-form-input type="email" required placeholder="Enter email" v-model="emailRegister"></b-form-input>
      </b-form-group>

      <b-form-group label="Password:">
        <b-form-input
          type="password"
          id="password"
          required
          placeholder="Enter password"
          v-model="passwordRegister"
        ></b-form-input>
      </b-form-group>

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" @click="showPassword()" />
        <label class="form-check-label" for="exampleCheck1">Show Password</label>
      </div>

      <b-button type="submit" variant="primary">Register</b-button>
      <router-link v-bind:to="{ name: 'Home' }">
        <b-button type="button" variant="danger">Cancel</b-button>
      </router-link>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      message: "",
      emailRegister: "",
      passwordRegister: ""
    };
  },
  computed: {
    getMessage() {
      return this.$store.state.msg;
    }
  },
  methods: {
    registerUser() {
      this.$store.dispatch("register", {
        email: this.emailRegister,
        password: this.passwordRegister
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