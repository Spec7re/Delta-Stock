<template>
    <div style="margin-top: 40px;">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header bg-primary">PROFILE</div>
                    <div class="card-body stock">
                        <p>TRADE or PLAN in portfolio</p>
                        <p>You may by insurance to secure your investments!</p>
                        <p>Or hold position for a day!</p>
                        <hr>
                        <h3>Your funds: ${{ cash }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       computed: {
           cash(){
               return this.$store.getters.cash;
           }
       }
    }
</script>

<style>
    .stock {
        cursor: pointer;
    }
    .stock:hover{
        background-color: #4be83c;
    }
</style>