define(['vue'], function(Vue) {
    new Vue({
        el: '#app',

        data: {
            agree: false,
            disabled: true,
            value:['B'],
            options: [{
                label: 'disabled option',
                value: 'A',
                disabled: true
            }, {
                label: 'checked disabled',
                 disabled: true,
                value: 'B'
            }, {
                label: 'optionA',
                value: 'C'
            }, {
                label: 'optionB',
                value: 'D'
            },
             {
                label: 'optionC',
                value: 'E'
            }]

        },
        created: function() {

        },
        watch: {

        },
        computed: {

        },
        mounted: function() {


        },
        methods: {
            setval: function() {
                this.sex = 1
            }
        }
    });
})
