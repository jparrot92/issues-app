import { useQuery } from '@tanstack/vue-query';

import { githubApi } from '../../api/githubApi';

import { Issue } from '../models/issue';

const getIssue = async (issueNumber: number): Promise<Issue> => {
    const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
    return data;
};

const useIssue = (issueNumber: number) => {
    const issueQuery = useQuery(
        ['issue', issueNumber],
        () => getIssue(issueNumber),
        {
            staleTime: 1000 * 60
        }
    );

    return { issueQuery };
};

export default useIssue;
