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
    },
    //获取商品分类
    refreshProductCategory(params){
        return fetchGet(baseUrl+"/product/refreshProductCategory",params)
    },
    //获取商品列表
    refreshProduct(params){
        return fetchGet(baseUrl+"/product/refreshProduct",params)
    },
    //获取商品明细
    getProductDetail(params){
        return fetchGet(baseUrl+"/product/getProductDetail",params)
    },
    //加入购物车
    addProductToCart(params){
       return fetchPost(baseUrl+"/cart/addProductToCart",params)
        },
    
     //获取购物车列表
     refreshShoppingCartList(params){
        return fetchGet(baseUrl+"/cart/refreshShoppingCartList",params)
    },
    //增加购物车数量
    editProductToCart(params){
        return fetchPost(baseUrl+"/cart/editProductToCart",params)
    },
    //获取用户登录信息
    getUserInfo(params){
        return fetchGet(baseUrl+"/user/getUserInfo",params)
    },
    //插入订单
    insertSaleOrder(params){
        return fetchGet(baseUrl+"/product/insertSaleOrder",params)
    }



   
}