export interface BugReport {
    internalText: string;
    errorIdentifier?: string;
    comment?: string;
    reporterName?: string;
    reporterEmail?: string;
    date?: number;
    product?: string;
    version?: string;
    repository?: string;
    server?: string
}

export interface GitHubIssue {
    title: string;
    body: string;
    labels: string[];
}

export interface GitHubRepository {
    owner: string;
    name: string;
    url: string;
}
