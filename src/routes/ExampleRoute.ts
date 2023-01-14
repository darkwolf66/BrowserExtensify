import {Route} from "../internal/Route";

export class ExampleRoute extends Route {
    exec() {
        console.log("I'm on https://google.com")
    }
}