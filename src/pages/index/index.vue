<template>
    <div id="index">
        <div class="wrapper">
            <v-header></v-header>
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Vheader from "./components/header/header";
import Vfooter from "./components/footer/footer";

export default {
    name: "index",
    components: {
        "v-header": Vheader,
        "v-footer": Vfooter
    }
};
</script>

<style lang="scss">
// @import '../../common/css/reset.scss';
    .wrapper {
        min-height: calc(100vh - 175px);
    }
</style>
