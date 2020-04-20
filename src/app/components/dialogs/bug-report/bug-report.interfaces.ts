import {BugReport} from './bug-report.class';
import {Observable} from 'rxjs';

export interface BugReportTarget {
    [key: string]: any,
    toString: () => string
}

export interface BugReportTargetService {
    publishIssue: (bugReport: BugReport, targetKey: string) => Observable<string | null>,
    targets: {[key: string]: BugReportTarget};
}
