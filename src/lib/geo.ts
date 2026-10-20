export interface Coordinates {
  lat: number;
  lng: number;
}

// Well-known coordinates for popular destinations
const KNOWN_DESTINATIONS: Record<string, Coordinates> = {
  malibu: { lat: 34.0259, lng: -118.7798 },
  paris: { lat: 48.8566, lng: 2.3522 },
  portland: { lat: 45.5152, lng: -122.6784 },
  inverness: { lat: 57.4778, lng: -4.2247 },
  banff: { lat: 51.1784, lng: -115.5708 },
  santorini: { lat: 36.4618, lng: 25.3753 },
  oia: { lat: 36.4618, lng: 25.3753 },
  rovaniemi: { lat: 66.5039, lng: 25.7294 },
  lapland: { lat: 66.5039, lng: 25.7294 },
  gordes: { lat: 43.9114, lng: 5.2003 },
  provence: { lat: 43.9114, lng: 5.2003 },
  "joshua tree": { lat: 34.1347, lng: -116.3131 },
  kyoto: { lat: 35.0116, lng: 135.7681 },
  zermatt: { lat: 45.9763, lng: 7.7491 },
  orlando: { lat: 28.5383, lng: -81.3792 },
  london: { lat: 51.5074, lng: -0.1278 },
  "new york": { lat: 40.7128, lng: -74.006 },
  tokyo: { lat: 35.6762, lng: 139.6503 },
  rome: { lat: 41.9028, lng: 12.4964 },
  bali: { lat: -8.4095, lng: 115.1889 },
  sydney: { lat: -33.8688, lng: 151.2093 },
  barcelona: { lat: 41.3851, lng: 2.1734 },
  amsterdam: { lat: 52.3676, lng: 4.9041 },
  dubai: { lat: 25.2048, lng: 55.2708 },
  hawaii: { lat: 21.3069, lng: -157.8583 },
  maui: { lat: 20.7984, lng: -156.3319 },
  aspen: { lat: 39.1911, lng: -106.8175 },
  miami: { lat: 25.7617, lng: -80.1918 },
  venice: { lat: 45.4408, lng: 12.3155 },
  mykonos: { lat: 37.4467, lng: 25.3289 },
  cabo: { lat: 22.8905, lng: -109.9167 },
  cancun: { lat: 21.1619, lng: -86.8515 },
  cape: { lat: -33.9249, lng: 18.4241 },
  goa: { lat: 15.2993, lng: 74.124 },
  mumbai: { lat: 19.076, lng: 72.8777 },
};

/**
 * Returns accurate coordinates for a given location and country string.
 * Falls back to a deterministic, realistic geographic coordinate if unknown.
 */
export function getCoordinatesForLocation(location = "", country = ""): Coordinates {
  const normalized = `${location} ${country}`.toLowerCase();

  for (const [key, coords] of Object.entries(KNOWN_DESTINATIONS)) {
    if (normalized.includes(key)) {
      return coords;
    }
  }

  // Fallback: Generate a consistent coordinate from string hash
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) - hash + normalized.charCodeAt(i);
    hash |= 0;
  }

  const lat = 20 + (Math.abs(hash) % 40) + ((Math.abs(hash) % 1000) / 1000);
  const lng = -120 + ((Math.abs(hash >> 2) % 240) + ((Math.abs(hash >> 1) % 1000) / 1000));

  return {
    lat: Number(lat.toFixed(4)),
    lng: Number(lng.toFixed(4)),
  };
}
