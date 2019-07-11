var whiteColor = '#FFFFFF';			//白色
var blackColor = '#000000';			//黑色
var lineColor = '#E6E8EE';			//分割线颜色
var backgroundColor = '#F8F9FB';	//背景色 
var mainColor = '#3CBAFF';			//主色

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
        }
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
    		var url = "../self_ui/imgFrame.html?filehref="+this.filehref;
    		
    		window.open(url);
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