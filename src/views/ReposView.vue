<script setup lang="ts">

import RepoComponent from '../components/repOComponent.vue'
import useReposStore from '../stores/ReposStore';

const reposStore = useReposStore()

//const userName = route.params.userName as string

</script>

<template>
<h1>du har kommit rätt!!!!</h1>
<!-- <p>{{  route.params.userName }}</p> -->
<ul>
    <template v-for="repo in reposStore.all">
        <RepoComponent :repoName=repo.repoName :gitLink=repo.repoLink :forkLink=repo.forkLink :forkNumber=repo.forkNumber ></RepoComponent>
    </template>
</ul>
</template>

<style scoped>
</style>