var whiteColor = '#FFFFFF';
var backgroundColor = '#F8F9FB';//背景色 
var mainColor = '#3CBAFF'; //主色

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
            type: String,
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

            },
        }
    },
    template: "<div v-bind:style='styleObject'>" +
        "<div v-bind:style='lableStyleObject'>{{lable}}</div>" +
        "<div v-bind:style='inputOutStyleObject'>" +
        "<input v-bind:style='inputStyleObject' v-bind:placeholder='placeholder' " +
        "v-bind:type='type' v-model='value'  " +
        "v-bind:readonly='readonly' v-bind:disabled='disabled'>" +
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
                'background': '#E6E8EE',
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
                'background': '#E6E8EE',
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