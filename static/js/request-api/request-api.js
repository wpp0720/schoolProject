//直播api请求
import { fetchPost,fetchGet,fetchDelete} from '../request-util.js'
import {baseLiveAjaxUrl} from '../config/global-config.js'
let baseUrl = '/api';
// let baseUrl = 'http://api.rexuejiewu.com.cn';
export   const  api={
    //登录
    submitLogin(params){
        return fetchPost(baseUrl+'/user/login',params)
    },
    // 退出登录
    loginOut(params){
        return fetchGet(baseUrl+'/user/loginOut',params)
    },
    // 修改密码
    resetPassword(params){
        return fetchPost(baseUrl+'/user/resetPassword',params)
    },
    // 我的喜欢
    refreshProductLove(params){
        return fetchGet(baseUrl+'/product/refreshProductLove',params)
    },
    // 获取登录用户信息
    getUserInfo(params){
        return fetchGet(baseUrl+'/user/getUserInfo',params)
    },
    //获取和用户相关的优惠券信息
    refreshCouponList(params){
         return fetchGet(baseUrl+'/product/refreshCouponList',params);
    },
    //增加优惠券
    addCouponForStudent(params){
        return fetchGet(baseUrl+'/cart/addCouponForStudent',params)
    },

    //获取订单列表加and
    refreshSaleOrderAndDetailList(params){
        return fetchGet(baseUrl+"/product/refreshSaleOrderAndDetailList",params)
    },
    //获取订单明细refreshSaleOrderDetailList
    refreshSaleOrderDetailList(params){
        return fetchGet(baseUrl+"/product/refreshSaleOrderDetailList",params)
    },

    //获取订单列表
    refreshSaleOrderList(params){
        return fetchGet(baseUrl+'/product/refreshSaleOrderList',params);
    },
    //取消订单
    cancelSaleOrder(params){
        return fetchGet(baseUrl+'/product/cancelSaleOrder',params);
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
    },
      //获取商品评论
      getProductComment(params){
        return fetchGet(baseUrl+"/product/getProductComment",params)
    },
     //获取商品提问
     getProductAsk(params){
        return fetchGet(baseUrl+"/product/getProductAsk",params)
    },
    //获取商品提问
    addProductAsk(params){
        return fetchPost(baseUrl+"/product/addProductAsk",params)
    },
    //获取商品评论
    addProductComment(params){
        return fetchPost(baseUrl+"/product/addProductComment",params)
    },
     //增加商品喜欢
     addProductLove(params){
        return fetchPost(baseUrl+"/product/addProductLove",params)
    },
     //删除商品喜欢
     deleteProductLove(params){
        return fetchPost(baseUrl+"/product/deleteProductLove",params)
    },
    //删除购物车
    deleteProductToCart(params){
        return fetchDelete(baseUrl+"/cart/deleteProductToCart",{'data':params})
    }

   
}