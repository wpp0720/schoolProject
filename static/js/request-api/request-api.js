//直播api请求
import { fetchPost,fetchGet } from '../request-util.js'
import {baseLiveAjaxUrl} from '../config/global-config.js'
let baseUrl = 'http://127.0.0.1:3000/api/api';
export   const  api={
    /**
     * 测试
     */
    refreshCouponList(params){
         return fetchGet(baseUrl+'/product/refreshCouponList',params);
    },
    submitLogin(params){
        return fetchPost(baseUrl+'/user/login',params)
    }

   
}