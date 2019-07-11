new Vue({
    el: '#app',
    data: {
    	'src':''
    },
    mounted: function () {
    	this.src = this.getUrlParam("filehref");
    	console.log(src);
    },
    methods: {
    	getUrlParam: function (name){
    		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    		var r = window.location.search.substr(1).match(reg);
    		if(r!= null)
    			return unescape(r[2]);
    		return null;
    	}
    }
})


