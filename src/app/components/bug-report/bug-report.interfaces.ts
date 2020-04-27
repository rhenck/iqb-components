import {Observable} from 'rxjs';

export interface BugReport {
    title: string;
    devInfo: string;
    comment: string;
    errorId: string;
    reporterName: string;
    reporterEmail: string;
    date: Date;
    product: string;
    version: string;
    url: string,
}

export interface BugReportDialogConfig {

    hideFields: ['title' | 'reporterEmail' | 'reporterName' | 'comment']
}

export interface BugReportDialogData {
    report: BugReport,
    targetService: BugReportTargetService,
    targetKey: string,
    config: BugReportDialogConfig
}

export interface BugReportTargetService {
    getTargetName: (targetKey: string) => string,
    publishIssue: (bugReport: BugReport, targetKey: string) => Observable<BugReportResult>,
    targets: {[key: string]: BugReportTarget};
}

export interface BugReportTarget {
    [key: string]: any,
    toString: () => string
}

export interface BugReportResult {
    uri?: string,
    message: string,
    success: boolean,
}
