export {};

if (!customElements.get("getyourguide-activity")) {
  import("./wc-activity");
}

if (!customElements.get("getyourguide-city")) {
  import("./wc-city");
}
