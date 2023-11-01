<script>
import axios from "axios";

export default {
  name: "ProductCard",
  props: {
    productId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      product: {
        product_name: null,
        product_detail: [{
          productdetail_image_url: null
        }]
      },
      token: null
    }
  },

  created() {
    axios.post("/auth/guest").then((response) => {
      this.token = response.data.response?.guest_token

      axios.get(`/product/${this.productId}`, {
        headers: {
          Authorization: "Bearer " + this.token
        }
      }).then((response) => {
        console.log(response)
        this.product = response.data.response
      })
    })
  }
}
</script>

<template>
  <div class="flex flex-row justify-center items-center h-full">
    <div class="rounded-xl outline outline-1 outline-black">
      <div class="p-2 font-bold">
        {{product.product_name}}
      </div>

      <div class="flex justify-center w-60 flex-wrap">
        <template v-for="productDetail in product.product_detail">
          <img :src="productDetail.productdetail_image_url" class="p-2 rounded-xl w-64" :alt="product.product_name">
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../output.css";
</style>