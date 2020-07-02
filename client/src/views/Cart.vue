<template>
  <div>
    <Navbar />
    <h3 class="mt-3">My Cart</h3>
    <b-button variant="success" class="mb-3 mt-3 btn-lg">Check Out</b-button>
    <router-link v-bind:to="{ name: 'Home' }">
      <b-button variant="primary" class="mb-3 mt-3 btn-lg ml-3">Browse More Items</b-button>
    </router-link>
    <h3 v-if="getCarts.length==0">Cart Masih Kosong</h3>
    <!-- <h3 v-if="getCarts.length>0">Total Payment: {{this.total}}</h3> -->
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

          <b-card-text v-model="total">Total Price Rp {{cart.amount*cart.Product.price}}</b-card-text>
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
import Swal from "sweetalert2";

export default {
  name: "Cart",
  components: { Navbar },
  data() {
    return {
      amountInput: 0,
      total: 0
    };
  },
  created() {
    this.$store.dispatch("getCart");
  },
  methods: {
    removeCart(id) {
      Swal.fire({
        title: "Are you sure?",
        text:
          "You will not be able to recover this cart and need to re-add the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your cart has been deleted.", "success");
          this.$store.dispatch("deleteCart", id);
          this.$store.dispatch("getCart");
          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your cart is safe :)", "error");
        }
      });
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