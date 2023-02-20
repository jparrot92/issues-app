<script setup lang="ts">
import { useRoute } from 'vue-router'
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';

const route = useRoute()
const { id } = route.params

</script>

<template>
    <LoaderSpinner color="white" />

    <route-link class="text-white" to="/">Go Back</route-link>

    <!-- Header -->
    <IssueCard />

    <!-- Comentarios -->
    <LoaderSpinner :thickness="1" size="1.5rem" :show-test="false"/>

    <div class="column">
        <span class="text-h3 q-mb-md">Comments (5)</span>
        <IssueCard v-for="comment of 5" :key="comment" />
    </div>

</template>

<style scoped>

</style>