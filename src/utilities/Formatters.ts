/* eslint-disable @typescript-eslint/no-var-requires */
import countries from 'i18n-iso-countries';
import nationalities from 'i18n-nationality';
import { differenceInCalendarYears } from 'date-fns';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
nationalities.registerLocale(require('i18n-nationality/langs/en.json'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type formatter = (...args: any[]) => string;

const formatCountryName: formatter = (countryCode) => countries.getName(countryCode, 'en');

const formatNationality: formatter = (countryCode: string) => nationalities.getName(countryCode, 'en');

const formatGender: formatter = (gender: string) => {
    if (gender) {
        switch (gender) {
            case 'F':
                return 'Female';
            case 'M':
                return 'Male';
            default:
                return gender;
        }
    }
    return '';
};

const formatMaritalStatus: formatter = (maritalStatus) => {
    if (maritalStatus) {
        switch (maritalStatus) {
            case 'S':
                return 'Single';
            case 'M':
                return 'Divorce';
            default:
                return maritalStatus;
        }
    }
    return '';
};

const formatDate: formatter = (date) => (date ? date.toLocaleDateString('en-SG') : '');

const computeAge: formatter = (dob): string => {
    if (dob) {
        return differenceInCalendarYears(new Date(), dob).toString();
    }
    return '';
};

const addressUnit: formatter = (value) => (value ? `#${value}` : '');

export default {
    addressUnit,
    formatCountryName,
    formatDate,
    formatNationality,
    computeAge,
    formatGender,
    formatMaritalStatus,
};
