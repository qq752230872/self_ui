var mainColor = '#3CBAFF';			//主色（蓝色）
var greenColor = '#94D301';			//绿色
var orangeColor = '#F87E4E';		//橙色
var yellowColor = '#F7BF28';		//黄色
var whiteColor = '#FFFFFF';			//白色
var blackColor = '#000000';			//黑色
var lineColor = '#DCE1E8';			//分割线颜色
var backgroundColor = '#F8F9FB';	//背景色 

//按钮
Vue.component('self-button', {
    props: {
        text: {
            type: String,
            default: '提交'
        },
        height: {
            default: '44px'
        },
        width: {
            default: '90%'
        },
        background: {
            default: mainColor
        },
        color: {
            default: whiteColor
        },
        font_size: {
            default: '18px'
        },
        icon: {
            default: ''
        },
        icon_color: {
            default: whiteColor
        },
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'background': backgroundColor,
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
            },
            buttonStyleObject: {
                'width': this.width,
                'height': this.height,
                'border': 0,
                'border-radius': '20px',
                'box-shadow': '1px 1px 4px #888888',
                'background': this.background,
                'color': this.color,
                'font-size': this.font_size,
            },
            iconStyleObject: {
                'color': this.icon_color,
                'margin-right': '6px',
            }
        }
    },
    computed: {

    },
    template: "<div v-bind:style='styleObject'>" +
        "<button v-bind:style='buttonStyleObject' >" +
        "<i v-bind:class='icon' v-bind:style='iconStyleObject'></i>" +
        "<span>{{text}}</span>" +
        "</button>" +
        "</div>",
})
//表单编辑器
Vue.component('self-feild-input', {
    props: {
        lable: {
            type: String,
            default: 'lable'
        },
        lable_color:{
            type: String,
        	default: blackColor
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
        	type: String,
        	default: blackColor
        },
        font_size: {
	        default: '14px'
	    },
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'height': '50px',
                'display': 'flex',
                'flex-direction': 'row',
                'justify-content': 'center',
                'align-items': 'center',
                'background': whiteColor,
            },
            lableStyleObject: {
                'width': '33%',
                'padding': '12px 14px',
                'font-weight': 'bold',
                'font-size': '16px',
                'color': this.lable_color,
            },
            inputOutStyleObject: {
                'width': '67%',
                'padding': '12px 10px',
            },
            inputStyleObject: {
                'width': '98%',
                'border': '0',
                'min-height': '24px',
                'font-size': this.font_size,
                'color': this.color
            },
        }
    },
    computed:{
    	currentValue:function () {
        	return this.value
        }
	},
    template: "<div v-bind:style='styleObject'>" +
        "<div v-bind:style='lableStyleObject'>{{lable}}</div>" +
        "<div v-bind:style='inputOutStyleObject'>" +
        "<input v-bind:style='inputStyleObject' v-bind:placeholder='placeholder' " +
        "v-bind:type='type' :value='currentValue' @input='handleInput'" +
        "v-bind:readonly='readonly' v-bind:disabled='disabled'>" +
        "</div>" +
        "</div>",
	methods: {
    	handleInput(event) {
        	var value = event.target.value;
        	this.$emit('input', value); //触发 input 事件，并传入新值
    	}
	}
})
//表单编辑器
Vue.component('self-feild-textarea', {
    props: {
        lable: {
            type: String,
            default: 'lable'
        },
        lable_color:{
            type: String,
        	default: blackColor
        },
        rows: {
        	default: 3
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
        	type: String,
        	default: blackColor
        }
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'display': 'flex',
                'flex-direction': 'row',
                'justify-content': 'center',
                'align-items': 'center',
                'background': whiteColor,
            },
            lableStyleObject: {
                'width': '33%',
                'padding': '12px 14px',
                'font-weight': 'bold',
                'font-size': '16px',
                'color': this.lable_color,
            },
            inputOutStyleObject: {
                'width': '67%',
                'padding': '12px 10px',
            },
            inputStyleObject: {
                'width': '100%',
                'border': '0',
                'min-height': '24px',
                'font-size': '14px',
                'color': this.color
            }
        }
    },
    computed:{
    	currentValue:function () {
        	return this.value
        }
	},
    template: "<div v-bind:style='styleObject'>" +
        "<div v-bind:style='lableStyleObject'>{{lable}}</div>" +
        "<div v-bind:style='inputOutStyleObject'>" +
        "<textarea v-bind:style='inputStyleObject' v-bind:placeholder='placeholder' " +
        "v-bind:rows='rows' :value='currentValue' @input='handleInput'" +
        "v-bind:readonly='readonly' v-bind:disabled='disabled'>" +
        "</textarea>" +
        "</div>" +
        "</div>",
	methods: {
    	handleInput(event) {
        	var value = event.target.value;
        	this.$emit('input', value); //触发 input 事件，并传入新值
    	}
	}
})
//表单超链接
Vue.component('self-feild-a', {
    props: {
        lable: {
            type: String,
            default: 'lable'
        },
        value: {
            default: ''
        },
        href: {
            type: String,
            default: 'javascript:void(0);'
        },
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'height': '50px',
                'display': 'flex',
                'flex-direction': 'row',
                'justify-content': 'center',
                'align-items': 'center',
                'background': whiteColor,
            },
            lableStyleObject: {
                'width': '33%',
                'padding': '12px 14px',
                'font-weight': 'bold',
                'font-size': '16px',
            },
            aOutStyleObject: {
                'width': '67%',
                'padding': '12px 10px',
                'overflow':'hidden',
                'text-overflow': 'ellipsis',
            },
            aStyleObject: {
                'width': '100%',
                'min-height': '24px',
                'font-size': '12px',
            },
        }
    },
    methods: {
    	aClick: function(){
    		window.location.href(this.href);
        },
    },
    template: "<div v-bind:style='styleObject'>" +
        "<div v-bind:style='lableStyleObject'>{{lable}}</div>" +
        "<div v-bind:style='aOutStyleObject'>" +
        "<a v-bind:style='aStyleObject' :href='href'>{{value}}</a>"+
        "</div>" +
        "</div>",
})
//表单超链接（文件转换）
Vue.component('self-feild-file', {
    props: {
        lable: {
            type: String,
            default: 'lable'
        },
        value: {
            default: ''
        },
        href: {
            type: String,
            default: 'javascript:void(0);'
        },
        filehref: {
        	type: String,
        	default: 'javascript:void(0);'
        },
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'height': '50px',
                'display': 'flex',
                'flex-direction': 'row',
                'justify-content': 'center',
                'align-items': 'center',
                'background': whiteColor,
            },
            lableStyleObject: {
                'width': '33%',
                'padding': '12px 14px',
                'font-weight': 'bold',
                'font-size': '16px',
            },
            aOutStyleObject: {
                'width': '67%',
                'padding': '12px 10px',
                'overflow':'hidden',
                'text-overflow': 'ellipsis',
            },
            aStyleObject: {
                'width': '100%',
                'min-height': '24px',
                'font-size': '12px',
            },
        }
    },
    methods: {
    	aClick: function(){
    		this.fileConvert(this.filehref,this.value);
        },
        fileConvert: function(filePath,fileName){
        	$.showLoading("文件有点大，请稍候...");
        	var obj = {
    			'fileUrlSelf':filePath,
    			'fileName':fileName
    		}
    		$.ajax({
    		    type: "get",
    		    dataType:"json",
    		    url: "/TazMobileOA/jersey/fileconvert/fileView",
    		    data: obj,
    		    success: function (result) {
    		    	console.log("result_img");
    		    	console.log(result);
    		    	if(result.CODE == "0002"){
    		    		$.toast("文件类型不支持","cancel");
    		    	} else if(result.CODE == "0001"){
    		    		$.toast("文件下载异常","cancel");
    		    	} else if(result.CODE == "0000"){
        		    	window.location.href = result.FILEPATH;
    		    	} else {
    		    		$.toast("未知错误");
    		    	}
    		    },
    		    error: function (err) {
    		    	$.toptip("网络错误",2000);
    		    },
		        complete: function(XMLHttpRequest, textStatus){
		        	$.hideLoading();
		        },
    		});
        }
    },
    template: "<div v-bind:style='styleObject'>" +
        "<div v-bind:style='lableStyleObject'>{{lable}}</div>" +
        "<div v-bind:style='aOutStyleObject'>" +
        "<a v-bind:style='aStyleObject' :href='href' @click='aClick'>{{value}}</a>"+
        "</div>" +
        "</div>",
})
//长分割线
Vue.component('self-line', {
    props: {
        height: {
            default: '1px'
        },
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'height': this.height,
                'background': lineColor,
            }
        }
    },
    template: "<div v-bind:style='styleObject' ></div>",
})
//表单分割线
Vue.component('self-feild-line', {
    props: {
        height: {
            default: '1px'
        },
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'background': whiteColor,
            },
            lineStyleObject: {
                'width': 'calc(100% - 12px)',
                'height': this.height,
                'background': lineColor,
                'margin-left': '12px',
            }
        }
    },
    template: "<div v-bind:style='styleObject' >" +
        "<div v-bind:style='lineStyleObject'></div>" +
        "</div>",
})
//背景色分割线
Vue.component('self-line-background', {
    props: {
        height: {
            default: '10px'
        },
    },
    data: function () {
        return {
            styleObject: {
                'width': '100%',
                'height': this.height,
                'background': backgroundColor,
            }
        }
    },
    template: "<div v-bind:style='styleObject' ></div>",
})
//标题
Vue.component('self-title', {
    props: {
    	text: {
        	default: '标题'
    	},
        font_size: {
            default: '24px'
        },
        color: {
        	default: mainColor
        },
        text_align: {
            default: 'left'
        },
        margin_top:{
        	default: '2px'
        },
        margin_bottom:{
	    	default: '2px'
	    },
    },
    data: function () {
        return {
            styleObject: {
                'color': this.color,
                'font-size': this.font_size,
                'margin': this.margin_top + ' 14px ' + this.margin_bottom + ' 14px',
                'background': backgroundColor,
                'text-align':this.text_align,
            }
        }
    },
    template: "<div v-bind:style='styleObject'>{{text}}</div>",
})
//底部提示文字
Vue.component('self-bottom-text', {
    props: {
    	text: {
        	default: '提示'
    	},
        font_size: {
            default: '20px'
        },
        color: {
        	default: orangeColor
        },
    },
    data: function () {
        return {
            styleObject: {
                'color': this.color,
                'font-size': this.font_size,
                'margin': '2px 14px',
                'background': backgroundColor,
                'text-align':'center',
            }
        }
    },
    template: "<div v-bind:style='styleObject'>{{text}}</div>",
})
//台州分行每个应用首页的入口布局
Vue.component('self-index-entry', {
    props: {
    	href1: {
        	default: 'javascript:void(0);'
    	},
    	title1:{
    		default: 'title1'
    	},
    	description1:{
    		default: 'description1'
    	},
    	src1:{
    		default: ''
    	},
    	href2: {
    		default: 'javascript:void(0);'
		},
		title2:{
			default: ''
		},
		description2:{
			default: ''
		},
		src2:{
			default: ''
		}
    },
    data: function () {
        return {
        	content: {
        		'background':whiteColor,
	        	'font': "14px/1.5 \"SF Pro SC\",\"SF Pro Text\",\"SF Pro Icons\",\"PingFang SC\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif",
	        	'width':'100%',
	        	'height':'80px',
	        	'display':'flex',
	        	'flex-direction':'row',
	        	'align-items':'center',
	        	'border-top':'solid 1px '+lineColor,
	        	'border-bottom':'solid 1px '+lineColor,
	        	'border-radius':'6px',
	        	'box-shadow':'1px 1px 2px '+lineColor,
            },
            content_part:{
            	'width':'49%',
        		'height':'80%',
        		'display':'flex',
        		'flex-direction':'row',
            },
            line2:{
            	'width':'1px',
            	'height':'60%',
            	'background':lineColor,
            },
            content_left:{
            	'width':'70%',
            	'display':'flex',
            	'flex-direction':'column',
            	'justify-content':'center',
            },
            content_title:{
            	'font-size': '14px',
            	'color': '#333333',
            	'font-weight':'bold',
            	'padding-left':'10px',
            },
            content_description:{
            	'font-size': '12px',
            	'color': '#999999',
            	'padding-left':'10px',
            	'margin-top':'5px',
            },
            content_right:{
            	'width':'30%',
            	'display':'flex',
            	'align-items':'center',
            },
            content_right_img:{
            	'width': '50%',
        		'display': 'block',
            }
        }
    },
    template: 
	"<div v-bind:style='content'>"+
		"<a v-bind:href='href1' v-bind:style='content_part'>"+
			"<div v-bind:style='content_left'>"+
				"<div v-bind:style='content_title'>{{title1}}</div>"+
				"<div v-bind:style='content_description'>{{description1}}</div>"+
			"</div>"+
			"<div v-bind:style='content_right'>"+
				"<img v-bind:style='content_right_img' v-bind:src='src1'>"+
			"</div>"+
		"</a>"+
		"<div v-bind:style='line2'></div>"+
		"<a v-bind:href='href2' v-bind:style='content_part'>"+
			"<div v-bind:style='content_left'>"+
				"<div v-bind:style='content_title'>{{title2}}</div>"+
				"<div v-bind:style='content_description'>{{description2}}</div>"+
			"</div>"+
			"<div v-bind:style='content_right'>"+
				"<img v-bind:style='content_right_img' v-bind:src='src2'>"+
			"</div>"+
		"</a>"+
	"</div>",
})