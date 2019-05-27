new Vue({
    el: '#app',
    data: {
        
    },
    methods: {
        click: function (event) {
            if (event) {
                alert(event.target.tagName)
            }
        }
    },
})