/**
 * Parse a URL and return an object with the following properties:
 * - `isGetYourGuideUrl`: true if the URL is a GetYourGuide URL
 * - `isLocationUrl`: true if the URL is a GetYourGuide location URL
 * - `locationId`: the location ID if the URL is a GetYourGuide location URL
 * - `isTourUrl`: true if the URL is a GetYourGuide tour URL
 * - `tourId`: the tour ID if the URL is a GetYourGuide tour URL
 * - `url`: the URL object
 *
 * @param url the URL to parse
 * @returns the parsed URL object
 */
export function parseUrl(url: URL | string) {
  try {
    const urlInst = new URL(url);
    const isGetYourGuideUrl = urlInst.hostname.indexOf("getyourguide.com") >= 0;

    return {
      isGetYourGuideUrl: isGetYourGuideUrl,
      isLocationUrl: isGetYourGuideUrl && /-l\d+/.test(urlInst.pathname),
      locationId: isGetYourGuideUrl ? (urlInst.pathname.match(/-l(\d+)/) ?? []).pop() : null,
      isTourUrl: isGetYourGuideUrl && /-t\d+/.test(urlInst.pathname),
      tourId: isGetYourGuideUrl ? (urlInst.pathname.match(/-t(\d+)/) ?? []).pop() : null,
      url: urlInst,
    };
  } catch (err) {
    return null;
  }
}
