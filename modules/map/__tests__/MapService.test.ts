import { MapService, LatLngLiteral } from '../MapService';

describe('MapService', () => {
    describe('isValidLocation', () => {
        it('should return true for valid coordinates', () => {
            const location: LatLngLiteral = { lat: 50.4501, lng: 30.5234 };
            expect(MapService.isValidLocation(location)).toBe(true);
        });

        it('should return false for invalid latitude values', () => {
            expect(MapService.isValidLocation({ lat: -91, lng: 30.5234 })).toBe(false);
            expect(MapService.isValidLocation({ lat: 91, lng: 30.5234 })).toBe(false);
        });

        it('should return false for invalid longitude values', () => {
            expect(MapService.isValidLocation({ lat: 50.4501, lng: -181 })).toBe(false);
            expect(MapService.isValidLocation({ lat: 50.4501, lng: 181 })).toBe(false);
        });

        it('should return false for non-numeric values', () => {
            // @ts-expect-error -- invalid location
            expect(MapService.isValidLocation({ lat: 'test', lng: 30.5234 })).toBe(false);
            // @ts-expect-error -- invalid location
            expect(MapService.isValidLocation({ lat: 50.4501, lng: 'test' })).toBe(false);
        });

        it('should return false for NaN values', () => {
            expect(MapService.isValidLocation({ lat: NaN, lng: 30.5234 })).toBe(false);
            expect(MapService.isValidLocation({ lat: 50.4501, lng: NaN })).toBe(false);
        });

        it('should return false for null or undefined values', () => {
            // @ts-expect-error -- null
            expect(MapService.isValidLocation(null)).toBe(false);
            // @ts-expect-error -- null
            expect(MapService.isValidLocation(undefined)).toBe(false);
        });
    });
});