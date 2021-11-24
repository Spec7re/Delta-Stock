<template>
        <div class="container">
            <!--Main Scaffolding-->
            <navbar/>

            <router-view/>
        </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';

    export default {
        components:{
            'navbar' : Navbar,
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>

</style>
