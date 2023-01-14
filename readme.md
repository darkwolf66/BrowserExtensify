# BrowserExtensify

### The first framework for multi browser extensions.


## BE CAREFUL: Currently NOT FUNCTIONAL, development in progress...

## Supported Browsers

[x] Chrome
[x] Firefox
[ ] Safari
[ ] Greasymonkey
[ ] Tampermonkey

Planned to be launched with Chrome and Firefox support only on the first version.

## Documentation

### Routes

Routes are coded content scripts who get executed on pages either by url wildcards or Route Requirements.

#### URL Wildcards

Url wildcards looks almost the same as a content script wildcard for matching the pages where the script is going to be executed. The difference is that instead of having to load hundreds of content scripts we centralize all activities throat out routes.

Wildcards can be registered while creating a route, refer to [Guide for Routing] to understand how to use it.

#### Route Requirements

Here is one of the biggest reasons of having the routes, routes allow you to define coding conditions or better calling, having requirements to execute the route script. This coding conditions can be defined with a `RouteRequirement` implementation. Refer to [Guide for Routing] to find how to create your first RouteRequirement.

#### Guide for Routing

##### Registering a Route:

1. Execute `browser-extensify-cli make:route YourRoute`
2. Open the `src/routes/RegisterRoutes`
3. Register the new route you just created, with 2 parameters, first is the url wildcard who is required and second are the route requirements(Know more about route requirements on the [Route Requirements] section, or on [Creating a Route Requirement].

```
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
```

##### Creating a Route Requirement:

1. Execute `browser-extensify-cli make:route-requirement YourRouteRequirement`
2. Edit your `src/routes/requirements/YourRouteRequirement`
3. Register on the routes you want as the second parameter

## Packing things up

To build the extensions you can simply run:

`browser-extensify-cli build`

And the command will do all the work for you!
You can get the extension folders on `dist` folder


## Tips

1. Keep the folder structure for being able to update to newer versions of BrowserExtensify without much trouble.
2. Try to follow the single responsibility principle when creating routes and route requirements
3. The browser-extensify-cli was build to work on the current folder structure you have here, if you start messing up with folders and changing things it may stop working. So keep it clean and follow the structure here stablished.

## Issues, Requests, Ideas and Bugs

Any help, request, ideas or bug problems please report over https://github.com/darkwolf66/BrowserExtensifyCLI/issues explaining with details what you're experiencing.

## Author

##### [darkwolf66](https://github.com/darkwolf66)

## License

Mozilla Public License 2.0
