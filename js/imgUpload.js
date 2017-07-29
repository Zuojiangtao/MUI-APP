/*
 
 * ===========图片上传瀑布流插件============
 * ==========左江涛 - 2017/7/26==========
 * */

(function($){
	var json = {
		data:[
			{"src1":"../res/img-upload/1.png","text":"DHAHSDSA-0001-正面","src2":"../res/img-upload/img-none.png"},
			{"src1":"../res/img-upload/1.png","text":"DHAHSDSA-0001-正面","src2":"../res/img-upload/img-none.png"},
			{"src1":"../res/img-upload/1.png","text":"DHAHSDSA-0001-正面","src2":"../res/img-upload/img-none.png"},
			{"src1":"../res/img-upload/1.png","text":"DHAHSDSA-0001-正面","src2":"../res/img-upload/img-none.png"}
		]
	};
	for(var i=0;i<json.data.length;i++){
	    var li = document.createElement('li');
	    var s_img = document.createElement("img");
	    var textarea = document.createElement("textarea");
	    var m_img = document.createElement("img");
	    s_img.classList.add('s-img');
	    m_img.classList.add('m-img');
	    textarea.classList.add('textarea');
	    s_img.setAttribute('src',json.data[i].src1);
	    m_img.setAttribute('src',json.data[i].src2);
	    textarea.innerText = json.data[i].text;
	    li.appendChild(s_img);
	    li.appendChild(textarea);
	    li.appendChild(m_img);
	 	var left = document.querySelector('.BoxLeft');
	 	var right = document.querySelector('.BoxRight');
	    if(left.offsetHeight < right.offsetHeight){ 
	        left.appendChild(li); 
	    }else{ 
	        right.appendChild(li); 
	    } 
	}
})(mui);
 