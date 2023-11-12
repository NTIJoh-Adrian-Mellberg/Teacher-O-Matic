<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import useReposStore from '../stores/ReposStore';

const reposStore = useReposStore()
const searchBar = ref("")

function searched() {
    const userName : string = searchBar.value
  if (searchBar.value === ""){
    router.push({ name: `repos`})
  } else {
    router.push({ name: 'userRepos', params: { userName: userName } })
    reposStore.fetchRepos(userName)
  }

}
</script>

<template>
    <nav>
      <input type="search" v-model="searchBar" @keydown="e => {if(e.key === 'Enter') {searched()}}">
    </nav>
</template>

<style scoped>
</style>