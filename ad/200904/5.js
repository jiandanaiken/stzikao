//********************************************************************************
//** 一键转载文章到新浪微博和腾讯微博
//** 
//** 潮汕网
//** http://www.chaoshanw.cn/
//********************************************************************************



document.writeln("<CENTER>")
document.writeln("  ")


document.writeln("<a href=\"javascript:void(0)\" onclick=\"postToWb();return false;\" class=\"tmblog\"><img src=\"http:\/\/v.t.qq.com\/share\/images\/s\/b24.png\" border=\"0\" alt=\"转播到腾讯微博\" ><\/a>");
document.writeln("<script type=\"text\/javascript\">");
	function postToWb(){
		var _url = encodeURIComponent(document.location);
		var _assname = encodeURI("1350129792@qq.com");//你注册的帐号，不是昵称
		var _appkey = encodeURI("69324060035f46f8bd79014895c0bac3");//你从腾讯获得的appkey
		var _pic = encodeURI('');//（例如：var _pic='图片url1|图片url2|图片url3....）
		var _t = '';//标题和描述信息
		var metainfo = document.getElementsByTagName("meta");
		for(var metai = 0;metai < metainfo.length;metai++){
			if((new RegExp('description','gi')).test(metainfo[metai].getAttribute("name"))){
				_t = metainfo[metai].attributes["content"].value;
			}
		}
		_t =  document.title+_t;//请在这里添加你自定义的分享内容
		if(_t.length > 120){
			_t= _t.substr(0,117)+'...';
		}
		_t = encodeURI(_t);
                 var _site = '';
                var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
                window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
	}
document.writeln("	<\/script>");



document.writeln("<script type=\"text\/javascript\">");
document.writeln("(function(){");
document.writeln("var p = {");
document.writeln("url:location.href,");
document.writeln("desc:\'\',\/*默认分享理由(可选)*\/");
document.writeln("summary:\'\',\/*摘要(可选)*\/");
document.writeln("title:\'\',\/*分享标题(可选)*\/");
document.writeln("site:\'\',\/*分享来源 如：腾讯网(可选)*\/");
document.writeln("pics:\'\' \/*分享图片的路径(可选)*\/");
document.writeln("};");
document.writeln("var s = [];");
document.writeln("for(var i in p){");
document.writeln("s.push(i + \'=\' + encodeURIComponent(p[i]||\'\'));");
document.writeln("}");
document.writeln("document.write([\'<a href=\"http:\/\/sns.qzone.qq.com\/cgi-bin\/qzshare\/cgi_qzshare_onekey?\',s.join(\'&\'),\'\" target=\"_blank\" title=\"分享到QQ空间\"><img src=\"http:\/\/qzonestyle.gtimg.cn\/ac\/qzone_v5\/app\/app_share\/share_bt.png\" style=\"border:none;\" alt=\"分享到QQ空间\" \/><\/a>\'].join(\'\'));");
document.writeln("})();");
document.writeln("<\/script>")

document.writeln("<script type=\"text\/javascript\" charset=\"utf-8\">");
document.writeln("(function(){");
document.writeln("  var _w = 106 , _h = 24;");
document.writeln("  var param = {");
document.writeln("    url:location.href,");
document.writeln("    type:\'5\',");
document.writeln("    count:\'\', \/**是否显示分享数，1显示(可选)*\/");
document.writeln("    appkey:\'2867299439\', \/**您申请的应用appkey,显示分享来源(可选)*\/");
document.writeln("    title:\'\', \/**分享的文字内容(可选，默认为所在页面的title)*\/");
document.writeln("    pic:\'\', \/**分享图片的路径(可选)*\/");
document.writeln("    ralateUid:\'2300488754\', \/**关联用户的UID，分享微博会@该用户(可选)*\/");
document.writeln("	language:\'zh_cn\', \/**设置语言，zh_cn|zh_tw(可选)*\/");
document.writeln("    rnd:new Date().valueOf()");
document.writeln("  }");
document.writeln("  var temp = [];");
document.writeln("  for( var p in param ){");
document.writeln("    temp.push(p + \'=\' + encodeURIComponent( param[p] || \'\' ) )");
document.writeln("  }");
document.writeln("  document.write(\'<iframe allowTransparency=\"true\" frameborder=\"0\" scrolling=\"no\" src=\"http:\/\/hits.sinajs.cn\/A1\/weiboshare.html?\' + temp.join(\'&\') + \'\" width=\"\'+ _w+\'\" height=\"\'+_h+\'\"><\/iframe>\')");
document.writeln("})()");
document.writeln("<\/script>")



document.writeln("<\/CENTER>")

document.writeln(" ")

document.writeln("<!-- 广告位：分享下方 -->");
document.writeln("<script type=\"text\/javascript\" >BAIDU_CLB_SLOT_ID = \"396273\";<\/script>");
document.writeln("<script type=\"text\/javascript\" src=\"http:\/\/cbjs.baidu.com\/js\/o.js\"><\/script>")
