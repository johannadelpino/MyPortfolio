import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project/project.service';
import { Project } from './../../services/project/project.model';

@Component({
    selector: 'home',
    templateUrl: 'project-list.component.html'
 })
 
export class ProjectListComponent implements OnInit {
    projects: Project[];

    constructor(private projectService: ProjectService){}

    ngOnInit():void{
        this.getProjects();
    }
    getProjects():void{
        this.projectService.getProjects().then(projects => this.projects = projects);
    }
    closeDescription(event):void{
        if(event.target.parentElement.style.height=="100%"){
            event.target.parentElement.style.height="45px";
        }
        event.preventDefault();
    }
    openDescription(event,id):void{
        document.getElementById(id).style.height="100%";
        event.preventDefault();
    }   
}