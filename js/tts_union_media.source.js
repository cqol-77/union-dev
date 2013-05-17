(function (window) {
    if (typeof window.TTSMedia !== "undefined") {
        return false;
    }
    window.TTSMedia = true;
    var document = window.document,
        navigator = window.navigator,
        global = "__TTS",
        ttsunionId,
        MEDIA_config;
    var url = window.location.href,
        host = window.location.host,
        flag = true,
        firstLoad = true,
        hashChange = true;
    var _imgUrl = '',
        mediaSize = "_120x120.jpg";
    var mediaBox;
    var hasSim = false,
        hasBrand = false,
        hasCommon = false,
        hasMedia = false;
    var api = {
        upai:'http://ttsmedia.b0.upaiyun.com/',
        kc:'http://show.kc.taotaosou.com/adShow163.do?',
        kctu:'http://show.kc.taotaosou.com/tumeiti.do?',
        re:'re.taotaosou.com', //打点接口,
        log:'http://dc.log.taotaosou.com/statistics.do?systemName=tts_media',
        test:'http://www.ttsunion.com/'
    };

    //取联盟ID
    ttsunionId = (function () {
        var script = document.getElementsByTagName("script"),
            item,
            _id;
        for (var i = 0, len = script.length; i < len; i++) {
            item = script[i];
            if (item.src && item.src.match(/tts_union_center/)) {
                //_id = script[i].src.match(new RegExp("[\?\&]suid=([^\&]*)(\&?)", "i"));
                _id = script[i].src.match(/[\?\&]suid=([^\&]*)(\&?)/i);
                return _id ? _id[1] : false;
            }
        }
    })();
    //过滤站点
    var skiphrefs = /taobao.com|tmall.com|etao.com|alipay|zhifubao|alimama|alibaba/;

    if (url.match(skiphrefs)) {
        return false;
    }

    /**
     * 判断浏览器是否是ie
     * @return {Boolean}
     */
    function isIE() {
        //return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
        return new RegExp("msie", "i").test(navigator.userAgent) && !new RegExp("opera", "i").test(navigator.userAgent);
    }

    /**
     * 对象在浏览器里的相对位置
     * @param elm 图片对象
     * @return {Object} 放回top/left偏移量
     */
    function getOffset(elm) {
        var left = 0;
        var top = 0;
        while (elm) {
            left += elm.offsetLeft;
            top += elm.offsetTop;
            elm = elm.offsetParent;
        }
        return{left:left, top:top};
    }

    /**
     * 改变埋点URl路径
     * @param {String} url 第一个url
     */
    function changeUrl(url) {
        //TODO: substring 是否可以封装成一个方法
        if (url.match(/.gtimg.com/)) {
            url = "http://img1" + url.substring(url.indexOf(".gtimg.com"));
        } else if (url.match(/.rayliimg.cn/)) {
            url = "http://image1" + url.substring(url.indexOf(".rayliimg.cn"));
        } else if (url.match(/biz.itc.cn/)) {
            url = "http://m1" + url.substring(url.indexOf(".biz.itc.cn"));
        } else if (url.match(/&f=/)) {
            url = "http://thumb1.yokacdn.com/p_420_625/" + url.substring(url.indexOf("&f=") + 3).replace(":", "") + ".jpg";
        } else if (url.match(/.cache./)) {
            url = 'http://img1' + url.substring(url.indexOf(".cache."));
        } else if (url.match(/\?/)) {
            url = url.split('?')[0];
        }
        return url;
    }

    /**
     * 删除DOM
     */
    function delMedia() {
        if (TTSUI('.tts_media')[0]) {
            TTSUI('.tts_media').each(function (i, item) {
                item.parentNode.removeChild(item);
            });
        }
        flag = true;
    }

    /**
     * 埋点
     * @param imgId
     * @param pObj
     * @param objSub
     * @param eObj
     * @param eSub
     */
        //TODO: 缺少参数说明，5个参数是否过多，可以省略一些参数吗？
    function statistics(imgId, pObj, objSub, eObj, eSub) {
        load(api.log + '&pv=' + MEDIA_config.id + ',' + imgId + ',' + pObj + ',' + objSub + ',' + eObj + ',' + eSub);
    }

    /**
     * 过滤展示图片 如：display='none';
     * @param img
     * @return {Boolean}
     */
        //TODO: 本方法只在 getCurrentPageImages() 使用，是否可以放进 getCurrentPageImages() 里面
    function isValidImage(img) {
        //["JPG", "PNG","JPEG"]
        var imgType = ["JPG", "PNG", "JPEG"];
        //下面的条件也会匹配到这样的图片 <img src="data:">
        //建议改成 img.src.match(/data:/)
        if (img.src && img.src.match(/data:/)) {
            return false;
        }
        if (skipImg(img)) {
            for (var i = 0; i < imgType.length; i++) {
                var srcType = imgType[i];
                var fixSrc = img.src.split('?')[0].slice(-4).toUpperCase();
                if (fixSrc.match(srcType)) {
                    var newImg = new Image();
                    newImg.src = img.src;
                    if (newImg.width >= MEDIA_config.minWidth && newImg.height >= MEDIA_config.minHeight) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * 特殊图片过滤图片
     * @param img 图片对象
     * @return {Boolean}
     */
    function skipImg(img) {
        if (img.style.display === "none" || img.id === "preloadBig") {
            return false;
        }
        if (img.parentNode) {
            if (img.parentNode.style.display === "none" || img.parentNode.id === "accessPlay") {
                return false;
            } else if (img.parentNode.parentNode) {
                if (img.parentNode.parentNode.id === "nphLayoutGG" || img.parentNode.parentNode.id === "zuihoudiv" ||
                    img.parentNode.parentNode.id === "htpGG") {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * 过滤spider采集图片
     * @param img 图片对象
     * @return {Boolean}
     */
    function isValidSpiderImage(img) {
        var imgType = MEDIA_config.confSpider.imgType;
        if (img.src && img.src.indexOf("data:") === 0) {
            return false;
        }
        if (skipImg(img)) {
            for (var i = 0; i < imgType.length; i++) {
                var srcType = imgType[i].toUpperCase();
                var fixSrc = img.src.split('?')[0].slice(-4).toUpperCase();
                if (fixSrc.match(srcType)) {
                    var newImg = new Image();
                    newImg.src = img.src;
                    if (newImg.width >= MEDIA_config.minWidth && newImg.height >= MEDIA_config.minHeight) {
                        return true;
                    }
                    /*if (img.width >= MEDIA_config.confSpider.macthHeight && img.height >= MEDIA_config.confSpider.macthWidth) {
                     return true
                     }*/
                }
            }
        }
        return false;
    }

    /**
     * 匹配spider采集图片
     * @param d document对象
     * @param eImages 目标图片数组
     * @param opts 图片信息
     * @return {*} 返回目标图片数组
     */
    function matchSpiderImage(d, eImages, opts) {
        var _document = document || d;
        eImages = eImages || [];
        opts = opts || {};
        for (var i = 0; i < _document.images.length; i++) {
            var img = _document.images[i];
            if (isValidSpiderImage(img)) {
                if (opts) {
                    img._parentNode = opts.parentNode || null;
                }
                eImages.push(img);
            }
        }
        return eImages;
    }

    /**
     * 加载js
     * @param url 链接地址
     * @param callback 回调
     */
    function load(url, callback) {
        var script = document.createElement("script");

        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = url;

        script.onload = script.onreadystatechange = function () {
            if (!script.isLoad && (!script.readyState || script.readyState === "loaded" || script.readyState === "complete")) {
                script.isLoad = true;
                if (typeof callback === 'function') {
                    callback(script);
                }
                script.onload = script.onreadystatechange = null;
                script.parentNode.removeChild(script);
            }
        };

        document.body.appendChild(script);
    }

    /**
     * 加载CSS
     * @param url 地址
     */
    function loadCSS(url) {
        var head = document.head || document.getElementsByTagName('head')[0],
            link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        head.appendChild(link);
    }

    /**
     * 取图片
     * @param d document对象
     * @param eImages 目标图片数组
     * @param opts 图片信息
     * @return {*} 返回目标图片数组
     */
    function getCurrentPageImages(d, eImages, opts) {
        var _document = document || d;
        eImages = eImages || [];
        opts = opts || {};
        for (i = 0; i < _document.images.length; i++) {
            var img = _document.images[i];
            if (isValidImage(img)) {
                img = encapsulateImage(img);
                if (opts) {
                    img._parentNode = opts.parentNode || null;
                }
                eImages.push(img);
            }
        }
        return eImages;
    }

    /**
     * 分装图片
     * @param img 图片对象
     * @return {Object} 返回分装后的图片对象信息
     */
    function encapsulateImage(img) {
        var obj = {
            x:img.getBoundingClientRect().left,
            y:img.getBoundingClientRect().top,
            src:changeUrl(img.src),
            img:img
        };
        return obj;
    }

    /**
     * 过滤图片 如：图片在同一位置
     * @param arr 图片数组
     * @return {Array} 返回过滤后的图片数组
     */
    function uniqImgObj(arr) {
        var object = {};

        function have(obj) {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].y === obj.y) {
                    temp.push(i);
                }
            }
            return temp;
        }

        for (var i = 0; i < arr.length; i++) {
            object[i] = arr[i];
            var num = have(arr[i]);
            if (num.length > 1) {
                for (var j = 0; j < num.length; j++) {
                    delete object[num[j]];
                }
            }
        }
        arr = [];
        for (var name in object) {
            arr.push(object[name]);
        }
        return arr;
    }

    /**
     * 获取媒体站配置信息
     */
    function getConfig() {
        /*var config = {
         "id":3000100041,
         "keyType":162103,
         "minWidth":300,
         "minHeight":300,
         "maxSize":2,
         "priority":['2', '3'],
         "confSim":{"adStyle":1, "tabSize":3, "popDirect":1, "popTime":3, "markerStyle":1, "markerShow":1, "hover":1},
         //"confBrand":{"adStyle":2, "popTime":3, "popNum":1, "hover":2},
         "confBrand":{"adStyle":2, "popTime":3, "popNum":0, "hover":1, "popDirect":1, "closed":1},
         "confCommon":{"adStyle":1, "tabSize":3, "popDirect":2, "popTime":3, "hover":1,
         "keyWordList":[
         ['\u624b\u5957', '\u624b\u5957', '\u5de5\u88c5\u88e4'],
         ['\u793c\u670d\u88d9', '\u624b\u5957', '\u955c\u6846'],
         ['\u624b\u5957', '\u624b\u5957', '\u5de5\u88c5\u88e4'],
         ['\u793c\u670d\u88d9', '\u624b\u5957', '\u955c\u6846'],
         ['\u624b\u5957', '\u624b\u5957', '\u5de5\u88c5\u88e4'],
         ['\u793c\u670d\u88d9', '\u624b\u5957', '\u955c\u6846']
         ]},
         "confSpider":{"macthNum":3, "macthWidth":350, "macthHeight":300, "imgType":['JPG', 'JPEG', 'PNG']}
         };
         MEDIA_config = config;
         init();
         hasMedia = false;*/
        hasMedia = false;
        TTSUI.getJSON(api.test + "getConfig.do?name=jsonp&unionid=" + ttsunionId +
            "&jsonp=?" +
            "&url=" + encodeURIComponent(url), function (data) {
            if (!data) {
                return false;
            } else {
                MEDIA_config = data;
                init();
                statistics('0', 'PAG', '0', 'PV', 'ALL');
            }
        });
    }

    /**
     * 初始化
     * @return {Boolean}
     */
    function init() {
        if (!MEDIA_config) {
            return false;
        }
        var oldNum;
        //页面图片 改变
        var domChangeFn = function () {
            var imgNum = TTSUI("img").not(".tts_media img").size();
            var domChangeImg = [];
            var intervalKey = setInterval(function () {
                if (TTSUI("img").not(".tts_media img").size() !== imgNum) {
                    domChangeImg = getCurrentPageImages();
                    if (oldNum.length !== domChangeImg.length) {
                        setTimeout(function () {
                            getCurrentImg();
                        }, 500);
                    }
                    clearInterval(intervalKey);
                    domChangeFn();
                }
            }, 100);
        };
        //筛选图片
        function getCurrentImg() {
            var currentPageEImages = getCurrentPageImages();
            var uniqPageEImages = uniqImgObj(currentPageEImages);
            for (var j = 0, ulen = uniqPageEImages.length; j < ulen; j++) {
                _imgUrl += ',' + encodeURIComponent(uniqPageEImages[j].src);
            }
            //load('http://mlog.ttsunion.com/statistics.do?type=ZZpv_&fr_url=&banner_url=&bak=' + '&img_url=' + _imgUrl.substring(1));
            load('http://log.taotaosou.com/statistics.do?type=ZZpv_&fr_url=&banner_url=&bak=' + '&img_url=' + _imgUrl.substring(1));
            if (MEDIA_config.confSpider) {
                var spiderImgs = matchSpiderImage();
                if (spiderImgs.length > 0) {
                    if (spiderImgs.length > MEDIA_config.confSpider.macthNum) {
                        spiderImgs.length = MEDIA_config.confSpider.macthNum;
                    }
                    var str = '';
                    for (var i = 0; i < spiderImgs.length; i++) {
                        str += ',' + encodeURIComponent(spiderImgs[i].src);
                    }
                    //spider 采集
                    load(api.test + 'cltProxy.do?urls=' + str.substring(1) +
                        '&pageUrl=' + encodeURIComponent(url));
                }
            }
            oldNum = currentPageEImages;
            if (uniqPageEImages.length > 0) {
                if (uniqPageEImages.length > MEDIA_config.maxSize) {
                    var unPinImg = uniqPageEImages.slice(MEDIA_config.maxSize);
                    for (var k = 0, len = unPinImg.length; k < len; k++) {
                        statistics(unPinImg[k].src, 'IMG', '0', 'PV', 'ALL');
                        statistics(unPinImg[k].src, 'IMG', '0', 'PV', 'ADN');
                    }
                    uniqPageEImages.length = MEDIA_config.maxSize;
                }
                delMedia(uniqPageEImages);
                regMedia(uniqPageEImages);
            } else {
                statistics('0', 'PAG', '0', 'PV', 'ADN');
                delMedia();
            }
        }

        setTimeout(function () {
            getCurrentImg();
            domChangeFn();
            // 改变img src 的时候才触发
            TTSUI("img").not(".tts_media img").load(function () {
                if (hashChange && firstLoad) {
                    firstLoad = false;
                    setTimeout(function () {
                        getCurrentImg();
                    }, 500);
                }
            });
        }, 800);
    }

    /**
     * 初始化图媒体
     */
    function init_media() {
        TTSUI(document).ready(function () {
            var hashTimer = null;
            loadCSS(api.upai + 'union/css/p4p-2.0.css?v=@@timestamp');
            getConfig();
            //TODO: 给 IE6/7 模拟 haschange 事件，封装到 $(window).bind('hashchange')
            //改变hash值 重新去图片
            //参考 KISSY: http://docs.kissyui.com/docs/html/api/core/event/hashchange.html
            if (isIE()) {
                var hash = document.location.hash;
                TTSUI("body").bind('click', function () {
                    hashTimer = setTimeout(function () {
                        if (document.location.hash !== hash) {
                            delMedia();
                            clearTimeout(hashTimer);
                            hashChange = false;
                            hash = document.location.hash;
                            hasSim = false;
                            hasBrand = false;
                            hasCommon = false;
                            getConfig();
                        }
                    }, 500);
                });
            } else {
                TTSUI(window).bind('hashchange', function () {
                    hashChange = false;
                    delMedia();
                    clearTimeout(hashTimer);
                    hashTimer = setTimeout(function () {
                        hasSim = false;
                        hasBrand = false;
                        hasCommon = false;
                        getConfig();
                    }, 500);
                });
            }
        });
    }

    /**
     * 注册图媒体
     * 首先请求后台管理系统
     * @param eImages 图片数组
     */
        //TODO: 缺少参数说明
    function regMedia(eImages) {
        //图媒体容器
        if (!document.getElementById(global + '_media')) {
            mediaBox = document.createElement('div');
            mediaBox.className = 'tts_media';
            document.body.appendChild(mediaBox);
        }
        var str = '';
        for (var i = 0, len = eImages.length; i < len; i++) {
            str += ',' + encodeURIComponent(eImages[i].src);
        }
        TTSUI.getJSON(api.test + "data/getImageOffer.do?imgUrls=" + str.substring(1) +
            "&clientid=1&name=json&jsonp=?", function (data) {
            TTSUI(eImages).each(function (i, eImage) {
                /**
                 * 首先:请求内部后台打点信息接口, 判断图片当前状态 （可展示于否）
                 * 然后:一次请求广告系统，返回所有广告信息
                 */
                getStaus(eImage, data);
            });
        });
    }

    /**
     * 判断图片状态 根据状态走相应流程
     * @param eImage 图片对象
     * @param data 打点信息
     */
    function getStaus(eImage, data) {
        /**
         * 优先级判断放广告系统；前端只负责数据展示
         */
        var tagList = data.tagList;
        TTSUI(tagList).each(function (i, item) {
            var status = item.lhandleStatus;
            if (item.imageUrl === eImage.src) {
                switch (status) {
                    case 4: //啥都不出
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                        return false;
                    case 1: //出广告 有同款出同款
                        regImg(eImage, item, i);
                        break;
                    case 2: //只不出相似广告
                        regImg(eImage, 2, i);
                        break;
                    default :
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                        break;
                }
            }
        });
    }

    /**
     * 对每张图片注册图媒体
     * @param eImage 图片对象
     * @param data 打点信息
     * @param num 第几张图片
     */
    function regImg(eImage, data, num) {
        if (MEDIA_config.priority[0] === '1') {
            if (data === 2) {
                if (MEDIA_config.priority[1] === '2') {
                    new OwnMedia(eImage, MEDIA_config.confBrand).getBrand();
                } else if (MEDIA_config.priority[1] === '3') {
                    new OwnMedia(eImage, MEDIA_config.confCommon).getCommon(num);
                } else {
                    statistics('0', 'PAG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                }
            } else if (data.id !== 0) {
                new OwnMedia(eImage, MEDIA_config.confSim).getSim(data);
            } else {
                if (MEDIA_config.priority[1] === '2') {
                    new OwnMedia(eImage, MEDIA_config.confBrand).getBrand();
                } else if (MEDIA_config.priority[1] === '3') {
                    new OwnMedia(eImage, MEDIA_config.confCommon).getCommon(num);
                } else {
                    statistics('0', 'PAG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                }
            }
        } else {
            if (MEDIA_config.priority[0] === '2') {
                new OwnMedia(eImage, MEDIA_config.confBrand).getBrand();
            } else if (MEDIA_config.priority[0] === '3') {
                new OwnMedia(eImage, MEDIA_config.confCommon).getCommon(num);
            } else {
                statistics('0', 'PAG', '0', 'PV', 'ADN');
                statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
            }
        }
    }

    /**
     * 图媒体构造函数
     * @param eImage 图片对象
     * @param config 配置信息
     * @constructor
     */
        //TODO: 缺少参数说明
    function OwnMedia(eImage, config) {
        this.config = config;
        this.imgObj = eImage;
        this.elm = this.imgObj.img;
        //this.elmOffset = TTSUI(this.elm).offset();
        this.elmOffset = getOffset(this.elm);
        if (!hasMedia) {
            statistics('0', 'PAG', '0', 'PV', 'ADY');
            hasMedia = true;
        }
    }

    /**
     * 构造函数
     * @type {Object}
     */
    OwnMedia.prototype = {
        /**
         * 请求通用广告
         * @param num index值
         */
        getCommon:function (num) {
            var _this = this;
            //品牌广告容器
            statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'GP1');
            statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
            var commonWrap = document.createElement("div");
            commonWrap.className = "J_common_box common_box";
            var sidebarY = _this.elmOffset.top + 20,
                sidebarX = TTSUI(_this.elm).width() + _this.elmOffset.left;
            _this.siderTab = TTSUI('<ul class="J_sidertab tts_sidertab"></ul>').css({"left":sidebarX, "top":sidebarY});
            TTSUI(commonWrap).append(_this.siderTab).appendTo(mediaBox);
            _this.getCommonTmpl(_this.config.adStyle);
            var keyWordData = _this.config.keyWordList[num];
            TTSUI(keyWordData).each(function (i, item) {
                statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'PV', 'TA' + (i + 1));
                //添加主站链接
                var keyWord = {
                    tabName:item,
                    href:"http://www.taotaosou.com/getProducts?keyword=" + encodeURIComponent(item) +
                        "&utm_source=ttsMedia" + MEDIA_config.id +
                        "&utm_medium=ttk" +
                        "&utm_campaign=itemlike" +
                        "&utm_nooverride=0" +
                        "&from=ttsMedia" + MEDIA_config.id +
                        "&outer_code=" + MEDIA_config.id
                };
                _this.commonTab = TTSUI.tmpl(_this.commonTabTmp, keyWord).appendTo(_this.siderTab);
                //第一个标签默认展示
                //if (i === 0 && _this.config.popTime > 0) {
                if (!hasCommon && _this.config.popTime > 0) {
                    var tipTab = _this.siderTab.find('.tabli').eq(0),
                        tipWrap = tipTab.find('.J_tip_wrap');
                    tipTab.addClass("active");
                    if (!tipTab.attr("data-show")) {
                        TTSUI.getJSON(api.kctu + 'adType=0,1,0&keyword=0,' + encodeURIComponent(item) +
                            ',0&adSize=0,120,0&itemSize=0,4,0' +
                            '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (data.tongyong[0]) {
                                var tongyong = {
                                    proList:data.tongyong
                                };
                                var pdUl = TTSUI.tmpl(_this.commonItemTmp, tongyong).appendTo(tipTab.find('.J_item_box'));
                                pdUl.click(function (e) {
                                    var index = TTSUI(this).parents(".J_item_box").find(this).index();
                                    //商品点击埋点
                                    if (!TTSUI(e.target).parents().is('.price')) {
                                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'CK', 'TA1PR' + (index + 1));
                                    }
                                });
                            }
                        });
                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'PV', 'DEF');
                        tipTab.attr("data-show", "isData");
                    }
                    if (_this.config.popDirect === 1) {
                        tipWrap.css("left", "-273px").show();
                    } else if (_this.config.popDirect === 2) {
                        if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                            tipWrap.css("left", "-273px").show();
                        } else {
                            tipWrap.css("left", "24px").show();
                        }
                    }
                    setTimeout(function () {
                        tipWrap.hide();
                        _this.siderTab.find('.tabli').eq(0).removeClass("active");
                    }, _this.config.popTime * 1000);
                    hasCommon = true;
                }
                _this.eventCommon(_this.commonTab, item, i);
            });
            if (_this.config.hover === 1) {
                TTSUI(_this.elm).hover(function () {
                    var tabLi = _this.siderTab.find('.tabli').eq(0);
                    if (!tabLi.attr("data-show")) {
                        TTSUI.getJSON(api.kctu + 'adType=0,1,0&keyword=0,' + encodeURIComponent(keyWordData[0]) +
                            ',0&adSize=0,120,0&itemSize=0,4,0' +
                            '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (data.tongyong[0]) {
                                var tongyong = {
                                    proList:data.tongyong
                                };
                                var pdUl = TTSUI.tmpl(_this.commonItemTmp, tongyong).appendTo(tabLi.find('.J_item_box'));
                                pdUl.click(function (e) {
                                    var index = TTSUI(this).parents(".J_item_box").find(this).index();
                                    //商品点击埋点
                                    if (!TTSUI(e.target).parents().is('.price')) {
                                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'CK', 'TA1PR' + (index + 1));
                                    }
                                });
                            }
                        });
                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'PV', 'TA1');
                        tabLi.attr("data-show", "isData");
                    }
                    statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'TH', 'TA1');
                    tabLi.addClass('active');
                    if (_this.config.popDirect === 1) {
                        tabLi.find('.J_tip_wrap').css("left", "-273px").show();
                    } else if (_this.config.popDirect === 2) {
                        if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                            tabLi.find('.J_tip_wrap').css("left", "-273px").show();
                        } else {
                            tabLi.find('.J_tip_wrap').css("left", "24px").show();
                        }
                    }
                }, function () {
                    var tabLi = _this.siderTab.find('.tabli').eq(0);
                    tabLi.find('.J_tip_wrap').hide();
                    tabLi.removeClass('active');
                });
            }
            _this.iniResizeCom(_this.siderTab);
        },
        /**
         * 浏览器改变大小
         */
        iniResizeCom:function (siderTab) {
            var _this = this;
            //TODO: 同样的代码为何有两份？
            TTSUI(window).resize(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var sidebarY = offset.top + 20,
                    sidebarX = TTSUI(_this.elm).width() + offset.left;
                siderTab.css({
                    "left":sidebarX,
                    "top":sidebarY
                });
            });
            TTSUI(window).scroll(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var sidebarY = offset.top + 20,
                    sidebarX = TTSUI(_this.elm).width() + offset.left;
                siderTab.css({
                    "left":sidebarX,
                    "top":sidebarY
                });
            });
        },
        /**
         * 添加通用广告事件
         * 策略：用户在鼠标移至标签时请求广告系统
         * @param commonTab 对应标签对象
         * @param tabKey 请求广告系统的关键字
         * @param num 图片对应的index
         */
        eventCommon:function (commonTab, tabKey, num) {
            var _this = this;
            commonTab.hover(function () {
                var thisTab = TTSUI(this);
                if (!commonTab.attr("data-show")) {
                    TTSUI.getJSON(api.kctu + 'adType=0,1,0&keyword=0,' + encodeURIComponent(tabKey) +
                        ',0&adSize=0,120,0&itemSize=0,4,0' +
                        '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                        '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                        '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                        if (data.tongyong[0]) {
                            var tongyong = {
                                proList:data.tongyong
                            };
                            var pdUl = TTSUI.tmpl(_this.commonItemTmp, tongyong).appendTo(commonTab.find('.J_item_box'));
                            pdUl.click(function (e) {
                                var index = TTSUI(this).parents(".J_item_box").find(this).index();
                                //商品点击埋点
                                if (!TTSUI(e.target).parents().is('.price')) {
                                    statistics(_this.imgObj.src, 'ADF', 'FGP1', 'CK', 'TA' + (num + 1) + 'PR' + (index + 1));
                                }
                            });
                        }
                    });
                    //标签触发埋点
                    statistics(_this.imgObj.src, 'ADF', 'FGP1', 'PV', 'TA' + (num + 1));
                    commonTab.attr("data-show", "isData");
                }
                statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'TH', 'TA' + (num + 1));
                if (_this.config.popDirect === 1) {
                    thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                } else if (_this.config.popDirect === 2) {
                    if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                        thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                    } else {
                        thisTab.find('.J_tip_wrap').css("left", "24px").show();
                    }
                }
                thisTab.addClass('active');
            }, function () {
                var thisTab = TTSUI(this);
                thisTab.find('.J_tip_wrap').hide();
                thisTab.removeClass('active');
            });
            commonTab.click(function (e) {
                if (TTSUI(e.target).hasClass("alink")) {
                    statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'CK', 'TA' + (num + 1));
                }
                if (TTSUI(e.target).hasClass('close')) {
                    TTSUI(this).find('.J_tip_wrap').hide();
                }
            });
        },
        /**
         * 获取通用广告模板
         * @param tmpType 模板类型
         */
        getCommonTmpl:function (tmpType) {
            var _this = this;
            //TODO: 只有一个条件，switch 改 if
            switch (tmpType) {
                case 1:
                    _this.commonTabTmp = '<li class="tabli"><span class="t_bg"></span>' +
                        '<a title="热卖${tabName}" target="_blank" class="alink" href="${href}" hidefocus="true">热卖${tabName}</a>' +
                        '<span class="b_bg"></span><div class="J_tip_wrap tts_tip_wrap"><div class="tip_up "></div>' +
                        '<a class="close" href="javascript:;" title="关闭"></a><h3 class="h3">热卖${tabName}</h3>' +
                        '<div class="tts_load_wrap"><ul class="J_item_box pd"></ul></div></div></li>';
                    _this.commonItemTmp = '{{each proList}}<li><div class="img"><a href="${href}" title="${title}" target="_blank">' +
                        '<img height="120" alt="${title}" title="${title}" src="${media}"></a></div>' +
                        '<div class="price"><span>${price}</span></div></li>{{/each}}';
                    break;
            }
        },
        /**
         * 请求相似广告
         */
        getSim:function (data) {
            var _this = this;
            if (_this.config.adStyle === 1) {
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'SP1');
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
            } else if (_this.config.adStyle === 2) {
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'SP2');
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
            }
            var simWrap = document.createElement("div");
            simWrap.className = "J_sim_box sim_box";
            //先预留位置，再填充数据
            var sidebarY = _this.elmOffset.top + 20,
                sidebarX = TTSUI(_this.elm).width() + _this.elmOffset.left;
            _this.getSimTmpl(_this.config.adStyle);
            _this.siderTab = TTSUI('<ul class="J_sidertab tts_sidertab"></ul>');
            TTSUI(simWrap).append(_this.siderTab).appendTo(mediaBox);
            _this.siderTab.css({
                "left":sidebarX, "top":sidebarY
            });
            //请求接口信息
            /**
             * http://show.kc.taotaosou.com/tumeiti.do?adType=1,0,0&keyword=%E8%BF%9E%E8%A1%A3%E8%A3%99,%E8%BF%9E%E8%A1%A3%E8%A3%99,0&adSize=120*120,120*120,0&itemSize=3,3,0&tbId=19137903717&pid=12&siteCid=50&domain=taobao&isCps=true&cpsTbName=&tb_cps_outcode=&expId=ttktopbanner&cookieId=&jsonp=?
             * &tbId=19137903717&pid=12&siteCid=50&domain=taobao&isCps=true&cpsTbName=&tb_cps_outcode=&expId=ttktopbanner&cookieId=&jsonp=?
             */
            var scale = 1;
            TTSUI(data.lstImageOffer).each(function (i, item) {
                //框图宽高
                var markerWidth = parseInt(item.coordinateInfo.split(',')[2], 10),
                    markerHeight = parseInt(item.coordinateInfo.split(',')[3], 10),
                //框图x坐标
                    markerX = parseInt(item.coordinateInfo.split(',')[0], 10) + _this.elmOffset.left + parseInt(markerWidth / 2 - 17, 10),
                //框图y坐标
                    markerY = parseInt(item.coordinateInfo.split(',')[1], 10) + _this.elmOffset.top + parseInt(markerHeight / 2 - 17, 10);
                //var wrapX = (_this.elmOffset.left + TTSUI(_this.elm).width()) < (markerX + markerWidth + 235) ? '-272' : '32';
                var wrapX;
                if (_this.config.popDirect === 1) {
                    wrapX = '-272';
                } else if (_this.config.popDirect === 2) {
                    if (TTSUI(document).width() - markerX < 300) {
                        wrapX = '-272';
                    } else {
                        wrapX = '32';
                    }
                }

                if (data.imgWidth) {
                    if (TTSUI(_this.elm).width() < data.imgWidth) {
                        scale = TTSUI(_this.elm).width() / data.imgWidth;
                        markerX = parseInt(item.coordinateInfo.split(',')[0] * scale, 10) + _this.elmOffset.left + parseInt(markerWidth * scale / 2 - 17, 10);
                        markerY = parseInt(item.coordinateInfo.split(',')[1] * scale, 10) + _this.elmOffset.top + parseInt(markerHeight * scale / 2 - 17, 10);
                    }
                }
                var tabData = {
                    markerX:markerX,
                    markerY:markerY,
                    wrapX:wrapX,
                    p4pKey:item.p4pKey,
                    categroryId:item.id,
                    url:"http://www.taotaosou.com/itemlike.html?tbId=" + item.productItemId +
                        "&utm_source=ttsMedia" + MEDIA_config.id +
                        "&utm_medium=ttk" +
                        "&utm_campaign=itemlike" +
                        "&utm_nooverride=0" +
                        "&title=" + encodeURIComponent(item.productTitle) +
                        "&imgUrl=" + item.productPicUrl +
                        "&price=" + item.productPrice +
                        "&from=ttsMedia" + MEDIA_config.id +
                        "&outer_code=" + MEDIA_config.id,
                    name:item.tabName + item.categroryName,
                    proPicUrl:item.productPicUrl + mediaSize,
                    proTitle:item.productTitle
                };
                _this.simTab = TTSUI.tmpl(_this.simTabTmp, tabData).appendTo(_this.siderTab).data("simInfo", {id:item.productItemId, keys:item.p4pKey});
                if (_this.config.adStyle === 1) {
                    statistics(_this.imgObj.src, 'ADT', 'TASP1', 'PV', 'TA' + (i + 1));
                    statistics(_this.imgObj.src, 'ADP', 'POSP1', 'PV', 'PO' + (i + 1));
                    //点信息容器
                    _this.markerBox = TTSUI('<div class="J_marker_box tts_marker_box" categroryId="' + item.id + '"></div>').data("simInfo", {id:item.productItemId, keys:item.p4pKey});
                    _this.markerTip = TTSUI.tmpl(_this.simMarkerTmp, tabData).appendTo(_this.markerBox);
                    _this.markerBox.css({
                        "left":markerX,
                        "top":markerY
                    }).appendTo(simWrap);
                } else if (_this.config.adStyle === 2) {
                    statistics(_this.imgObj.src, 'ADT', 'TASP2', 'PV', 'TA' + (i + 1));
                    _this.simWrapTip = TTSUI.tmpl(_this.simWrapTmp, tabData).appendTo(_this.simTab);
                }
                _this.eventSim(i, item);
            });

            if (_this.config.adStyle === 2) {
                if (_this.config.hover === 1) {
                    var itemListOffer = data.lstImageOffer;
                    var ddItemList = {
                        proList:[
                            {
                                price:itemListOffer[0].productPrice,
                                media:itemListOffer[0].productPicUrl + mediaSize,
                                title:itemListOffer[0].productTitle,
                                //TODO: 各参数加上空值
                                href:"http://www.taotaosou.com/itemlike.html?tbId=" + itemListOffer[0].productItemId +
                                    "&utm_source=ttsMedia" + MEDIA_config.id +
                                    "&utm_medium=ttk" +
                                    "&utm_campaign=itemlike" +
                                    "&utm_nooverride=0" +
                                    "&title=" + encodeURIComponent(itemListOffer[0].productTitle) +
                                    "&imgUrl=" + itemListOffer[0].productPicUrl +
                                    "&price=" + itemListOffer[0].productPrice +
                                    "&from=ttsMedia" + MEDIA_config.id +
                                    "&outer_code=" + MEDIA_config.id
                            }
                        ]
                    };
                    TTSUI(_this.elm).hover(function () {
                        var hoverTab = _this.siderTab.find('.tabli').eq(0);
                        if (!hoverTab.attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(hoverTab.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + hoverTab.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 2) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xsItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xsItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                            statistics(_this.imgObj.src, 'ADF', 'FSP2', 'PV', 'TA1');
                            hoverTab.attr("data-show", "isData");
                        }
                        statistics(_this.imgObj.src, 'ADT', 'TASP2', 'TH', 'TA1');
                        if (_this.config.popDirect === 1) {
                            hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                            hoverTab.addClass('active');
                        } else if (_this.config.popDirect === 2) {
                            if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                                hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                            } else {
                                hoverTab.find('.J_tip_wrap').css("left", "24px").show();
                            }
                            hoverTab.addClass('active');
                        }
                    }, function () {
                        var hoverTab = _this.siderTab.find('.tabli').eq(0);
                        hoverTab.find('.J_tip_wrap').hide();
                        hoverTab.removeClass('active');
                    });
                }
            }
            _this.iniResizeSim(data);
        },
        /**
         * 显示广告
         * @param data
         */
        //TODO: 缺少参数说明
        iniResizeSim:function (data) {
            var _this = this,
                scale;
            TTSUI(window).resize(function () {
                //var offset = TTSUI(_this.elm).offset(),
                var offset = getOffset(_this.elm),
                    elmWidth = TTSUI(_this.elm).width();
                var sidebarY = offset.top + 20,
                    sidebarX = elmWidth + offset.left;
                _this.siderTab.css({
                    "left":sidebarX, "top":sidebarY
                });
                var reMarker = _this.siderTab.parents('.J_sim_box');
                TTSUI(data.lstImageOffer).each(function (i, item) {
                    var markerWidth = parseInt(item.coordinateInfo.split(',')[2], 10),
                        markerHeight = parseInt(item.coordinateInfo.split(',')[3], 10),
                    //框图x坐标
                        markerX = parseInt(item.coordinateInfo.split(',')[0], 10) + offset.left + parseInt(markerWidth / 2 - 17, 10),
                    //框图y坐标
                        markerY = parseInt(item.coordinateInfo.split(',')[1], 10) + offset.top + parseInt(markerHeight / 2 - 17, 10),
                        categroryId = item.id;
                    if (data.imgWidth) {
                        if (elmWidth < data.imgWidth) {
                            scale = elmWidth / data.imgWidth;
                            markerX = parseInt(item.coordinateInfo.split(',')[0] * scale, 10) + offset.left + parseInt(markerWidth * scale / 2 - 17, 10);
                            markerY = parseInt(item.coordinateInfo.split(',')[1] * scale, 10) + offset.top + parseInt(markerHeight * scale / 2 - 17, 10);
                        }
                    }
                    reMarker.find("[categroryId=" + categroryId + "]").css({
                        "left":markerX,
                        "top":markerY
                    });
                });
            });
            TTSUI(window).scroll(function () {
                //var offset = TTSUI(_this.elm).offset(),
                var offset = getOffset(_this.elm),
                    elmWidth = TTSUI(_this.elm).width();
                var sidebarY = offset.top + 20,
                    sidebarX = elmWidth + offset.left;
                _this.siderTab.css({
                    "left":sidebarX, "top":sidebarY
                });
                var reMarker = _this.siderTab.parents('.J_sim_box');
                TTSUI(data.lstImageOffer).each(function (i, item) {
                    var markerWidth = parseInt(item.coordinateInfo.split(',')[2], 10),
                        markerHeight = parseInt(item.coordinateInfo.split(',')[3], 10),
                    //框图x坐标
                        markerX = parseInt(item.coordinateInfo.split(',')[0], 10) + offset.left + parseInt(markerWidth / 2 - 17, 10),
                    //框图y坐标
                        markerY = parseInt(item.coordinateInfo.split(',')[1], 10) + offset.top + parseInt(markerHeight / 2 - 17, 10),
                        categroryId = item.id;
                    if (data.imgWidth) {
                        if (elmWidth < data.imgWidth) {
                            scale = elmWidth / data.imgWidth;
                            markerX = parseInt(item.coordinateInfo.split(',')[0] * scale, 10) + offset.left + parseInt(markerWidth * scale / 2 - 17, 10);
                            markerY = parseInt(item.coordinateInfo.split(',')[1] * scale, 10) + offset.top + parseInt(markerHeight * scale / 2 - 17, 10);
                        }
                    }
                    reMarker.find("[categroryId=" + categroryId + "]").css({
                        "left":markerX,
                        "top":markerY
                    });
                });
            });
        },
        /**
         * 相似广告点添加事件
         * @param num 图片对应的index值
         * @param item 打点信息
         */
        eventSim:function (num, item) {
            var _this = this;
            var ddItemList = {
                proList:[
                    {
                        price:item.productPrice,
                        media:item.productPicUrl + mediaSize,
                        title:item.productTitle,
                        href:"http://www.taotaosou.com/itemlike.html?tbId=" + item.productItemId +
                            "&utm_source=ttsMedia" + MEDIA_config.id +
                            "&utm_medium=ttk" +
                            "&utm_campaign=itemlike" +
                            "&utm_nooverride=0" +
                            "&title=" + encodeURIComponent(item.productTitle) +
                            "&imgUrl=" + item.productPicUrl +
                            "&price=" + item.productPrice +
                            "&from=ttsMedia" + MEDIA_config.id +
                            "&outer_code=" + MEDIA_config.id
                    }
                ]
            };
            if (_this.config.adStyle === 1) {
                _this.simTab.hover(function () {
                    var tabLi = TTSUI(this),
                        categroryId = tabLi.attr("categroryId"),
                        index = tabLi.parents('.J_sidertab').find('.tabli').index(this);
                    if (!tabLi.attr("data-show")) {
                        if (!TTSUI("[categroryId=" + categroryId + "]").attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(tabLi.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + tabLi.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 1) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xSItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xSItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                        }
                        //浮层展示pv
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'PV', 'TA' + (index + 1));
                        tabLi.attr("data-show", "isData");
                    }
                    //浮层触发th
                    statistics(_this.imgObj.src, 'ADT', 'TASP1', 'TH', 'TA' + (index + 1));
                    TTSUI(".J_marker_box").hide();
                    TTSUI("[categroryId=" + categroryId + "]").show().children(".J_tip_wrap").show();
                    TTSUI("[categroryId=" + categroryId + "]").find('.J_tip_d').addClass('active');
                }, function () {
                    var categroryId = TTSUI(this).attr("categroryId");
                    if (_this.config.markerShow === 2) {
                        TTSUI(".J_marker_box").hide();
                    } else {
                        TTSUI(".J_marker_box").show();
                    }
                    TTSUI("[categroryId=" + categroryId + "]").find('.J_tip_d').removeClass('active');
                    TTSUI(".J_tip_wrap").hide();
                });
                _this.markerBox.hover(function () {
                    var markerBox = TTSUI(this),
                        categroryId = markerBox.attr("categroryId"),
                        index = TTSUI(this).parents('.J_sim_box').find('.J_marker_box').index(this);
                    if (!markerBox.attr("data-show")) {
                        if (!TTSUI("[categroryId=" + categroryId + "]").attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(markerBox.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + markerBox.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 1) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xSItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xSItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                        }
                        //商品点展示pv
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'PV', 'PO' + (index + 1));
                        TTSUI("[categroryId=" + categroryId + "]").attr("data-show", "isData");
                    }
                    //商品点触发th
                    statistics(_this.imgObj.src, 'ADP', 'POSP1', 'TH', 'PO' + (index + 1));
                    TTSUI("[categroryId=" + categroryId + "]").addClass('active');
                    markerBox.find('.J_tip_d').addClass('active');
                    TTSUI(".J_marker_box").hide();
                    markerBox.show().children(".J_tip_wrap").show();
                }, function () {
                    var markerBox = TTSUI(this),
                        categroryId = TTSUI(this).attr("categroryId");
                    TTSUI("[categroryId=" + categroryId + "]").removeClass('active');
                    markerBox.find('.J_tip_d').removeClass('active');
                    TTSUI(".J_marker_box").show();
                    markerBox.children(".J_tip_wrap").hide();
                });
                _this.simTab.click(function (e) {
                    var thisTab = TTSUI(this),
                        index = thisTab.parents('.J_sidertab').find('.tabli').index(this);
                    if (TTSUI(e.target).hasClass("alink")) {
                        statistics(_this.imgObj.src, 'ADT', 'TASP1', 'CK', 'TA' + (index + 1));
                    }
                });
                _this.markerBox.click(function (e) {
                    var index = TTSUI(this).parents('.J_sim_box').find('.J_marker_box').index(this);
                    if (TTSUI(e.target).parents().is('.J_tip_d')) {
                        statistics(_this.imgObj.src, 'ADP', 'POSP1', 'CK', 'PO' + (index + 1));
                    }
                    if (TTSUI(e.target).parents().is('.J_item_box')) {
                        if (!TTSUI(e.target).parents().is('.price')) {
                            var indexPo = TTSUI(e.target).parents('.pd').find('li').index(TTSUI(e.target).parents('li'));
                            statistics(_this.imgObj.src, 'ADF', 'FSP1', 'CK', 'TA' + (index + 1) + 'PR' + (indexPo + 1));
                        }
                    }
                    if (TTSUI(e.target).hasClass('close')) {
                        TTSUI(this).find('.J_tip_wrap').hide();
                    }
                });
                //第一个点默认展示
                if (_this.config.popTime > 0 && !hasSim) {
                    var categroryid = _this.simTab.attr("categroryId");
                    TTSUI('.J_marker_box').hide();
                    if (!TTSUI("[categroryId=" + categroryid + "]").attr("data-show")) {
                        TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(item.p4pKey) +
                            ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                            '&tbId=' + item.productItemId + '&pid=' + MEDIA_config.id +
                            '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (_this.config.adStyle === 1) {
                                //插入打点的商品信息 1
                                if (data.dadian[0]) {
                                    ddItemList.proList[0].href = data.dadian[0].href;
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryid + "]").find('.J_item_box'));
                                } else {
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryid + "]").find('.J_item_box'));
                                }
                                //广告相似商品信息 3
                                if (data.xiangsi[0]) {
                                    var xSItemList = {
                                        proList:data.xiangsi
                                    };
                                    TTSUI.tmpl(_this.simItemTmp, xSItemList).appendTo(TTSUI("[categroryId=" + categroryid + "]").find('.J_item_box'));
                                }
                            }
                            return false;
                        });
                        TTSUI("[categroryId=" + categroryid + "]").attr("data-show", "isData");
                    }
                    _this.markerBox.css("zIndex", "405548810").show().children(".J_tip_wrap").show();
                    _this.markerBox.find('.J_tip_d').addClass('active');
                    _this.simTab.addClass('active');
                    setTimeout(function () {
                        TTSUI('.J_tip_wrap').hide();
                        TTSUI("[categroryId=" + categroryid + "]").removeClass('active');
                        TTSUI("[categroryId=" + categroryid + "]").find('.J_tip_d').removeClass('active');
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'PV', 'DEF');
                        statistics(_this.imgObj.src, 'ADP', 'POSP1', 'PV', 'DEF');

                    }, _this.config.popTime * 1000);
                    hasSim = true;
                }
                if (_this.config.popTime > 0 && _this.config.markerShow === 2) {
                    //var popTime = _this.config.popTime;
                    //商品点闪现
                    setTimeout(function () {
                        TTSUI('.J_marker_box').hide();
                    }, _this.config.popTime * 1000);
                }
                //图片触发商品点
                if (_this.config.markerShow === 2) {
                    TTSUI(_this.elm).hover(function () {
                        TTSUI('.J_marker_box').show();
                        TTSUI('.J_tip_wrap').hide();
                    }, function () {
                        TTSUI('.J_marker_box').hide();
                        TTSUI('.J_tip_wrap').hide();
                    });
                }
            } else if (_this.config.adStyle === 2) {
                _this.simTab.hover(function () {
                    var thisTab = TTSUI(this),
                        index = thisTab.parents('.J_sidertab').find('.tabli').index(this);
                    if (_this.config.popDirect === 1) {
                        thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                    } else if (_this.config.popDirect === 2) {
                        if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                            thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                        } else {
                            thisTab.find('.J_tip_wrap').css("left", "24px").show();
                        }
                    }
                    thisTab.addClass('active');
                    if (!thisTab.attr("data-show")) {
                        //浮层展示pv
                        TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(thisTab.data("simInfo").keys) +
                            ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                            '&tbId=' + thisTab.data("simInfo").id + '&pid=' + MEDIA_config.id +
                            '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (_this.config.adStyle === 2) {
                                //插入打点的商品信息 1
                                if (data.dadian[0]) {
                                    ddItemList.proList[0].href = data.dadian[0].href;
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(thisTab.find('.J_item_box'));
                                } else {
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(thisTab.find('.J_item_box'));
                                }
                                //广告相似商品信息 3
                                if (data.xiangsi[0]) {
                                    var xsItemList = {
                                        proList:data.xiangsi
                                    };
                                    TTSUI.tmpl(_this.simItemTmp, xsItemList).appendTo(thisTab.find('.J_item_box'));
                                }
                            }
                            return false;
                        });
                        statistics(_this.imgObj.src, 'ADF', 'FSP2', 'PV', 'TA' + (index + 1));
                        thisTab.attr("data-show", "isData");
                    }
                    //浮层触发th
                    statistics(_this.imgObj.src, 'ADT', 'TASP2', 'TH', 'TA' + (index + 1));
                }, function () {
                    var thisTab = TTSUI(this);
                    thisTab.find('.J_tip_wrap').hide();
                    thisTab.removeClass('active');
                });
                _this.simTab.click(function (e) {
                    var thisTab = TTSUI(this),
                        index = thisTab.parents('.J_sidertab').find('.tabli').index(this);
                    if (TTSUI(e.target).hasClass("alink")) {
                        statistics(_this.imgObj.src, 'ADT', 'TASP2', 'CK', 'TA' + (index + 1));
                    }
                    if (TTSUI(e.target).parents().is('.img')) {
                        var indexPro = TTSUI(e.target).parents('.J_item_box').find('li').index(TTSUI(e.target).parents('li'));
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'CK', 'TA' + (index + 1) + 'PR' + (indexPro + 1));
                    }
                    if (TTSUI(e.target).hasClass('close')) {
                        TTSUI(this).find('.J_tip_wrap').hide();
                    }
                });
                if (_this.config.popTime > 0) {
                    var hoverTab = _this.siderTab.find('.tabli').eq(0);
                    if (!hasSim) {
                        if (!hoverTab.attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(hoverTab.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + hoverTab.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 2) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xsItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xsItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                            hoverTab.attr("data-show", "isData");
                        }
                        if (_this.config.popDirect === 1) {
                            hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                        } else if (_this.config.popDirect === 2) {
                            if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                                hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                            } else {
                                hoverTab.find('.J_tip_wrap').css("left", "24px").show();
                            }
                        }
                        hoverTab.addClass('active');
                        setTimeout(function () {
                            hoverTab.find('.J_tip_wrap').hide();
                            hoverTab.removeClass('active');
                            statistics(_this.imgObj.src, 'ADF', 'FSP2', 'PV', 'DEF');
                            statistics(_this.imgObj.src, 'ADP', 'POSP2', 'PV', 'DEF');
                        }, _this.config.popTime * 1000);
                        hasSim = true;
                    }
                }
            }
        },
        getSimTmpl:function (tmpType) {
            var _this = this;
            //TODO: 只有一个条件，switch 改 if
            switch (tmpType) {
                case 1:
                    _this.simTmp = '<ul class="J_sidertab tts_sidertab"></ul>';
                    break;
            }
            _this.simTabTmp = '<li class="tabli" data-key="${p4pKey}" categroryId="${categroryId}"><span class="t_bg"></span>' +
                '<a target="_blank" title="${name}" class="alink J_sidertab_link" href="${url}" hidefocus="true">${name}</a>' +
                '<span class="b_bg"></span></li>';
            _this.simMarkerTmp = '<div class="J_tip_d tts_marker"><a target="_blank" href="${url}"></a></div>' +
                '<div class="J_tip_wrap tts_tip_wrap" style="left:${wrapX}px;"><div class="tip_up"></div>' +
                '<a class="close" href="javascript:;" title="关闭"></a><h3 class="h3">${name}</h3>' +
                '<div class="tts_load_wrap"><ul class="J_item_box pd"></ul></div></div>';
            _this.simItemTmp = '{{each proList}}<li><div class="img"><a href="${href}" title="${title}" target="_blank">' +
                '<img height="120" alt="${title}" title="${title}" src="${media}"></a></div>' +
                '<div class="price"><span>${price}</span></div></li>{{/each}}';
            _this.simWrapTmp = '<div class="J_tip_wrap tts_tip_wrap"><div class="tip_up"></div>' +
                '<a class="close" href="javascript:;" title="关闭"></a><h3 class="h3">${name}</h3>' +
                '<div class="tts_load_wrap"><ul class="J_item_box pd"></ul></div></div>';
        },
        /**
         * 请求品牌广告
         */
        getBrand:function () {
            var _this = this;
            //品牌广告容器
            var brandWrap = document.createElement("div");
            brandWrap.className = "J_brand_box brand_box";
            _this.brandObj = TTSUI(brandWrap);
            //请求接口信息
            TTSUI.getJSON(api.kctu + 'adType=0,0,1,1&keyword=0,0,0,0&adSize=0,0,300*60,300*220&itemSize=0,0,1,1' +
                '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                if (_this.config.adStyle === 1) {
                    if (data.pinpai[0]) {
                        //console.log('展示 brand  广告');
                        //console.log('展示 brand 广告 all');
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'BR1');
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
                        _this.showBrand(data.pinpai[0]);
                    }
                } else if (_this.config.adStyle === 2) {
                    if (data.jiaohu[0]) {
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'IMGBART300220');
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
                        statistics(_this.elm.src, 'IMGBART300220', 'TA', 'PV', '0');
                        _this.showJhbrand(data.jiaohu[0]);
                    }
                }
                return false;
            });
        },
        /**
         * 展示品牌广告
         * @param data 广告系统的返回数据
         */
        showBrand:function (data) {
            var _this = this;
            var offset = getOffset(_this.elm);
            //品牌广告模板1
            _this.getBrandTmpl(_this.config.adStyle);
            TTSUI.tmpl(_this.brandTmp, data).appendTo(_this.brandObj);
            var bannerY = offset.top + TTSUI(_this.elm).height() - _this.config.bannerHeight,
                bannerX = TTSUI(_this.elm).width() / 2 - _this.config.bannerWidth / 2 + offset.left;
            _this.brandObj.css({
                "left":bannerX,
                "top":bannerY
            }).appendTo(mediaBox);
            _this.eventBrand();
        },
        /**
         * 添加广告事件，图框交互
         * @param brandObj 广告节点对象
         */
        //TODO: 这里有参数传进来吗？？
        eventBrand:function () {
            //是否隐藏
            var _this = this,
                elm = this.elm;
            if (_this.config.hover === 1) {
                if (_this.config.popTime > 0 && !hasBrand) {
                    //var popTime = _this.config.popTime;
                    if (!_this.brandObj.attr("data-show")) {
                        //第一张默认展示埋点
                        //console.log('//第一张默认展示埋点');
                        statistics(_this.elm.src, 'ADF', 'FBR1', 'PV', 'DEF');
                    }
                    _this.brandObj.show().attr("data-show", "isData");
                    setTimeout(function () {
                        TTSUI('.J_brand_box').eq(0).hide();
                    }, _this.config.popTime * 1000);
                    hasBrand = true;
                }
                //图片触发广告
                TTSUI(elm).hover(function () {
                    if (!_this.brandObj.attr("data-show")) {
                        //console.log('图片触发埋点brand');
                        statistics(_this.imgObj.src, 'ADF', 'FBR1', 'PV', 'IMG');
                    }
                    _this.brandObj.show().attr("data-show", "isData");
                }, function () {
                    _this.brandObj.hide();
                });
                //广告鼠标事件
                _this.brandObj.hover(function () {
                    TTSUI(this).show();
                }, function () {
                    TTSUI(this).hide();
                });
            } else if (_this.config.hover === 2) {  //广告一直展示
                _this.brandObj.show();
                //console.log('brand 全部默认展示');
                _this.brandObj.attr("data-show", "isData");
                statistics(_this.imgObj.src, 'ADF', 'FBR1', 'PV', 'DEF');
            }
            //T 图媒体显示
            TTSUI('.pin_media_t').mouseenter(function () {
                TTSUI('.pin_media').show();
                TTSUI('.pin_media_t').hide();
            });
            TTSUI('.pin_media').mouseleave(function () {
                TTSUI('.pin_media').hide();
                TTSUI('.pin_media_t').show();
            });
            _this.brandObj.click(function () {
                //console.log('brand 点击埋点');
                statistics(_this.imgObj, 'ADF', 'FBR1', 'CK', 'BA1');
            });
            TTSUI('.pin_brand_close').click(function () {
                TTSUI(this).parents('.J_brand_box').remove();
                //关闭 埋点
                //console.log('brand 关闭=========');
                statistics(_this.imgObj.src, 'ADF', 'FBR1', 'CK', 'CLO');
            });
            _this.iniResize();
        },
        /**
         * 浏览器改变大小
         */
        iniResize:function () {
            var _this = this;
            //TODO: 同样的代码为何有两份？
            TTSUI(window).resize(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var bannerY = offset.top + TTSUI(_this.elm).height() - _this.config.bannerHeight,
                    bannerX = TTSUI(_this.elm).width() / 2 - _this.config.bannerWidth / 2 + offset.left;
                _this.brandObj.css({
                    "left":bannerX,
                    "top":bannerY
                });
            });
            TTSUI(window).scroll(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var bannerY = offset.top + TTSUI(_this.elm).height() - _this.config.bannerHeight,
                    bannerX = TTSUI(_this.elm).width() / 2 - _this.config.bannerWidth / 2 + offset.left;
                _this.brandObj.css({
                    "left":bannerX,
                    "top":bannerY
                });
            });
        },
        /**
         * 根据配置信息取广告模板
         */
        getBrandTmpl:function (tmpType) {
            var _this = this;
            switch (tmpType) {
                case 1:
                    _this.brandTmp = '<div class="pin_brand"><div class="pin_brand_bg"></div><div class="pin_brand_con"><div class="pin_brand_img">' +
                        '<a href="${href}" target="_blank" title="${title}"><img src="${media}" height="60" width="300" alt=""></a></div>' +
                        '<a class="pin_brand_close" href="javascript:;" title="关闭"></a><a href="#" class="pin_media">图媒体</a>' +
                        '<a href="#" class="pin_media_t"></a></div></div>';
                    _this.config.bannerHeight = 66;
                    _this.config.bannerWidth = 306;
                    break;
                case 2:
                    _this.brandTAtmpl = '<div class="brand_alink"><img src="${image}" height="195" width="25" alt="">' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandTAswftmpl = '<div class="brand_alink"><object width="25" height="195" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${image}">' +
                        '<embed wmode="transparent" src="${image}"' +
                        'quality="high" width="25" height="195" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandADtmpl = '<div class="J_tip_wrap brand_tip_wrap">' +
                        '<img src="${media}" height="220" width="300" alt="">' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandADswftmpl = '<div class="J_tip_wrap brand_tip_wrap"><object width="300" height="220" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${media}">' +
                        '<embed wmode="transparent" src="${media}"' +
                        'quality="high" width="300" height="220" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a>' +
                        '</div>';
                    _this.brandTmp = '<div class="brand_alink"><img src="${image}" height="195" width="25" alt="">' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>' +
                        '<div class="J_tip_wrap brand_tip_wrap">' +
                        '<img src="${media}" height="220" width="300" alt="">' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandSwfTmp = '<div class="brand_alink"><object width="25" height="195" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${image}">' +
                        '<embed wmode="transparent" src="${image}" ' +
                        'quality="high" width="25" height="195" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>' +
                        '<div class="J_tip_wrap brand_tip_wrap"><object width="300" height="220" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${media}">' +
                        '<embed wmode="transparent" src="${media}"' +
                        'quality="high" width="300" height="220" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a>' +
                        '</div>';
                    break;
                default :
                    break;
            }
        },
        showJhbrand:function (data) {
            var _this = this;
            var sidebarY = _this.elmOffset.top + 20,
                sidebarX = TTSUI(_this.elm).width() + _this.elmOffset.left;
            //品牌广告模板2
            _this.getBrandTmpl(_this.config.adStyle);
            _this.brandTab = TTSUI('<div class="J_tabli"></div>');
            //区分 图片还是flash
            if (data.image.match(/^.+\.swf$/i)) {
                TTSUI.tmpl(_this.brandTAswftmpl, data).appendTo(_this.brandTab);
            } else {
                TTSUI.tmpl(_this.brandTAtmpl, data).appendTo(_this.brandTab);
            }
            if (data.media.match(/^.+\.swf$/i)) {
                TTSUI.tmpl(_this.brandADswftmpl, data).appendTo(_this.brandTab);
            } else {
                TTSUI.tmpl(_this.brandADtmpl, data).appendTo(_this.brandTab);
            }
            _this.brandTab.appendTo(_this.brandObj);
            _this.brandObj.css({
                "left":sidebarX,
                "top":sidebarY
            }).appendTo(mediaBox);
            if (_this.config.closed === 2) {
                _this.brandClose = TTSUI('<a href="javascript:;" title="关闭" class="brand_close J_close"></a>').appendTo(_this.brandObj);
                statistics(_this.elm.src, 'IMGBART300220', 'CLO', 'PV', '0');
                _this.brandClose.click(function () {
                    TTSUI(this).parent().remove();
                    statistics(_this.elm.src, 'IMGBART300220', 'CLO', 'CK', '0');
                });
            }
            _this.eventJhbrand();
        },
        eventJhbrand:function () {
            var _this = this;
            var showBrand = function () {
                if (_this.config.popDirect === 1) {
                    _this.brandTab.find('.J_tip_wrap').css("left", "-300px").show();
                } else if (_this.config.popDirect === 2) {
                    if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 335) {
                        _this.brandTab.find('.J_tip_wrap').css("left", "-300px").show();
                    } else {
                        _this.brandTab.find('.J_tip_wrap').css("left", "25px").show();
                    }
                }
            };
            _this.brandTab.hover(function () {
                showBrand();
                if (!_this.brandTab.attr("data-show")) {
                    //console.log('图片触发埋点brand');
                    statistics(_this.imgObj.src, 'IMGBART300220', 'AD', 'PV', '0');
                }
                statistics(_this.imgObj.src, 'IMGBART300220', 'TA', 'TH', '0');
                _this.brandTab.show().attr("data-show", "isData");
            }, function () {
                _this.brandTab.find('.J_tip_wrap').hide();
            });
            _this.brandTab.click(function (e) {
                if (TTSUI(e.target).hasClass("TA_alink")) {
                    statistics(_this.imgObj.src, 'IMGBART300220', 'TA', 'CK', '0');
                }
                if (TTSUI(e.target).hasClass('AD_alink')) {
                    statistics(_this.imgObj.src, 'IMGBART300220', 'AD', 'CK', '0');
                }
            });
            if (_this.config.hover === 1) {
                if (_this.config.popTime > 0 && !hasBrand) {
                    //var popTime = _this.config.popTime;
                    if (!_this.brandTab.attr("data-show")) {
                        //第一张默认展示埋点
                        //console.log('//第一张默认展示埋点');
                        statistics(_this.elm.src, 'IMGBART300220', 'AD', 'PV', '0');
                    }
                    showBrand();
                    _this.brandTab.attr("data-show", "isData");
                    setTimeout(function () {
                        TTSUI('.J_tip_wrap').eq(0).hide();
                    }, _this.config.popTime * 1000);
                    hasBrand = true;
                }
                //图片触发广告
                TTSUI(_this.elm).hover(function () {
                    if (!_this.brandTab.attr("data-show")) {
                        //console.log('图片触发埋点brand');
                        statistics(_this.imgObj.src, 'IMGBART300220', 'AD', 'PV', '0');
                    }
                    showBrand();
                    _this.brandTab.attr("data-show", "isData");
                }, function () {
                    _this.brandTab.find('.J_tip_wrap').hide();
                });
            }
            _this.iniResizeCom(_this.brandObj);
        }
    };

    init_media();
})(window);
