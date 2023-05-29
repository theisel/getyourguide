import { GetYourGuideWidget } from "./wc";

export {};

customElements.get("gyg-widget") || customElements.define("gyg-widget", GetYourGuideWidget);
