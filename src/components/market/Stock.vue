<template>
    <div>
        <div class="card">
            <div  class="card-header bg-info" :id="index">{{ stock.name }} <span style="font-size: 12px;">( Price: {{ stock.price }} )</span></div>
            <div class="card-body stock">
                <label>
                    <input v-model="quantity" class="form-control" placeholder="Quantity" type="number">
                </label>
                <button  @click.prevent="buy" class="btn btn-info float-right" :disabled=" quantity <= 0 ">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
               quantity: 0,
            }
        },
        methods: {
            buy() {
                //TODO Buy stocks
                console.log('INT', parseInt(this.quantity));
                let stock = { name :this.stock.name, price : this.stock.price, quantity: parseInt(this.quantity) };

                this.$store.dispatch('buyStocks', stock);
                console.log(stock);

                // this.$store.dispatch('buyStocks', stock);
                //
                // this.quantity = '';
            }
        },
    }
</script>