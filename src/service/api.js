import axios from 'axios'

axios.defaults.baseURL = '/api';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;

const proDetailApi = {
  async AddGoods(params) {
    return axios.get('/pat/html/api/ShoppingCart/AddGoods', params)
  }
};
export {proDetailApi}
