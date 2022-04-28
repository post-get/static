var BitUtils;
(function (BitUtils) {
    var $_params;
    var $_urlParam;

    var $s_uid;
    var $s_uname;
    var $s_flag;
    var $s_zone;

    function init(uid, uname, flag, zone) {
        $s_uid = uid;
        $s_uname = uname;
        $s_flag = flag;
        $s_zone = zone;
    }

    BitUtils.init = init;

    function event(event) {
        // var url = "http://jh.youxibt.com:6200/statis/event?"

        // if($_params == undefined) {
        //     $_urlParam = window.location.search.replace("?","");
        //     $_params = parseUrlParam($_urlParam);
        // } else if ($_params == "") {
        //     $_urlParam = window.location.search.replace("?","");
        //     $_params = parseUrlParam($_urlParam);
        // }

        // var msgParam = "event=" + event;

        // if($_params != undefined) {
        //     msgParam += 
        //     "&uid=" + $_params["uid"] +
        //     "&uname=" + $_params["uname"] +  
        //     "&flag=" + $_params["flag"] +
        //     "&zone=" + $_params["zone"];
        // } else {
        //     msgParam += 
        //     "&uid=" + $s_uid +
        //     "&uname=" + $s_uname +  
        //     "&flag=" + $s_flag +
        //     "&zone=" + $s_zone;
        // }

        // // HttpMessage.requestCallback("/cx/GetCreateRoleSign.php", msgParam, function(resp){});
        // $.get(url + msgParam, function(data,status){});
    }

    BitUtils.event = event;

    function follow(url) {
        $("#followDiv").show();
    }

    BitUtils.follow = follow;

    /**
     * 取得url中参数部分解析为字典对象
     */
    function parseUrlParam(url) {
        var params = {};
        var strs = url.split("&");
        for (var i = 0; i < strs.length; i++) {
            var pair = strs[i].split("=");
            if (pair.length == 2) {
                params[pair[0]] = pair[1];
            }
        }
        return params;
    }

})(BitUtils || (BitUtils = {}));
