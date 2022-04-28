var KUDAI_phpGetUrl = "http://clgq.04wan.com/php/getPayUrl.php";


function KUDAI_httpGet(params, callback) {
    var paramsArr = [];
    for (key in params) {
        paramsArr.push(key + '=' + params[key]);
    }
    var url = KUDAI_phpGetUrl + '?' + paramsArr.join('&');
    console.log('1、', url);

    $.ajax({
        type: "GET",
        url: url,
        success: callback,
        dataType: "json",
        error: function errorCallback(err) {
            console.log("从开发者服务端获取url失败！" + err);
        }
    })
}