import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './mock-project';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ProjectService {
    constructor(private http: Http){};

    getProjects(): Promise<Project[]> {
        return this.http.get('http://localhost:8080/projects')
        .toPromise()
        .then( response => response.json() as Project[])
        .catch(this.handleError);
    }
    handleError(error:any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}