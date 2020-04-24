import {Inject, Injectable} from '@angular/core';

interface BugReportData {
    title: string;
    devInfo: string;
    comment?: string;
    errorId?: string;
    reporterName?: string;
    reporterEmail?: string;
    date?: Date;
    product?: string;
    version?: string;
    url?: string
}

@Injectable()
export class BugReport implements BugReportData {

    public title = "";
    public devInfo = "";
    public errorId = "";
    public comment = "";
    public reporterName = "";
    public reporterEmail = "";
    public date: Date;
    public product = "";
    public version = "";
    public url = "";

    constructor(
        initData: BugReportData,
        @Inject('APP_NAME') appName: string,
        @Inject('APP_VERSION') appVersion: string, // STAND funktioniert so leider nisch
    ) {

        this.title = initData.title;
        this.devInfo = initData.devInfo;
        this.errorId = initData.errorId;
        this.comment = initData.comment || "## Was haben Sie gemacht\n## Was sollte passieren?\n## Was ist stattdessen passiert?";
        this.reporterName = initData.reporterName || 'anonymous';
        this.reporterEmail = initData.reporterEmail;
        this.date = initData.date || new Date();
        this.product = initData.product || appName || 'app';
        this.version = initData.version || appVersion || '0.0.0';
        this.url = initData.url || window.location.href;
        console.log("XCX", initData.product , appName);
    }

    // static fromJsError(error: Error): BugReport {
    //
    //     return new BugReport(
    //         {
    //             title: error.name + ": " + error.message,
    //             devInfo: error.stack.toString()
    //         },
    //         appName
    //     );
    // }

    public toText() {

        return `# ${this.title}\n`
            + `Product: \`${this.product}\`\n`
            + `Version : \`${this.version}\`\n`
            + `URL: \`${this.url}\` \n`
            + `Date: \`${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}\`\n`
            + `\nReported by: \`${this.reporterName}<${this.reporterEmail}>\n`
            + (this.errorId ? `error-id: \`${this.errorId}\`\n` : '')
            + `\n# Description\n${this.comment}\n`
            + `\n# Error source code:\n\`\`\`\n${this.devInfo}\n\`\`\`\n`;
    }
}
