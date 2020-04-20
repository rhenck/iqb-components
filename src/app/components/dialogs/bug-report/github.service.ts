import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {GitHubData, GitHubIssue, GitHubRepository} from './bug-report.interfaces';

@Injectable()
export class GitHubService {

    private readonly user: string;
    private readonly token: string;
    public readonly repositories: GitHubRepository[];

    constructor(
        @Inject('GITHUB_DATA') gitHubData: GitHubData,
        private http: HttpClient
    ) {

        this.user = gitHubData.user;
        this.token = gitHubData.token;
        this.repositories = [];

        console.log(gitHubData, this.repositories);

        Object.keys(gitHubData.repositoryUrls).forEach((key: string) => {

            const repositoryUrl = gitHubData.repositoryUrls[key];
            const match = /github\.com\/([\w-]+)\/([\w-]+)/gm.exec(repositoryUrl);
            console.log(match);

            if (match.length) {
                this.repositories[key] = ({
                    owner: match[1],
                    name: match[2]
                });
            }
        });

        console.log(gitHubData, this.repositories);
    }


    //https://github.com/paflov/demo
    publishIssue(gitHubIssue: GitHubIssue, repositoryKey: string = 'main'): Observable<string|null> {

        const repository = this.repositories[repositoryKey];
        if (typeof repository === "undefined") {
            console.error(`No repository '${repositoryKey}' defined.`);
            return of(null);
        }

        const url = `https://api.github.com/repos/${repository.owner}/${repository.name}/issues`;
        const headers = new HttpHeaders({
            Authorization: 'Basic ' + btoa(this.user + ':' + this.token)
        });

        return this.http.post(url, gitHubIssue, {headers})
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
