//直播api请求
import { api } from './request-api/request-api.js'
import $ from 'jquery'
import { baseLiveAjaxUrl,baseAjaxUrl,baseImgUrl,appId} from './config/global-config.js'

//微信jssd参数获取
export const wxGetUtil = {
    //创建socket对象
    getAccessToken: function (sessionId) {
        let JsapiTicket = getWeChatJsapiTicket();
        let timestamp = Date.parse(new Date());//时间戳
        let noncestr = randomString(16);
        let url = window.location.href;
        let str = "jsapi_ticket=" + JsapiTicket + "&noncestr=" + noncestr + "&timestamp=" + timestamp + "&url=" + url;
        let signature = sha1(str);
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: appId, // 必填，企业号的唯一标识，此处填写企业号corpid
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: signature,// 必填，签名，见附录1
            jsApiList: [
                'checkJsApi',  //判断当前客户端版本是否支持指定JS接口
                'onMenuShareTimeline', //分享给好友
                'onMenuShareAppMessage', //分享到朋友圈
                'onMenuShareQQ',  //分享到QQ
                'getNetworkType',
                'onMenuShareWeibo', //分享到微博
                'previewImage'//预览微信图片接口
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.error(function (res) {
         //   alert(res);
        })
         getShare();
        function getShare() {
            let url = baseLiveAjaxUrl + "/live/auction/client/share";
            let params = {};
            params.sessionId = sessionId;
            $.ajax({
                type: 'get',
                url: url,
                data: params,
                dataType: "json",
                async: true,
                success: function (data) {
                    let title =data.sessionName+"高清无延时直播竞拍-"+data.abbre;
                    let desc =data.sessionName+"于"+data.startTimeS+"开拍，登录易拍全球专场直播间可在线观看并同步参拍。";
                    let link = baseAjaxUrl + "/index/" + sessionId;
                    // let title =data.abbre+"-"+data.sessionName+" 高清视频直播竞拍";
                    // let desc=data.abbre+data.sessionName;
                    // let link=baseAjaxUrl+"/index/"+sessionId;
                    // if (data.sessionStatus == 0) {
                    //     desc = desc + "将于" + data.startTimeS + ")开始拍卖";
                    //     desc=desc+"，同时易拍全球提供高清视频直播、在线委托出价参拍服务，更多拍品高清大图及品相报告请查看"+data.sessionName+"。";
                    // } else if (data.sessionStatus == 1) {
                    //     desc = desc + "正在拍卖，您可通过易拍全球提供的直播竞拍服务，直接在线出价参拍，全场直播请登录"+
                    //    data.sessionName+"直播间。";
                    // }

                    wx.ready(function () {
                        wx.onMenuShareTimeline({
                            title: title, // 分享标题
                            link: link, // 分享链接，该链接域名必须与当前企业的可信域名一致
                            desc: desc, // 分享描述
                            imgUrl: baseImgUrl+data.sessionPic+'.jpg', // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            }
                        });
                        wx.onMenuShareAppMessage({
                            title: title, // 分享标题
                            link: link,
                            desc: desc, // 分享描述
                            imgUrl: baseImgUrl+data.sessionPic+'.jpg', // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            }
                        });
                        wx.onMenuShareQQ({
                            title: title, // 分享标题
                            link: link, // 分享链接
                            desc: desc, // 分享描述
                            imgUrl: baseImgUrl+data.sessionPic+'.jpg', // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            }
                        });
                        wx.onMenuShareQZone({
                            title: title, // 分享标题
                            desc: desc, // 分享描述
                            link: link, // 分享链接
                            imgUrl: baseImgUrl+data.sessionPic+'.jpg', // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            }
                        });
                    });

                },
                error: function (res) {
                    console.log(res);
                }
            });
        };
        //获取getWeChatJsapiTicket
        function getWeChatJsapiTicket() {
            let result = $.ajax({ url: baseAjaxUrl + "/epai_frontend/weChat/getWeChatJsapiTicket.do", async: false, type: 'POST' });
            //    console.log(result.responseJSON);
            return result.responseJSON.jsapiTicket;
        };
        //获取微信tokent
        function wxGetAccessToken() {
            let params = null;
            api.getWeChatAccessToken(params).then(res => {
                // console.log("accessToken" + "*********");
                // console.log(res);
            }).catch(error => {
                let params = { msg: "获取token错误" };
                GlobalVue.$emit('alert', params);
            });
        };
        function randomString(len) {
            len = len || 32;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
            var maxPos = $chars.length;
            var pwd = '';
            for (var i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        };
        function sha1(sIn) {
            function add(x, y) {
                return ((x & 0x7FFFFFFF) + (y & 0x7FFFFFFF)) ^ (x & 0x80000000) ^ (y & 0x80000000);
            }

            function SHA1hex(num) {
                var sHEXChars = "0123456789abcdef";
                var str = "";
                for (var j = 7; j >= 0; j--)
                    str += sHEXChars.charAt((num >> (j * 4)) & 0x0F);
                return str;
            }

            function AlignSHA1(sIn) {
                var nblk = ((sIn.length + 8) >> 6) + 1,
                    blks = new Array(nblk * 16);
                for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
                for (i = 0; i < sIn.length; i++)
                    blks[i >> 2] |= sIn.charCodeAt(i) << (24 - (i & 3) * 8);
                blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);
                blks[nblk * 16 - 1] = sIn.length * 8;
                return blks;
            }

            function rol(num, cnt) {
                return (num << cnt) | (num >>> (32 - cnt));
            }

            function ft(t, b, c, d) {
                if (t < 20) return (b & c) | ((~b) & d);
                if (t < 40) return b ^ c ^ d;
                if (t < 60) return (b & c) | (b & d) | (c & d);
                return b ^ c ^ d;
            }

            function kt(t) {
                return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
                    (t < 60) ? -1894007588 : -899497514;
            }
            var x = AlignSHA1(sIn);
            var w = new Array(80);
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            var e = -1009589776;
            for (var i = 0; i < x.length; i += 16) {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;
                var olde = e;
                for (var j = 0; j < 80; j++) {
                    if (j < 16) w[j] = x[i + j];
                    else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                    var t = add(add(rol(a, 5), ft(j, b, c, d)), add(add(e, w[j]), kt(j)));
                    e = d;
                    d = c;
                    c = rol(b, 30);
                    b = a;
                    a = t;
                }
                a = add(a, olda);
                b = add(b, oldb);
                c = add(c, oldc);
                d = add(d, oldd);
                e = add(e, olde);
            }
            var SHA1Value = SHA1hex(a) + SHA1hex(b) + SHA1hex(c) + SHA1hex(d) + SHA1hex(e);
            return SHA1Value.toUpperCase();
        };
    },
}