import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { GitHubIssue, GitHubRepository } from './report-error.interfaces';

@Injectable()
export class GitHubService {

    token4 = "3f2614163a12eddc7ea0521a41993ad3577e5e37";

    constructor(
        @Inject('APP_REPOSITORY') private readonly serverUrl: string,
        private http: HttpClient
    ) {

    }

    //https://github.com/paflov/demo
    publishIssue(gitHubRepository: GitHubRepository, gitHubIssue: GitHubIssue): Observable<string|null> {

        const url = `https://api.github.com/repos/${gitHubRepository.owner}d/${gitHubRepository.name}/issues`;
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('paflov' + ':' + this.token4)});

        return this.http.post(url, gitHubIssue, {headers})
            .pipe(catchError((error: HttpErrorResponse): Observable<boolean> => {
                console.error('Error when reporting issue to GitHub', error, gitHubRepository);
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
