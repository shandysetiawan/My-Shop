<template>
  <div>
    <Navbar />
    <b-button variant="success">Check Out</b-button>
    <div class="row">
      <div v-for="(cart,idx) in getCarts" :key="idx">
        <b-card
          :title="cart.Product.name"
          :img-src="cart.Product.image_url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-3 mr-2 row-sm-3"
        >
          <b-card-text>Amount {{cart.amount}}</b-card-text>

          <b-card-text>Total Price {{cart.amount*cart.Product.price}}</b-card-text>
          <button
            type="button"
            class="btn btn-warning mr-2"
            @click="removeCart(cart.id)"
          >Remove From Cart</button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Cart",
  components: { Navbar },
  data() {
    return {
      amountInput: 0
    };
  },
  created() {
    this.$store.dispatch("getCart");
  },
  methods: {
    removeCart(id) {
      console.log(id);
      this.$store.dispatch("deleteCart", id);
      this.$store.dispatch("getCart");
    }
  },
  computed: {
    getCarts() {
      return this.$store.state.carts;
    }
  }
};
</script>

<style>
b-card {
  max-height: 30rem;
}
</style>