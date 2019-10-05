<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bill Counter</title>
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link type="text/css" href="dist/app.css" rel="stylesheet" >
</head>
<body>
    <div id="app">
        <div class="flex p-10">
            <div class="w-full mr-5">
                <!-- <h2 class="mb-5">Denomination</h2> -->
                <div class="flex text-list-header">
                    <div class="w-1/2"><h2>Denomination</h2></div>
                    <div class="w-1/2">No. of pieces</div>
                    <div class="w-1/2 pl-20">Amount</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">1000</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model="v1000" @change="updateSubTotal(1000)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st1000 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">500</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v500" @change="updateSubTotal(500)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st500 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">200</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v200" @change="updateSubTotal(200)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st200 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">100</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v100" @change="updateSubTotal(100)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st100 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">50</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v50" @change="updateSubTotal(50)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st50 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">20</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v20" @change="updateSubTotal(20)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st20 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">10</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v10" @change="updateSubTotal(10)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st10 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">5</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v5" @change="updateSubTotal(5)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st5 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">1</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v1" @change="updateSubTotal(1)" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st1 }}</div>
                </div>

                <div class="flex">
                    <div class="w-1/2"><h3>Total</h3></div>
                    <div class="w-1/2"></div>
                    <div class="w-1/2 pl-20">{{ total }}</div>
                </div>
            </div>
        </div>
        <div class="flex px-10">
            <button class="btn px-3 py-1" @click="resetValues">Clear</button>
        </div>
    </div>

<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script> -->
<script type="text/javascript" src="dist/app.js"></script>
</body>
</html>