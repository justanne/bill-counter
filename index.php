<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bill Counter</title>
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <link type="text/css"href="dist/app.css" rel="stylesheet" media="screen">
    <!-- <link type="text/css" href="dist/print.css" rel="stylesheet" media="print" > -->
</head>
<body>
    <div id="app">
        <div class="flex flex-wrap px-10 py-5 billname">
            <div class="flex flex-wrap items-center w-full mr-5" v-if="!billname2">
                <div class="w-full md:w-auto inline-block my-2">Name</div>
                <div class="w-full md:w-auto inline-block my-2"><input class="w-full md:w-auto" type="text" v-model.trim="billname" maxlength="20" id="name" autofocus></div>
                <div class="w-full md:w-auto inline-block my-2"><button class="btn" @click="addBillName">Set</button></div>
            </div>
            <div class="flex w-full">
                <div v-if="billname2">Counting for </div></div> <h1 class="text-xl text-black uppercase" v-text="billname2"></h1>
            </div>
        </div>
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

                <div class="flex text-list">
                    <div class="w-1/2">0.25</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v025" @change="updateSubTotal('025')" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st025 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">0.10</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v010" @change="updateSubTotal('010')" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st010 }}</div>
                </div>

                <div class="flex text-list">
                    <div class="w-1/2">0.05</div>
                    <div class="w-1/2"><input type="tel" maxlength="4" v-model.lazy="v005" @change="updateSubTotal('005')" name="" id=""></div>
                    <div class="w-1/2 pl-20">{{ st005 }}</div>
                </div>

                <div class="flex mt-5">
                    <div class="w-1/2"><h3>Total</h3></div>
                    <div class="w-1/2"></div>
                    <div class="w-1/2 pl-20">{{ total }}</div>
                </div>
            </div>
        </div>
        <div class="flex px-10">
            <button class="btn btn-default px-3 py-1" @click="resetValues">Clear</button>
            <button class="btn btn-primary px-3 py-1 ml-5" @click="printCounts">Print</button>
        </div>
    </div>

<script type="text/javascript" src="dist/app.js"></script>
</body>
</html>