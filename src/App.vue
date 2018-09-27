<template>
    <div id="app">
        <div>
            <h3>Props Test Buttons</h3>
            <button @click="changeProp">changeProp</button>
        </div>
        <div>
            <h3>Function Test Buttons</h3>
            <button v-for="method in methodNames" :key="method" @click="methodInvoke(method)">
                {{ method }}
            </button>
            <p>Function Result : {{ message }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            message: '',
            methodNames: [
                'method'
            ]
        };
    },
    methods: {
        changeProp() {
            // change prop
        },
        methodInvoke(methodName) {
            // this.message = this.$refs.{something}.invoke(methodName);
        }
    }
};
</script>
