<template>
    <div id="app">
        <grid
        ref="tuiGrid"
        :rowData="rowData"
        :columnData="columnData"
        :options="options"
        :theme="customTheme"
        :language="customLanguage"
        @click="onClick"
        @check="onCheck"
        @uncheck="onUnCheck"
        @dblclick="onDblClick"
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
        @mousedown="onMouseDown"
        @focusChange="onFocusChange"
        @expanded="onExpanded"
        @expandedAll="onExpandedAll"
        @collapsed="onCollapsed"
        @collapsedAll="onCollapsedAll"
        @beforeRequest="onBeforeRequest"
        @response="onResponse"
        @successResponse="onSuccessResponse"
        @failResponse="onFailResponse"
        @errorResponse="onErrorResponse"
        @selection="onSelection"
        @deleteRange="onDeleteRange"
        />
        <div>
            <h3>Props Test Buttons</h3>
            <button @click="changeRowData1">changeRowData1</button>
            <button @click="changeRowData2">changeRowData2</button>
            <button @click="changeRowData3">changeRowData3</button>
            <button @click="changeColumns1">changeColumns1</button>
            <button @click="changeColumns2">changeColumns2</button>
            <button @click="changeColumns3">changeColumns3</button>
        </div>
        <div>
            <h3>Function Test Buttons</h3>
            <button v-for="method in methodNames" :key="method.name" @click="methodInvoke(method)">
                {{ method.name }}
            </button>
            <button @click="getRootElement">getRootElement</button>
            <p>Function Result : {{ message }}</p>
        </div>
    </div>
</template>
<script>
import 'tui-grid/dist/tui-grid.css';
import { Grid } from '@toast-ui/vue-grid';
import * as dummy from './dummy.js';

export default {
    name: 'App',
    components: {
        'grid': Grid
    },
    data() {
        return {
            message: '',
            methodNames: [{
                name: 'getRow',
                args: [1]
            }, {
                name: 'getFocusedCell',
                args: []
            }, {
                name: 'setData',
                args: [[], () => {
                    console.log('after SetData')
                }]
            }, {
                name: 'setWidth',
                args: [500]
            }, {
                name: 'setHeight',
                args: [500]
            }],
            rowData: dummy.rowsSimple,
            columnData: dummy.columnsSimple,
            options: dummy.options,
            customTheme: {
                name: 'custom',
                value: dummy.theme
            },
            customLanguage: {
                name: 'custom',
                value: dummy.language
            }
        };
    },
    methods: {
        changeRowData1() {
            this.rowData.splice(0,5);
        },
        changeRowData2() {
            this.rowData.push({
                id: 11111,
                name: 'ggg',
                artist: 'gggg',
                release: '2015.03.23',
                type: 'EP',
                typeCode: '2',
                genre: 'Pop,Rock',
                genreCode: '1,2',
                grade: '5',
                price: 12000,
                downloadCount: 1000,
                listenCount: 5000
            });
        },
        changeRowData3() {
            this.rowData = [{
                id: 22222,
                name: 'rrrr',
                artist: 'qqqq',
                release: '2015.03.23',
                type: 'EP',
                typeCode: '2',
                genre: 'Pop,Rock',
                genreCode: '1,2',
                grade: '5',
                price: 12000,
                downloadCount: 1000,
                listenCount: 5000
            }];
        },
        changeColumns1() {
            this.columnData.splice(0,1);
        },
        changeColumns2() {
            this.columnData.push({
                title: 'isNew',
                name: 'new'
            });
        },
        changeColumns3() {
            this.columnData.pop();
        },
        getRootElement() {
            const result = this.$refs.tuiGrid.getRootElement();
        },
        methodInvoke(method) {
            this.message = this.$refs.tuiGrid.invoke(method.name, ...method.args);
        },
        onClick(e) {
            console.log('onClick');
            console.dir(e);
        },
        onCheck(e) {
            console.log('onDblClick');
            console.dir(e);
        },
        onUnCheck(e) {
            console.log('onUnCheck');
            console.dir(e);
        },
        onDblClick(e) {
            console.log('onDblClick');
            console.dir(e);
        },
        onMouseOver(e) {
            console.log('onMouseOver');
            console.dir(e);
        },
        onMouseOut(e) {
            console.log('onMouseOut');
            console.dir(e);
        },
        onMouseDown(e) {
            console.log('onMouseDown');
            console.dir(e);
        },
        onFocusChange(e) {
            console.log('onFocusChange');
            console.dir(e)
        },
        onExpanded(e) {
            console.log('onExpanded');
            console.dir(e);
        },
        onExpandedAll() {
            console.log('onExpandedAll');
        },
        onCollapsed(e) {
            console.log('onCollapsed');
            console.dir(e);
        },
        onCollapsedAll() {
            console.log('onCollapsedAll');
        },
        onBeforeRequest(e) {
            console.log('onBeforeRequest');
        },
        onResponse(e) {
            console.log('onResponse');
        },
        onSuccessResponse(e) {
            console.log('onSuccessResponse');
        },
        onFailResponse(e) {
            console.log('onFailResponse');
        },
        onErrorResponse(e) {
            console.log('onFailResponse');
        },
        onSelection(e) {
            console.log('onSelection');
            console.dir(e);
        },
        onDeleteRange(e) {
            console.log('onDeleteRange');
            console.dir(e);
        }
    }
};
</script>
