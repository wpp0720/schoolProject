//直播api请求
import { fetchPost,fetchGet } from '../request-util.js'
import {baseLiveAjaxUrl} from '../config/global-config.js'
export   const  api={
    /**
     * 测试
     */
    addPrice(params){
         return fetchGet(baseLiveAjaxUrl+'/test',params);
    },

   
}