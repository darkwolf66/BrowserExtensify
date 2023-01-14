import {ExampleRoute} from "./ExampleRoute";
import {PageHasGoogleLogo} from "./requirements/PageHasGoogleLogo";
import {Route} from "../internal/Route";

export let routes : Array<Route> = [
    new ExampleRoute(
        [
            "https://*.google.com.br/*",
            "https://*.google.com/*",
            "https://google.com.br/*",
            "https://google.com/*"
        ],
        [
            new PageHasGoogleLogo()
        ]
    )
];
