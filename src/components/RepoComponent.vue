<script setup lang="ts">
defineProps<{ repoName: string , forkLink: string, gitLink: string, forkNumber: number}>()

</script>

<template>
    <div>
        <h2> {{ repoName }}</h2>
        <br>
        <p> {{ forkLink }} </p>
        <span> | </span>
        <p> {{ gitLink }} </p>
        <span> {{ forkNumber }} </span>
    </div>
</template>

<style scoped>
</style>