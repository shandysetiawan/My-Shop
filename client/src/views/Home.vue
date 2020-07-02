<template>
  <div class="home">
    <Navbar />
    <Banner />
    <h2>Welcome to My Shop!</h2>
    <h3>List Product</h3>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <CardProduct
            v-for="(product,idx) in getProducts"
            :key="idx"
            :product="product"
            class="mr-2 mb-2 justify-content-md-center"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import CardProduct from "@/components/CardProduct.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Banner,
    CardProduct,
    Navbar
  },
  created() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    getProducts() {
      return this.$store.state.products;
    }
  },
  methods: {}
};
</script>
