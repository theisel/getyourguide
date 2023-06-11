import { GetYourGuideWidget } from "./wc";

export {};

customElements.get("gyg-wc") || customElements.define("gyg-wc", GetYourGuideWidget);
