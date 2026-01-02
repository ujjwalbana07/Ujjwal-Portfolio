import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js/max';
import type { CountryCode } from 'libphonenumber-js';

/**
 * Validates a phone number for a specific country or internationally.
 * @param phoneNumber The phone number string to validate.
 * @param countryCode The ISO 3166-1 alpha-2 country code (e.g., 'US', 'IN'). Optional if number is in international format.
 * @returns true if the phone number is valid, false otherwise.
 */
export function validatePhoneNumber(phoneNumber: string, countryCode?: CountryCode): boolean {
    if (!phoneNumber) return false;
    return isValidPhoneNumber(phoneNumber, countryCode);
}

/**
 * Formats a phone number to standard International format (e.g., +1 213 373 4253).
 * @param phoneNumber The phone number string to format.
 * @param countryCode The ISO 3166-1 alpha-2 country code.
 * @returns The formatted phone number string, or the original string if invalid.
 */
export function formatPhoneNumber(phoneNumber: string, countryCode?: CountryCode): string {
    if (!phoneNumber) return '';

    try {
        const phoneNumberObj = parsePhoneNumber(phoneNumber, countryCode);
        if (phoneNumberObj && phoneNumberObj.isValid()) {
            return phoneNumberObj.formatInternational();
        }
    } catch (error) {
        // Return original if parsing fails
    }

    return phoneNumber;
}
