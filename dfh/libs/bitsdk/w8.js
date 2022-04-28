var w8_openId = "";
var w8_openKey = "";
var w8_account = "";
var w8_appId = "1106848010";
var w8_pf = "";
var w8_platform = "";

function W8_INIT() {
    w8_openId = window.OPEN_DATA.openid;
    w8_openKey = window.OPEN_DATA.openkey;
    w8_platform = window.OPEN_DATA.platform;
    w8_pf = window.OPEN_DATA.pf;
    w8_account = w8_openId + "_" + w8_platform;
    W8_REFRESH();
}

function W8_REFRESH() {
    window.getOpenKey(function (d) {
        w8_openKey = d.data.openkey;
    });
}

let temp_goodsId, temp_cost, temp_iosItemId, temp_androidItemId, temp_serverId;
let W8_phpCheckUserInfoUrl = "https://wsdfw.haotianhuyu.com/php/get_user_info.php";

function W8_REQ_SCORE(goodsId, cost, iosItemId, androidItemId, serverId, success, fail) {
    temp_goodsId = goodsId;
    temp_cost = cost;
    temp_iosItemId = iosItemId;
    temp_androidItemId = androidItemId;
    temp_serverId = serverId;
    let dataJson = {
        'openid': w8_openId,
        'openkey': w8_openKey,
        'zoneid': w8_platform,
        'pf': w8_pf
    };
    let data = JSON.stringify(dataJson);
    $.ajax({
        type: 'POST',
        url: W8_phpCheckUserInfoUrl,
        data: data,
        success: function successCallback(resJson) {
            if (resJson && resJson.code == 0) {
                let userinfo = resJson.data[0];
                if (userinfo.score >= cost) {
                    success();
                } else {
                    // 余额不足
                    fail();
                    window.popPayTips({
                        version: 'v2',
                        defaultScore: cost,
                        appid: w8_appId
                    });
                }
            } else {
                console.log('w8获取信息发生了一个错误');
                console.log(resJson.msg);
            }
        },
        dataType: "json",
        error: function errorCallback(jqXHR, textStatus) {
            console.log("w8获取信息请求失败！");
        }
    })
}

let W8_phpPayUrl = "https://wsdfw.haotianhuyu.com/php/buy_item.php";

function W8_BUY_ITEM(goodsId, cost, iosItemId, androidItemId, serverId, callback, fail) {
    let dataJson = {
        'openid': w8_openId,
        'openkey': w8_openKey,
        'zoneid': w8_platform,
        'pf': w8_pf,
        'self_item_id': goodsId,
        'count': 1,
        'cost': cost,
        'server_id': serverId,
        'itemid': w8_platform == 1 ? androidItemId : iosItemId
    };
    let data = JSON.stringify(dataJson);
    $.ajax({
        type: 'POST',
        url: W8_phpPayUrl,
        data: data,
        success: function successCallback(resJson) {
            if (resJson && resJson.code == 0) {
                callback();
            } else {
                fail();
                console.log('w8购买请求发生了一个错误');
                console.log(resJson.message);
                fail();
            }
        },
        dataType: "json",
        error: function errorCallback(jqXHR, textStatus) {
            console.log("w8购买请求失败！");
        }
    })
}

window.__paySuccess = function () {
    //支付成功执行
    console.log('支付成功');
    W8_BUY_ITEM(temp_goodsId, temp_cost, temp_iosItemId, temp_androidItemId, temp_serverId, () => {
        console.log('购买道具成功')
    }, () => {
        console.log('购买道具失败')
    });
};

window.__payError = function () {
    //支付失败执行
    console.log('支付失败');
};

window.__payClose = function () {
    //关闭对话框执行,IOS下无效
    console.log('关闭对话框');
};

