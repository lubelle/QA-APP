import { QuestionAnswers } from './interfaces';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class QaService {
    assetUrl = './assets/qa.json';
    // assetUrl = './assets/bad-rul.json'; // use this line instead to generate an error
    constructor(private _http: HttpClient) {}
    private handleError(operation: string, url: string) {
        return (err: any) => {
            const errMsg = `error in ${operation}() retriving ${url}`;
            if (err instanceof HttpErrorResponse) {
                console.log(`status: ${err.status}, ${err.statusText}`);
            }
            return observableThrowError(errMsg);
        };
    }
    // public API
    getQuestionAnswers(): Observable<QuestionAnswers> {
        // HttpClient.get() returns the body of the response as an untyped JSON object
        // by default.
        // We specify the type as QuestionAnswers to get a typed result.
        return this._http.get<QuestionAnswers>(this.assetUrl)
        .pipe(
            tap(data => console.log('server data:', data)),
            catchError(this.handleError('getQuestionAnswers', this.assetUrl))
        );
    }
}
