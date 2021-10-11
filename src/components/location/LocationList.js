import React, { useEffect, useState } from 'react';
import { getAllLocations } from '../../modules/APIManager';
import { LocationCard } from './LocationCard';

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
        <div className="locations">
            {locations.map(location => <LocationCard key={location.id} location={location} />)}
        </div>
    )
}