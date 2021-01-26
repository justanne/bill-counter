import Vue from 'vue'

const isProd = process.env.NODE_ENV === 'production'

Vue.config.devtools      = isProd ? false : true
Vue.config.productionTip = isProd ? false : true
Vue.config.silent        = isProd ? true  : false
Vue.config.debug = isProd ? false : true

new Vue({
    el: '#app',
    data: {
        st1000: 0,
        st500: 0,
        st200: 0,
        st100: 0,
        st50: 0,
        st20: 0,
        st10: 0,
        st5: 0,
        st1: 0,
        st025: 0,
        st010: 0,
        st005: 0,
        total: 0,
        v1000: null,
        v500: null,
        v200: null,
        v100: null,
        v50: null,
        v20: null,
        v10: null,
        v5: null,
        v1: null,
        v025: null,
        v010: null,
        v005: null,
        billname: '',
        billname2: '',
    },

    mounted() {
        document.getElementById('name').focus({ preventScroll: true });
    },


    methods: {
        addBillName() {
            this.billname2 = this.billname
        },
        updateSubTotal(d) {
            switch (d) {
                case 1000:
                    this.st1000 = d * this.v1000
                    break
                case 500:
                    this.st500 = d * this.v500
                    break
                case 200:
                    this.st200 = d * this.v200
                    break
                case 100:
                    this.st100 = d * this.v100
                    break
                case 50:
                    this.st50 = d * this.v50
                    break
                case 20:
                    this.st20 = d * this.v20
                    break
                case 10:
                    this.st10 = d * this.v10
                    break
                case 5:
                    this.st5 = d * this.v5
                    break
                case 1:
                    this.st1 = d * this.v1
                    break
                case '025':
                this.st025 = (parseInt(d) * this.v025)/100
                    break
                case '010':
                this.st010 = (parseInt(d) * this.v010)/100
                    break
                case '005':
                this.st005 = (parseInt(d) * this.v005)/100
                break
            }

            this.updateTotal()
        },
        updateTotal() {
            this.total = this.st1000 + this.st500 + this.st200 + this.st100 + this.st50 + this.st20 + this.st10 + this.st5 + this.st1 + this.st025 + this.st010 + this.st005
            this.total = this.total.toLocaleString('en',{maximumSignificantDigits : 12})
            console.log(this.total)
        },
        resetValues() {
            console.log('values are cleared')
            this.v1000 = this.v500 = this.v200 = this.v100 = this.v50 = this.v20 = this.v10 = this.v5 = this.v1 = this.v025 = this.v010 = this.v005 = null
            this.st1000 = this.st500 = this.st200 = this.st100 = this.st50 = this.st20 = this.st10 = this.st5 = this.st1 = this.st025 = this.st010 = this.st005 = 0
            this.total = 0
            this.billname2 = this.billname = ''
        },
        printCounts() {
            return window.print()
        },
    },
})