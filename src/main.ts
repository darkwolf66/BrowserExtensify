import { Router } from "./internal/Router";
import {routes} from "./routes/RegisterRoutes";

class BrowserExtensify {
    private static router: Router;
    static run(){
        console.log("Running BrowserExtensify Extension")
        BrowserExtensify.router = new Router(routes);
        console.log("BrowserExtensify: Executing routes..")
        BrowserExtensify.router.executeRoutes();
    }
}
BrowserExtensify.run()
