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

const formatGender: formatter = (gender) => (gender === 'F' ? 'Female' : 'Male');

const formatMaritalStatus: formatter = (maritalStatus) => (maritalStatus === 'S' ? 'Single' : 'Married');

const formatDate: formatter = (date) => date.toLocaleDateString('en-SG');

const computeAge: formatter = (dob) => differenceInCalendarYears(new Date(), dob).toString();

const addressUnit: formatter = (value) => `#${value}`;

export default {
    addressUnit,
    formatCountryName,
    formatDate,
    formatNationality,
    computeAge,
    formatGender,
    formatMaritalStatus,
};
