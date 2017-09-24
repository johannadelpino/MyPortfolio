var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ;
    ProjectService.prototype.getProjects = function () {
        return this.http.get('http://localhost:8080/projects')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ProjectService);
export { ProjectService };
//# sourceMappingURL=project.service.js.map