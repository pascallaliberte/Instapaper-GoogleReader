function _readlater() {
	var uk='rUffwEbLWzkz';
	var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://www.instapaper.com/b',e=encodeURIComponent;
	if (/www\.google\.com\/reader\/i\//.test(d.location)) {
		var n=d.getElementById('entries').childNodes,l=null,h=null;
		for(var i=0;i<n.length;i++){
			if(/expanded/.test(n[i].className)){
				l=n[i]; break;
			}
		}
		var t=l.getElementsByTagName('span');
		for (var i=0;i<t.length;i++) {
			if(/item-title/.test(t[i].className)) {
				l.title = t[i].textContent; break;
			}
		}
		var h=l.getElementsByTagName('a');
		for (var i=h.length-1;i>=0;i--) {
			if(/See original/.test(h[i].textContent) && h[i].href) {
				l.href = h[i].href; break;
			}
		}
		var p='?v=4&k='+uk+'&u='+e(l.href)+'&t='+e(l.title)+'&s='+e(s),u=f+p;
		
	} else if(/www\.google\.com\/reader/.test(d.location) 
		&& typeof(window.getPermalink) == 'function'
		&& getPermalink() != null) {
		var l=getPermalink();
		l.href=l.url;
		var p='?v=4&k='+uk+'&u='+e(l.href)+'&t='+e(l.title)+'&s='+e(s),u=f+p;
	} else {
		var l=d.location,p='?v=4&k='+uk+'&u='+e(l.href)+'&t='+e(d.title)+'&s='+e(s),u=f+p;
	}
	try{
		if(!/^(.*\.)?instapaper([^.]*)?$/.test(l.host))throw(0);iptstbt();
		}
	catch(z){a =function(){if(!w.open(u,'t','toolbar=0,resizable=0,status=1,width=250,height=150'))d.location.href=u;};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();}
} _readlater();void(0)