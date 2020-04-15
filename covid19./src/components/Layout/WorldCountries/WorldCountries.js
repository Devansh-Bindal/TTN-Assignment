import React,{Fragment} from 'react';
import WorldCountry from '../WorldCountry/WorldCountry';
const worldCountries=(props)=>
{
    let countries=props.countries;
    if(countries)
    {
        countries.map(countryInfo=>
            {
                return (
                    <Fragment>
                {/* <div>hi</div> */}
                <WorldCountry
                flag={countryInfo.flag}
                countries={countryInfo.country}
                totalCases={countryInfo.totalCases}
                recovered={countryInfo.recovered}
                />
                // </Fragment>
                )
            })
    }
    // return countriesResult;
}
export default worldCountries;
