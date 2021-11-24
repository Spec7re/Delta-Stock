<template>
    <div style="margin-top: 40px;">
        <div class="row">
            <div class="col-md-4 market" v-for="(stock, index) in stocks">
                <stock :stock="stock"/>
            </div>
        </div>
    </div>
</template>
<script>
    import Stock from './Stock.vue'
    export default {
        components:{
            'stock' : Stock,
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>


<style>
    .market {
        margin-bottom: 10px;
    }
    .stock {
        cursor: pointer;
    }
    .stock:hover{
        background-color: #d3e6ff;
    }
</style>