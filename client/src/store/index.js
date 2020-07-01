import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import axios from '../api/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    product: {},
    isLogin: false,
    msg: "",
    msgAdd: ""
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_CARTS(state, payload) {
      state.carts = payload
      state.msgAdd = "Success added to cart"

    },
    SET_PRODUCT(state, payload) {
      state.product = payload
    },
    SET_LOGIN(state, payload) {
      state.isLogin = true
      state.msgLogin = payload
    },
    SET_ERROR(state, payload) {
      state.msg = payload
    }

  },
  actions: {

    getProducts(context, payload) {
      axios({
        method: 'get',
        url: '/customer/products',
        headers: {
          access_token: localStorage.token
        }
      })
        .then((response) => {

          context.commit('SET_PRODUCTS', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getCart(context, payload) {

      axios({
        method: 'get',
        url: '/carts',
        headers: {
          access_token: localStorage.token
        }
      })
        .then((response) => {

          context.commit('SET_CARTS', response.data)
        })
        .catch((err) => {
          console.log(err)
        })

    },

    getDetail(context, payload) {

      axios({
        method: 'get',
        url: `/customer/products/${payload}`,
        headers: {
          access_token: localStorage.token
        }
      })
        .then((response) => {
          context.commit('SET_PRODUCT', response.data)
        })
        .catch((err) => {

          console.log(error)
          // context.commit('SET_ERROR', error.response.data.message)
        })

    },
    addCart(context, payload) {

      axios({
        method: 'post',
        url: `/carts`,
        data: { product: payload.product, amount: payload.amount },
        headers: {
          access_token: localStorage.token
        }
      })
        .then((response) => {
          // console.log(response.data)
          context.commit('SET_CARTS', response.data)
          router.push({ name: "Cart" });
        })
        .catch((error) => {
          console.log(error)
          context.commit('SET_ERROR', error.response.data.message)


        })


    },
    login(context, payload) {
      axios
        .post(`/loginCustomer`, {
          email: payload.email,
          password: payload.password
        })
        .then(response => {
          // console.log(response.data);
          // console.log('can logged?')

          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("emailUser", response.data.emailUser);
          context.commit('SET_LOGIN', response.data)
          router.push({ name: "Home" });

        })
        .catch(error => {
          console.log(error)
          context.commit('SET_ERROR', error.response.data.message)
          // if (error.response.data.message == "Internal Server Error!") {
          //   this.msg =
          //     "Pastikan Name password dan email (dengan format email) sudah terisi";
          // } else {
          //   this.msg = error.response.data.message;
          // }

          // setTimeout(() => {
          //   this.message = "";
          // }, 5000);
        });
    },
    register(context, payload) {

      axios
        .post(`/registerCustomer`, {
          email: payload.email,
          password: payload.password
        })
        .then(response => {
          // console.log(response.data);
          // console.log('can logged?')

          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("emailUser", response.data.emailUser);

          router.push({ name: "Home" });
        })
        .catch(error => {
          console.log(error.response)
          context.commit('SET_ERROR', error.response.data.message)
          // if (error.response.data.message == "Internal Server Error!") {
          //   this.msg =
          //     "Pastikan Name password dan email (dengan format email) sudah terisi";
          // } else {
          //   this.msg = error.response.data.message;
          // }

          // setTimeout(() => {
          //   this.message = "";
          // }, 5000);
        });

    },
    deleteCart(context, payload) {

      axios({
        method: 'delete',
        url: `/carts/${payload}`,
        headers: {
          access_token: localStorage.token
        }
      })
        .then((response) => {
          // console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
          context.commit('SET_ERROR', error.response.data.message)
        })


    }

  },
  modules: {
  },
});
