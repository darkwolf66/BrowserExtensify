import {RouteRequirementInterface} from "./RouteRequirement";

const wildcard = require('wildcard');

interface RouteInterface {
    exec():void;
    checkRequirements();
    isActive();
}

/**
 * Route is the class that is used to be extended to create routes
 * It requires to add the routes urlRoutes:string so the Router can run when the url is valid
 */
export class Route implements RouteInterface{
    urlWildcards: string[]
    requirements: RouteRequirementInterface[]
    constructor(urlWildcards: string[], requirements: RouteRequirementInterface[] = []) {
        this.urlWildcards = urlWildcards;
        this.requirements = requirements;
    }
    exec() {}
    isActive():boolean {
        for (let i in this.urlWildcards){
            if(wildcard(this.urlWildcards[i], window.location.href)){
                return true;
            }
        }
        return false;
    }
    checkRequirements() {
        for (let i in this.requirements){
            if(!this.requirements[i].checkRequirement()){
                return false;
            }
        }
        return true;
    }
}