import {BugReport} from './bug-report.class';
import {Observable} from 'rxjs';

export interface BugReportDialogData {
    report: BugReport,
    targetService: BugReportTargetService,
    targetKey: string,
    config: any
}

export interface BugReportTargetService {
    publishIssue: (bugReport: BugReport, targetKey: string) => Observable<string | null>,
    targets: {[key: string]: BugReportTarget};
}

export interface BugReportTarget {
    [key: string]: any,
    toString: () => string
}
