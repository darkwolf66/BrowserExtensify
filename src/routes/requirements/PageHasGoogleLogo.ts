import {RouteRequirementInterface} from "../../internal/RouteRequirement";

export class PageHasGoogleLogo implements RouteRequirementInterface{
    checkRequirement() {
        return !!document.querySelector('img[alt="Google"]');
    }
}