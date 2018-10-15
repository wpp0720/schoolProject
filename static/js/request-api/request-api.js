//直播api请求
import { fetchPost,fetchGet } from '../request-util.js'
import {baseLiveAjaxUrl} from '../config/global-config.js'
let baseUrl = '/api';
// let baseUrl = 'http://api.rexuejiewu.com.cn';
export   const  api={
    //登录
    submitLogin(params){
        return fetchPost(baseUrl+'/user/login',params)
    },
    //获取和用户相关的优惠券信息
    refreshCouponList(params){
         return fetchGet(baseUrl+'/product/refreshCouponList',params);
    },
    //获取订单列表
    refreshSaleOrderList(params){
        return fetchGet(baseUrl+'/product/refreshSaleOrderList',params);
    },
    //清空购物车
    clearProductToCart(params){
        return fetchGet(baseUrl+'/cart/clearProductToCart',params)
    }


   
}