import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Bar from './Bar.vue';
import Column from './Column.vue';
import Line from './Line.vue';
import Area from './Area.vue';
import Bubble from './Bubble.vue';
import Scatter from './Scatter.vue';
import Pie from './Pie.vue';
import Combo from './Combo.vue';
import MapSouthKorea from './MapSouthKorea.vue';
import MapCustom from './MapCustom.vue';
import HeatMap from './HeatMap.vue';
import TreeMap from './TreeMap.vue';
import Radial from './Radial.vue';
import Boxplot from './Boxplot.vue';
import Bullet from './Bullet.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: '/bar', component: Bar},
    { path: '/column', component: Column},
    { path: '/line', component: Line},
    { path: '/area', component: Area},
    { path: '/bubble', component: Bubble},
    { path: '/scatter', component: Scatter},
    { path: '/pie', component: Pie},
    { path: '/combo', component: Combo},
    { path: '/mapsouthkorea', component: MapSouthKorea},
    { path: '/mapcustom', component: MapCustom},
    { path: '/heatmap', component: HeatMap},
    { path: '/treemap', component: TreeMap},
    { path: '/radial', component: Radial},
    { path: '/boxplot', component: Boxplot},
    { path: '/bullet', component: Bullet}
]
const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>',
    router
});
