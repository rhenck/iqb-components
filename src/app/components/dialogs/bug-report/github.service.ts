import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BugReportTarget, BugReportTargetService } from './bug-report.interfaces';
import {BugReport} from './bug-report.class';

export interface GitHubData {
    repositoryUrls: {[key: string]: string},
    user: string,
    token: string
}

export class GitHubRepository implements BugReportTarget {
    owner: string;
    name: string;
}

@Injectable()
export class GitHubService implements BugReportTargetService {

    private readonly user: string;
    private readonly token: string;
    public readonly targets: {[key: string]: GitHubRepository} = {};

    constructor(
        @Inject('GITHUB_DATA') gitHubData: GitHubData,
        private http: HttpClient
    ) {

        this.user = gitHubData.user;
        this.token = gitHubData.token;

        console.log(gitHubData, this.targets);

        Object.keys(gitHubData.repositoryUrls).forEach((key: string) => {

            const repositoryUrl = gitHubData.repositoryUrls[key];
            const match = /github\.com\/([\w-]+)\/([\w-]+)/gm.exec(repositoryUrl);
            console.log(match);

            if (match.length) {
                this.targets[key] = ({
                    owner: match[1],
                    name: match[2]
                });
            }
        });

        console.log(gitHubData, this.targets);
    }


    publishIssue(bugReport: BugReport, repositoryKey: string = 'main'): Observable<string|null> {

        const repository = this.targets[repositoryKey];
        if (typeof repository === "undefined") {
            console.error(`No repository '${repositoryKey}' defined.`);
            return of(null);
        }

        const url = `https://api.github.com/repos/${repository.owner}/${repository.name}/issues`;

        const body = {
            title: bugReport.title,
            body: bugReport.toText(),
            labels: ['BugReport']
        }

        const headers = new HttpHeaders({
            Authorization: 'Basic ' + btoa(this.user + ':' + this.token)
        });

        return this.http.post(url, body, {headers})
            .pipe(catchError((error: HttpErrorResponse): Observable<boolean> => {
                console.error(`Error when reporting issue to GitHub (${repository}).`, error);
                return of(false);
            }))
            .pipe(map((data:object): string|null => {
                if (data) {
                    return data['url'];
                } else {
                    return null;
                }
            }));
    }

}
