<template>
  <div>
    <Navbar />
    <!-- <b-alert show variant="success" dismissible v-if="getMessage">{{getMessage}}</b-alert> -->
    <div class="mt-4">
      <b-card :img-src="getProduct.image_url" img-alt="getProduct.name" img-left class="mb-3">
        <h4>{{getProduct.name}}</h4>
        <p>Stock tersedia {{getProduct.stock}}</p>
        <p>Harga Satuan Rp {{getProduct.price}}</p>
        <h4>Silakan masukan jumlah yang diinginkan</h4>
        <b-form-input type="number" min="1" :max="getProduct.stock" v-model="amountInput"></b-form-input>
        <b-button variant="outline-dark" class="mt-3" @click="addCart">Add to Cart</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Detail",
  components: { Navbar },
  data() {
    return {
      amountInput: 0,
      message: ""
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.$store.dispatch("getDetail", this.$route.params.id);
  },
  computed: {
    getProduct() {
      return this.$store.state.product;
    },
    getMessage() {
      return this.$store.state.msgAdd;
    }
  },
  methods: {
    addCart() {
      if (!localStorage.token) {
        this.$router.push({ name: "Login" });
        // this.message = "Please register or login first to start purchase";

        // setTimeout(() => {
        //   this.message = "";
        // }, 5000);
      } else {
        this.message = "";
        this.$store.dispatch("addCart", {
          product: this.$route.params.id,
          amount: this.amountInput
        });
      }
    }
  }
};
</script>

<style>
img {
  width: 300px;
  height: 300px;
}
</style>