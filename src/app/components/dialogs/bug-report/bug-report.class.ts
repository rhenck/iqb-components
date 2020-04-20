import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

export class BugReport {
    title: string;
    internalText: string;
    errorIdentifier?: string;
    comment?: string;
    reporterName?: string;
    reporterEmail?: string;
    date?: Date;
    product?: string;
    version?: string;
    repository?: string;
    url?: string

    constructor(
        {
            title,
            internalText,
            errorIdentifier = "",
            comment =
                "## Was haben Sie gemacht\n## Was sollte passieren?\n## Was ist stattdessen passiert?",
            reporterName = 'anonymous',
            reporterEmail = "",
            date = new Date(),
            product = platformBrowserDynamic().injector.get("APP_NAME", '0.0.0'),
            version = platformBrowserDynamic().injector.get("APP_VERSION", 'app'),
            repository = "main",
            url = window.location.href
        }
    ) {

        this.title = title;
        this.internalText = internalText;
        this.errorIdentifier = errorIdentifier;
        this.comment = comment;
        this.reporterName = reporterName;
        this.reporterEmail = reporterEmail;
        this.date = date;
        this.product = product;
        this.version = version;
        this.url = url;
    }

    static fromJsError(error: Error): BugReport {

        return new BugReport({
            title: error.name + ": " + error.message,
            internalText: error.stack.toString()
        });
    }

    totext() {

        return `# ${this.title}\n`
            + `Product: \`${this.product}\`\n`
            + `Version : \`${this.version}\`\n`
            + `URL: \`${this.url}\` \n`
            + `Date: \`${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}\`\n`
            + `\nReported by: \`${this.reporterName}<${this.reporterEmail}>\n`
            + (this.errorIdentifier ? `error-id: \`${this.errorIdentifier}\`\n` : '')
            + `\n# Description\n${this.comment}\n`
            + `\n# Error source code:\n\`\`\`\n${this.internalText}\n\`\`\`\n`;
    }
}
