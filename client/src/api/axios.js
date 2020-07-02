import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://e-commerce-atma.herokuapp.com/'
})

export default Axios