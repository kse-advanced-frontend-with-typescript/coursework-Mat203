export interface LatLngLiteral {
    lat: number;
    lng: number;
}

export interface GeocodeResult {
    address: string;
    success: boolean;
    error?: string;
}

export class MapService {
    private static geocodeLocation(location: LatLngLiteral): Promise<GeocodeResult> {
        return new Promise((resolve) => {
            if (!window.google || !window.google.maps) {
                resolve({
                    address: '',
                    success: false,
                    error: 'Google Maps API not loaded'
                });
                return;
            }

            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location }, (results, status) => {
                if (status === 'OK' && results && results[0]) {
                    resolve({
                        address: results[0].formatted_address,
                        success: true
                    });
                } else {
                    resolve({
                        address: '',
                        success: false,
                        error: `Geocoding failed: ${status}`
                    });
                }
            });
        });
    }

    public static async getAddressFromCoordinates(location: LatLngLiteral): Promise<GeocodeResult> {
        try {
            return await this.geocodeLocation(location);
        } catch (error) {
            return {
                address: '',
                success: false,
                error: `Error during geocoding: ${error}`
            };
        }
    }

    public static isValidLocation(location: LatLngLiteral): boolean {
        return (
            typeof location === 'object' &&
            location !== null &&
            'lat' in location &&
            'lng' in location &&
            typeof location.lat === 'number' &&
            typeof location.lng === 'number' &&
            !isNaN(location.lat) &&
            !isNaN(location.lng) &&
            location.lat >= -90 &&
            location.lat <= 90 &&
            location.lng >= -180 &&
            location.lng <= 180
        );
    }
}