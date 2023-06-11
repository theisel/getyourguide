import { GetYourGuide } from "./wc";

export {};

customElements.get("gyg-wc") || customElements.define("gyg-wc", GetYourGuide);
