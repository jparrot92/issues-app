<script setup lang="ts">
import { ref } from 'vue';

import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/issues/components/issue-list/IssueList.vue';
import FloatingButtons from 'src/issues/components/FloatingButtons.vue';
import NewIssueDialog from 'src/issues/components/NewIssueDialog.vue';

import useIssues from '../composables/useIssues';
import useLabels from '../composables/useLabel';

const { issuesQuery } = useIssues();
const { labelsQuery } = useLabels();

const isOpen = ref<boolean>(false);

const openDialog = () => {
    isOpen.value = true;
};
</script>

<template>
    <div class="row q-mb-md">
        <div class="col-12">
            <span class="text-h4">GitHub Issues</span>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-4">
            <!-- TODO: Filtros -->
            <FilterSelector />
        </div>

        <div class="col-xs-12 col-md-8">
            <!-- TODO: Loader -->
            <LoaderSpinner v-if="issuesQuery.isLoading.value" color="white" />

            <IssueList v-else :issues="issuesQuery.data?.value || []" />
        </div>
    </div>

    <!-- FloatingButtons -->
    <FloatingButtons
        :buttons="[
            {
                icon: 'add',
                color: 'primary',
                size: 'lg',
                action: openDialog
            }
        ]"
    />

    <!-- Dialogo de New Issue -->
    <NewIssueDialog
        :is-open="isOpen"
        v-if="labelsQuery.data"
        :labels="labelsQuery.data.value?.map((label) => label.name) || []"
        @on-close="isOpen = false"
    />
</template>

<style scoped></style>
