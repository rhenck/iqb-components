// export interface BugReport {
//     title: string;
//     internalText: string;
//     errorIdentifier?: string;
//     comment?: string;
//     reporterName?: string;
//     reporterEmail?: string;
//     date?: Date;
//     product?: string;
//     version?: string;
//     repository?: string;
//     url?: string
// }

export interface GitHubIssue {
    title: string;
    body: string;
    labels: string[];
}

export interface GitHubRepository {
    owner: string;
    name: string;
}

export interface GitHubData {
    repositoryUrls: {[key: string]: string},
    user: string,
    token: string
}
