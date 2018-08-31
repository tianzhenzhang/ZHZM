<template>
    <div id="app">
        <v-header></v-header>
        <div class="app-content">
            <v-aside></v-aside>
            <router-view class="wrapper"></router-view>
        </div>
    </div>
</template>

<script>
import header from 'components/header'
import aside from 'components/aside'
export default {
    name: 'App',
    components: {
        'v-header': header,
        'v-aside': aside
    }
}
</script>

<style lang="scss">
#app {
    position: relative;
    .app-content {
        width: 100%;
        height: 100%;
        position: relative;
        top: 60px;
        .wrapper {
            min-width: 1115px;
            position: absolute;
            right: 30px;
            left: 270px;
            top: 10px;
            bottom: 50px;
        }
    }
}
</style>
