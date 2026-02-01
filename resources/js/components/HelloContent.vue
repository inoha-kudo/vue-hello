<script setup lang="ts">
defineProps<{
    message: string;
}>();
</script>

<template>
    <h1>Hello, {{ message }}!</h1>
</template>
