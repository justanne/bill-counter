console.log = function () { }

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
        v1000: 0,
        v500: 0,
        v200: 0,
        v100: 0,
        v50: 0,
        v20: 0,
        v10: 0,
        v5: 0,
        v1: 0,
    },

    watch: {
        v1000: function (n, o) {
            let d = 1000
            this.updateSubTotal(n, d)
        },
    },
    methods: {
        updateSubTotal(d) {
            // let subtotal = n * d

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
    },
})