var wz_JSQ = 0;
function wzDATE(id) {
	var wz = new Object;
	wz.dateHTML = '<div class="wzdate-wrap"><div class="wzdate-header"><div class="wzdate-year"><div class="wzdate-point"><span class="wzdate-p"id="wzdate-p1">◀</span></div><div class="wzdate-tnumber"id="wzdate-y"></div><div class="wzdate-point"><span class="wzdate-p"id="wzdate-p2">▶</span>年</div><div class="wzdate-point"><span class="wzdate-p"id="wzdate-p3">◀</span></div><div class="wzdate-tnumber"id="wzdate-month"></div><div class="wzdate-point"><span class="wzdate-p" id="wzdate-p4">▶</span>月</div></div></div><div class="wzdate-nm"><span class="wzdate-tt">一</span><span class="wzdate-tt">二</span><span class="wzdate-tt">三</span><span class="wzdate-tt">四</span><span class="wzdate-tt">五</span><span class="wzdate-tt">六</span><span class="wzdate-tt"style="border-right:0px;">日</span><span class="wzdate-num"></span><span class="wzdate-num"></span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num"style="border-right:0px;">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num"style="border-right:0px;">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num"style="border-right:0px;">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num"style="border-right:0px;">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num"style="border-right:0px;">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num">&nbsp;</span><span class="wzdate-num"style="border-right:0px;">&nbsp;</span></div></div>';
	wz.wrap = id;
	wz.arr = new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	wz.date = new Date();
	wz.day = wz.date.getDate();
	wz.year = wz.date.getFullYear();
	wz.week = wz.date.getDay();
	wz.mon = wz.date.getMonth();
	wz.relWeek = 0;
	wz.NUM = document.getElementsByClassName("wzdate-num");
	wz.jsq = 0;
	wz.build = function() {
		wz.wrap.innerHTML = wz.dateHTML;
		wz_JSQ++;
		wz.jsq = wz_JSQ;
		wz.addCSS(wz.jsq - 1);
		wz.changeID(wz.jsq);
		var p1 = document.getElementById("wzdate-p1-" + wz.jsq.toString());
		var p2 = document.getElementById("wzdate-p2-" + wz.jsq.toString());
		var p3 = document.getElementById("wzdate-p3-" + wz.jsq.toString());
		var p4 = document.getElementById("wzdate-p4-" + wz.jsq.toString());
		p1.onclick = wz.yMm;
		p2.onclick = wz.yPp;
		p3.onclick = wz.mMm;
		p4.onclick = wz.mPp;
		wz.fluchYandM(wz.year, wz.mon);
		wz.yearChange(wz.year);
		var first = wz.week - (wz.day - 1) % 7;
		if (first <= 0) first += 7;
		wz.setHtml(first);
		wz.relWeek = first;
		wz.day = 1
	};
	wz.mPp = function() {
		wz.relWeek = wz.relWeek + (wz.arr[wz.mon + 1]) % 7;
		if (wz.relWeek >= 8) wz.relWeek = wz.relWeek - 7;
		if (wz.mon == 11) {
			wz.mon = 0;
			wz.year++;
			wz.yearChange(wz.year)
		} else wz.mon++;
		wz.fluchYandM(wz.year, wz.mon);
		wz.setHtml(wz.relWeek)
	};
	wz.mMm = function() {
		if (wz.mon == 0) {
			wz.mon = 11;
			wz.year--;
			wz.yearChange(wz.year)
		} else wz.mon--;
		wz.relWeek = wz.relWeek - (wz.arr[wz.mon + 1]) % 7
		if (wz.relWeek <= 0) wz.relWeek = wz.relWeek + 7;
		wz.fluchYandM(wz.year, wz.mon);
		wz.setHtml(wz.relWeek)
	};
	wz.yMm = function() {
		var lastYear = 0;
		for (i = 1; i < wz.mon + 1; i++) {
			lastYear += wz.arr[i]
		}
		wz.year--;
		wz.yearChange(wz.year);
		for (i = wz.mon + 1; i <= 12; i++) {
			lastYear += wz.arr[i]
		}
		wz.relWeek = wz.relWeek - (lastYear) % 7
		if (wz.relWeek <= 0) wz.relWeek = wz.relWeek + 7;
		wz.fluchYandM(wz.year, wz.mon);
		wz.setHtml(wz.relWeek)
	}
	wz.yPp = function() {
		var nextYear = 0;
		for (i = wz.mon + 1; i <= 12; i++) {
			nextYear += wz.arr[i]
		}
		wz.year++;
		wz.yearChange(wz.year);
		for (i = 1; i < wz.mon + 1; i++) {
			nextYear += wz.arr[i]
		}
		wz.relWeek = wz.relWeek + (nextYear) % 7;
		if (wz.relWeek >= 8) wz.relWeek = wz.relWeek - 7;
		wz.fluchYandM(wz.year, wz.mon);
		wz.setHtml(wz.relWeek)
	};
	wz.yearChange = function(i) {
		if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) wz.arr[2] = 29;
		else wz.arr[2] = 28
	};
	wz.setHtml = function(w) {
		for (i = (wz.jsq - 1) * 42; i < wz.jsq * 42; i++) {
			wz.NUM[i].innerHTML = "&nbsp;";
			wz.NUM[i].style.backgroundColor = "#fff"
		}
		var k = 1;
		for (i = w - 1 + (wz.jsq - 1) * 42; i < wz.jsq * 42; i++) {
			if (i <= wz.arr[wz.mon + 1] - 1 + (w - 1) + (wz.jsq - 1) * 42) wz.NUM[i].innerHTML = k;
			if ((wz.mon == wz.date.getMonth()) && (wz.year == wz.date.getFullYear()) && k == wz.date.getDate()) wz.NUM[i].style.backgroundColor = "#ccc";
			k++
		}
	};
	wz.fluchYandM = function(y, m) {
		document.getElementById("wzdate-y-" + wz.jsq.toString()).innerHTML = y;
		if (wz.mon <= 8) document.getElementById("wzdate-month-" + wz.jsq.toString()).innerHTML = '&nbsp;' + (wz.mon + 1).toString() + '&nbsp;';
		else document.getElementById("wzdate-month-" + wz.jsq.toString()).innerHTML = wz.mon + 1
	};
	wz.changeID = function(jsq) {
		document.getElementById("wzdate-y").id = "wzdate-y-" + wz.jsq.toString();
		document.getElementById("wzdate-month").id = "wzdate-month-" + wz.jsq.toString();
		document.getElementById("wzdate-p1").id = "wzdate-p1-" + wz.jsq.toString();
		document.getElementById("wzdate-p2").id = "wzdate-p2-" + wz.jsq.toString();
		document.getElementById("wzdate-p3").id = "wzdate-p3-" + wz.jsq.toString();
		document.getElementById("wzdate-p4").id = "wzdate-p4-" + wz.jsq.toString()
	};
	wz.addCSS = function(k) {
		for (i = k; i < document.getElementsByClassName("wzdate-wrap").length; i++) document.getElementsByClassName("wzdate-wrap")[i].style.cssText += 'position:relative;width:175px;height:200px;border:1px solid black;border-bottom:0px;moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;';
		for (i = k; i < document.getElementsByClassName("wzdate-header").length; i++) document.getElementsByClassName("wzdate-header")[i].style.cssText += 'position:relative;height:25px;width:100%;margin:0 auto;border-bottom:2px double#00a1d6;';
		for (i = k; i < document.getElementsByClassName("wzdate-year").length; i++) document.getElementsByClassName("wzdate-year")[i].style.cssText += 'height:100%;width:80%;display:block;margin:0 auto;';
		for (i = 4 * k; i < document.getElementsByClassName("wzdate-point").length; i++) document.getElementsByClassName("wzdate-point")[i].style.cssText += 'height:100%;float:left;text-align:center;line-height:250%;font-size:10px;';
		for (i = 4 * k; i < document.getElementsByClassName("wzdate-p").length; i++) document.getElementsByClassName("wzdate-p")[i].style.cssText += 'cursor:pointer;font-size:16px;';
		for (i = 2 * k; i < document.getElementsByClassName("wzdate-tnumber").length; i++) document.getElementsByClassName("wzdate-tnumber")[i].style.cssText += 'height:100%;color:#00a1d6;text-align:center;float:left;line-height:250%;font-size:10px;';
		for (i = k; i < document.getElementsByClassName("wzdate-nm").length; i++) document.getElementsByClassName("wzdate-nm")[i].style.cssText += 'font-size:0px;';
		for (i = 7 * k; i < document.getElementsByClassName("wzdate-tt").length; i++) {
			document.getElementsByClassName("wzdate-tt")[i].style.cssText += 'width:24px;height:24px;color:#f45a8d;text-align:center;line-height:250%;font-size:10px;display:inline-block;border-bottom:1px solid black;border-right:1px solid black;letter-spacing:0px;';
			if ((i + 1) % 7 == 0) document.getElementsByClassName("wzdate-tt")[i].style.borderRight = "0px"
		}
		for (i = 42 * k; i < document.getElementsByClassName("wzdate-num").length; i++) {
			document.getElementsByClassName("wzdate-num")[i].style.cssText += 'width:24px;height:24px;color:black;text-align:center;line-height:250%;font-size:10px;display:inline-block;border-bottom:1px solid black;border-right:1px solid black;letter-spacing:0px;';
			if ((i + 1) % 7 == 0) document.getElementsByClassName("wzdate-num")[i].style.borderRight = "0px"
		}
	};
	wz.ifTime = function(jsq){
		if(jsq == 1)
			setTimeout("wz.ifTime(jsq)",500);
	};
	return wz
}