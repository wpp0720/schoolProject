//直播api请求
import { fetchPost,fetchGet } from '../request-util.js'
import {baseLiveAjaxUrl} from '../config/global-config.js'
let baseUrl = '/api';
// let baseUrl = 'http://api.rexuejiewu.com.cn';
export   const  api={
    /**
     * 测试
     */
    refreshCouponList(params){
         return fetchGet(baseUrl+'/product/refreshCouponList',params);
    },
    submitLogin(params){
        return fetchPost(baseUrl+'/user/login',params)
    },
    //清空购物车
    clearProductToCart(params){
        return fetchGet(baseUrl+'/cart/clearProductToCart',params)
    }


   
}