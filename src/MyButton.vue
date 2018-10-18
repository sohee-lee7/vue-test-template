
<template>
    <button>{{title}}</button>
</template>
<script>
export default {
    name:'my-button',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>