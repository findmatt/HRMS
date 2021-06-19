import countries from 'i18n-iso-countries';
import nationalities from 'i18n-nationality';
import { differenceInCalendarYears } from 'date-fns';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
nationalities.registerLocale(require('i18n-nationality/langs/en.json'));

const formatCountryName = (countryCode) => countries.getName(countryCode, 'en');

const formatNationality = (countryCode) =>
    nationalities.getName(countryCode, 'en');

const formatGender = (gender) => (gender === 'F' ? 'Female' : 'Male');

const formatMaritalStatus = (maritalStatus) =>
    maritalStatus === 'S' ? 'Single' : 'Married';

const formatDate = (date) => date.toLocaleDateString('en-SG');

const computeAge = (dob) => differenceInCalendarYears(new Date(), dob);

const addressUnit = (value) => `#${value}`;
// eslint-disable-next-line import/prefer-default-export
export {
    addressUnit,
    formatCountryName,
    formatDate,
    formatNationality,
    computeAge,
    formatGender,
    formatMaritalStatus,
};
