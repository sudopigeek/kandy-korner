import React, { useEffect, useState } from 'react';
import { getAllLocations } from '../../modules/APIManager';
import { LocationCard } from './LocationCard';
import { FetchErrorCard } from '../ErrorCards/FetchErrorCard';

export const LocationList = () => {
    const [locations, setLocations] = useState([]);
    // get locations from api:
    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }
    // populate locations with data from api:
    useEffect(() => {
        getLocations()
    }, [])
    return (
        <div className="locationContainer">
            <h1>Locations:</h1>
            <div className="locations">
                {/* check whether locations is null and show the subsequent cards */}
                {locations == null ? <FetchErrorCard message={"Sorry, we couldn't get our locations. Maybe check your internet connection?"} /> : locations.map(location => <LocationCard key={location.id} location={location} />)}
            </div>
        </div>
    )
}