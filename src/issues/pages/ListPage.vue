<script setup lang="ts">
import { ref } from 'vue';

import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/issues/components/issue-list/IssueList.vue';
import FloatingButtons from 'src/issues/components/FloatingButtons.vue';
import NewIssueDialog from 'src/issues/components/NewIssueDialog.vue';

import useIssues from '../composables/useIssues';

const { issuesQuery } = useIssues();

const listPageClickTemp1 = () => {
    console.log('listPageClickTemp 1');
};

const listPageClickTemp2 = () => {
    console.log('listPageClickTemp 2');
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
                action: listPageClickTemp1
            }
        ]"
    />

    <!-- Dialogo de New Issue -->
    <NewIssueDialog />
</template>

<style scoped></style>
