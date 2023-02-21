<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue'
import useLabels from 'src/issues/composables/useLabel'

const { labelsQuery } = useLabels()

</script>

<template>
    <div class="q-mt-md">
        <LoaderSpinner size="50px" :thickness="1" :show-test="false"/>

        <q-chip v-for="label of 10" :key="label" color="primary" outline clickable>
            Algun nombre
        </q-chip>
    </div>
</template>

<style scoped>

</style>