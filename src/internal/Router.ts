import {Route} from "./Route";
export class Router {
    private readonly routes: Array<Route>;
    constructor(routes: Array<Route>) {
        this.routes = routes;
    }
    executeRoutes(){
        for (let i in this.routes){
            if(this.routes[i].isActive() && this.routes[i].checkRequirements()){
                this.routes[i].exec()
            }
        }
    }
}