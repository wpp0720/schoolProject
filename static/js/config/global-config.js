
import Vue from 'vue'
const G=window.g;
global.GlobalVue=new Vue();

//测试环境
export  let baseAjaxUrl=G.baseAjaxUrl;
export  let baseLiveAjaxUrl=G.baseLiveAjaxUrl;
export  let baseImgUrl=G.baseImgUrl;
//登录查询基础服务url
export  let baseThirdServiceUrl=G.baseThirdServiceUrl;
export  let baseWsUrl=G.baseWsUrl;
export  let appId=G.appId;
export  let appLink=G.appLink
global.baseWsUrl=G.baseWsUrl;


global.baseAjaxUrl=G.baseAjaxUrl;

global.baseThirdServiceUrl=G.baseThirdServiceUrl;
