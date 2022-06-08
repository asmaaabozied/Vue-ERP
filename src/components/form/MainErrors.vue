<template>
<div>
    
    <div v-if="errors">
        <div
            v-for="(error, index) in errors"
            :key="index"
            class="alert alert-danger"
            role="alert"
        >
            {{ error[0] }}
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "main-errors",
    props: {
        errors: {
            type: Object,
            default: {}
        }
    }
};
</script>