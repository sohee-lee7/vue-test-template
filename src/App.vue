<template>
    <div id="app">
        <p>
            <router-link to="/bar">Bar</router-link>
            <router-link to="/column">Column</router-link>
            <router-link to="/line">line</router-link>
            <router-link to="/area">area</router-link>
            <router-link to="/bubble">bubble</router-link>
            <router-link to="/scatter">scatter</router-link>
            <router-link to="/pie">pie</router-link>
            <router-link to="/combo">combo</router-link>
            <router-link to="/mapsouthkorea">mapsouthkorea</router-link>
            <router-link to="/mapcustom">mapcustom</router-link>
            <router-link to="/heatmap">heatmap</router-link>
            <router-link to="/treemap">treemap</router-link>
            <router-link to="/radial">radial</router-link>
            <router-link to="/boxplot">boxplot</router-link>
            <router-link to="/bullet">bullet</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'App'
};
</script>
