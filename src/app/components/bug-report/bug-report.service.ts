import {Inject, Injectable} from '@angular/core';
import {BugReport} from './bug-report.interfaces';

@Injectable()
export class BugReportService {

    constructor(
        @Inject('APP_NAME') private appName: string,
        @Inject('APP_VERSION') private appVersion: string
    ) {

    }

    create(initData: {
        devInfo: string;
        title?: string;
        comment?: string;
        errorId?: string;
        reporterName?: string;
        reporterEmail?: string;
        date?: Date;
        url?: string,
        product?: string;
        version?: string;
        userAgent?: string;
    }): BugReport {

        return {
            devInfo: initData.devInfo,

            title: initData.title || '',
            comment: initData.comment ||
                "## Was haben Sie gemacht\n\n" +
                "## Was sollte passieren?\n\n" +
                "## Was ist stattdessen passiert?",

            errorId: initData.errorId || '',

            reporterName: initData.reporterName || 'anonymous',
            reporterEmail: initData.reporterEmail || '',

            date: initData.date || new Date(),
            url: initData.url || window.location.href,
            userAgent: initData.url || window.navigator.userAgent,

            version: initData.version || this.appVersion || '0.0.0',
            product: initData.product || this.appName || 'app',

        }
    }

    createFromJsError(error: Error): BugReport {

        return this.create(
            {
                title: error.name + ": " + error.message,
                devInfo: error.stack.toString()
            }
        );
    }

    toText(report: BugReport): string {

        return `# ${report.title}\n`
            + `Product: \`${report.product}\`\n`
            + `Version : \`${report.version}\`\n`
            + `URL: \`${report.url}\` \n`
            + `Date: \`${report.date.toLocaleDateString()} ${report.date.toLocaleTimeString()}\`\n`
            + `UserAgent \`${report.userAgent}\`\n`
            + `\nReported by: \`${report.reporterName}<${report.reporterEmail}>\n`
            + (report.errorId ? `error-id: \`${report.errorId}\`\n` : '')
            + `\n# Description\n${report.comment}\n`
            + `\n# Error source code:\n\`\`\`\n${report.devInfo}\n\`\`\`\n`;
    }
}
