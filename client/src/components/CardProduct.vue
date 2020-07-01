<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px; max-height: 150px;">
      <b-row no-gutters>
        <!-- <b-col md="6"> -->
        <b-card-img
          :src="product.image_url"
          :alt="product.name"
          class="rounded-0"
          style="width:200px;height:100px"
        ></b-card-img>
        <!-- </b-col> -->
        <!-- <b-col md="6"> -->
        <b-card-body :title="product.name">
          <b-card-text>Stock {{product.stock}}</b-card-text>
          <router-link v-bind:to="`/products/${product.id}`">
            <b-button variant="outline-dark">Detail</b-button>
          </router-link>
        </b-card-body>
        <!-- </b-col> -->
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    addAmount() {}
  }
};
</script>

<style>
</style>