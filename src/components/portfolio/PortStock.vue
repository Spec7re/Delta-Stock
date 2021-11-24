<template>
    <div>
        <div class="card">
            <div  class="card-header bg-primary" :id="index">{{ stock.name }} <span style="font-size: 12px;">(  Quantity {{ stock.quantity }} | Price: {{ stock.price }} )</span></div>
            <div class="card-body stock">
                <label>
                    <input  v-model="quantity" class="form-control" placeholder="Quantity" type="number">
                </label>
                <a href="" @click.prevent="sell" class="btn btn-info float-right">SELL</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data(){
          return {
              quantity: 0,
          }
        },
        methods: {
          sell() {
              //TODO sell stocks
          }
        }
    }
</script>