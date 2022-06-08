<template>
    <span class="text-danger" v-if="errors.city_id">
        {{errors.city_id[0]}}
    </span>
</template>

<script>
    export default {
        props: ['errors'],
    }
</script>