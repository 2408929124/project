function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	var top=$('top').getElementsByTagName('li')
	var bottoms=$('bottom').getElementsByTagName('div')
	var timer=null
	var index=0
	console.log(bottoms)
	if(top.length != bottoms.length ){
		return
	}
	/*for(var i=0;i<top.length;i++){
		top[i].id=i;
		top[i].onmousemove=function(){
			var that=this
			if(timer){
				clearTimeout(timer)
			}
			timer=setTimeout(function(){
				for(var j=0;j<top.length;j++){
				top[j].className=''
				bottoms[j].style.display='none'
			}
			    top[that.id].className='selected'
			    bottoms[that.id].style.display='block'
			    
			},1000)
			
		}
	}*/
	   if(timer){
	   	clearInterval(timer)
	   }
	timer=setInterval(function(){
		index++
		if(index>=top.length){
			index=0
		}
		for(var j=0;j<top.length;j++){
			top[j].className='';
			bottoms[j].style.display='none'
		}
			top[index].className='selected'
			bottoms[index].style.display='block'
	},2000)
	
	for(var i=0;i<top.length;i++){
		top[i].id=i
		top[i].onmouseover=function(){
			clearInterval(timer)
			
			for(var j=0;j<top.length;j++){
			top[j].className='';
			bottoms[j].style.display='none'
		}
			top[this.id].className='selected'
			bottoms[this.id].style.display='block'
		}
		top[i].onmouseout=function(){
			index=this.id
			timer=setInterval(function(){
		index++
		if(index>=top.length){
			index=0
		}
		for(var j=0;j<top.length;j++){
			top[j].className='';
			bottoms[j].style.display='none'
		}
			top[index].className='selected'
			bottoms[index].style.display='block'
			
	},2000)
		}
		
	}
	
}
