<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue'
import useLabels from 'src/issues/composables/useLabel'

const { labelsQuery } = useLabels()

</script>

<template>
    <div class="q-mt-md">
        <LoaderSpinner v-if="labelsQuery.isLoading.value" size="50px" :thickness="1" :show-test="false"/>

        <q-chip v-else v-for="label of labelsQuery.data.value" :key="label.id" :style="{color: `#${label.color}`}" outline clickable>
            {{ label.name }}
        </q-chip>
    </div>
</template>

<style scoped>

</style>