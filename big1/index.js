

var i = function(){
	var top = document.getElementsByClassName('top1')[0];
	
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 150){
			top1.style.position = 'fixed';
		}else{
			top1.style.position = 'static';
		}
	}
}
i();