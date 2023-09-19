<template>
    <Head :title="page.title" />
    <h1>{{page.title}}</h1>
    <div v-html="page.content"></div>
</template>

<script>
import {Link, Head} from '@inertiajs/vue3'
export default {
    name: "Page",
    props: [
       'page'
    ],
    components: {
        Link,
        Head
    }
}
</script>

<style scoped>

</style>
