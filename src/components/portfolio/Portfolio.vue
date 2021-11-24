<template>
    <div style="margin-top: 40px;">
        <div class="row">
            <div class="col-md-6 portfolio" v-for="stock in stocks">
                <port-stock :stock="stock"/>
            </div>
        </div>
    </div>
</template>

<script>
    import PortStock from "./PortStock.vue";
    export default {
        components:{
            'port-stock': PortStock,
        },
        computed:{
            stocks() {
                console.log("COMPUTED");
                return this.$store.getters.stocksPortfolio;
            }
        },
    }
</script>

<style>
    .portfolio {
        margin-bottom: 10px;
    }
    .stock {
        cursor: pointer;
    }
    .stock:hover{
        background-color: #26ff12;
    }
</style>