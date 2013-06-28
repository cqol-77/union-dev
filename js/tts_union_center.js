(function (win) {
    var href = win.location.href,
        loadScript;
    var arrHref = ["lady.qq.com", "luxury.qq.com", "lady.qq.com", "ent.qq.com", "astro.lady.qq.com", "lady.qq.com", "luxury.qq.com", "games.qq.com", "fashion.qq.com", "sports.qq.com",
        "ent.sina.com.cn", "slide.eladies.sina.com.cn", "sports.sina.com.cn", "slide.style.sina.com.cn", "club.eladies.sina.com.cn", "games.sina.com.cn", "slide.baby.sina.com.cn",
        "fashion.163.com", "ent.163.com", "sports.163.com", "lady.163.com", "travel.163.com", "fashion.163.com", "game.163.com",
        "women.sohu.com", "pic.yule.sohu.com", "sports.sohu.com", "club.baobao.sohu.com", "pic.baobao.sohu",
        "fashion.ifeng.com", "ent.ifeng.com", "games.ifeng.com", "sports.ifeng.com",
        "ent.cn.yahoo.com/t", "digi.cn.yahoo.com/t", "autos.cn.yahoo.com/t", "travel.cn.yahoo.com/t", "sports.cn.yahoo.com/t",
        "babytree", "39.net", "image.soso.com/image",
        "bbs.duowan.com", "lol.duowan.com", "dnf.duowan.com", "newgame.duowan.com",
        "newgame.17173.com", "yoka.com",
        "news.4399.com", "7k7k.com", "www.4399.com", "ellechina.com", "rayli.com.cn", "aili.com"
    ];
    loadScript = function () {
        var s = win.document.createElement("script");
        s.type = 'text/javascript';
        s.charset = 'utf-8';
        s.src = 'http://ttsmedia.b0.upaiyun.com/union/js/tts_union_media.js?v=20130627';
        win.document.body.appendChild(s);
    };
    for (var i = 0; i < arrHref.length; i++) {
        if (href.indexOf(arrHref[i]) >= 0) {
            loadScript();
            break;
        }
    }
})(window);
