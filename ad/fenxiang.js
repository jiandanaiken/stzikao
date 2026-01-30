//********************************************************************************
//** 一键转载文章到新浪微博和腾讯微博
//** 
//** 潮汕网
//** http://www.chaoshanw.cn/
//********************************************************************************



document.writeln("<CENTER>")
document.writeln("分享这篇文章:")
document.writeln("<a href=\"javascript:void((function(s,d,e){try{}catch(e){}var f='http:\/\/v.t.sina.com.cn\/share\/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title),'&appkey=2419632877'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)\/2,',top=',(s.height-450)\/2].join('')))u.href=[f,p].join('');};if(\/Firefox\/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));\" style=\"background:url(http:\/\/t.sina.com.cn\/favicon.ico) no-repeat; padding:0 0 0 20px; text-decoration:none; \">转发至新浪微博<\/a>");document.writeln("<a href=\"javascript:void(0);\" onclick=\"posttoWb();\" style=\"background:url(http:\/\/t.qq.com\/favicon.ico) no-repeat; padding:0 0 0 20px;  text-decoration:none; \">转播到腾讯微薄<\/a>");

function posttoWb(){
	var _t = encodeURI(document.title);
	var _url = encodeURI(window.location);
	var _appkey = encodeURI('d0433d69eea64737a714f62432f7f143');
	var _site = encodeURI('http://www.stzikao.com/');
	var _pic = encodeURI('');
	var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic;
	window.open(_u,'转播到腾讯微博', 'width=700, height=480, top=320, left=180, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no');
}
document.writeln(" <a href=\"javascript:(function(){window.open(\'http:\/\/sns.qzone.qq.com\/cgi-bin\/qzshare\/cgi_qzshare_onekey?url=\'+ encodeURIComponent(location.href)+ \'&title=\'+encodeURIComponent(document.title),\'_blank\');})()\" title=\"分享到QQ空间\"><img src=\"http:\/\/www.chaoshanw.cn\/ad\/qqkongjian.png\"  alt=\"Qzone一键分享\" border=\"0\">分享到QQ空间<\/a>")
document.writeln("<\/CENTER>")

