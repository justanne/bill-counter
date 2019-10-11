// Vue.config.devtools      = false
// Vue.config.productionTip = false
// Vue.config.silent        = true
// Vue.config.debug         = false
// console.log = function () { }

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
        billname: '',
        billname2: '',
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
            }

            this.updateTotal()
        },
        updateTotal() {
            this.total = this.st1000 + this.st500 + this.st200 + this.st100 + this.st50 + this.st20 + this.st10 + this.st5 + this.st1
            this.total = this.total.toLocaleString('en',{maximumSignificantDigits : 12})
            console.log(this.total)
        },
        resetValues() {
            this.v1000 = this.v500 = this.v200 = this.v100 = this.v50 = this.v20 = this.v10 = this.v5 = this.v1 = null
            this.st1000 = this.st500 = this.st200 = this.st100 = this.st50 = this.st20 = this.st10 = this.st5 = this.st1 = 0
            this.total = 0
        },
        printCounts() {
            return window.print()
        },
    },
})