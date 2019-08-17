{
var TAMER;
var Title=document.getElementsByTagName("title")[0].innerText;
document.addEventListener('visibilitychange', function(){
	if(document.hidden){
		clearTimeout(TAMER);
		document.getElementsByTagName("link")[0].href="failure.ico";
		document.getElementsByTagName("title")[0].innerText="(●—●)喔哟，崩溃啦！";
	}
	else{
		document.getElementsByTagName("link")[0].href="favicon.ico";
		document.getElementsByTagName("title")[0].innerText="(/≧▽≦/)咦！又好了！";
		TAMER=setTimeout('document.getElementsByTagName("title")[0].innerText=Title;', 2000);
		}
	});
}