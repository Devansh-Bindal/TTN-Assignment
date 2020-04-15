import React, { Fragment } from 'react';
import WorldCountry from '../WorldCountry/WorldCountry';
const worldCountries = (props) => {
    let countries = props.countries;
    if (countries) {
        countries = countries.map(countryInfo => {
            return (
                <WorldCountry
                    key={countryInfo.country}
                    flag={countryInfo.flag}
                    countries={countryInfo.country}
                    totalCases={countryInfo.total_cases}
                    recovered={countryInfo.total_recovered}
                />
            )
        })
    }

    return countries;
}
export default worldCountries;
