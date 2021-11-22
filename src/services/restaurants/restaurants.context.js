import React, { useState, createContext, useEffect, useContext, useMemo } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../locations/location.context";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);
    const retrieveRestaurants = (location) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(location)
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                }).catch((error) => {
                    setIsLoading(false);
                    setError(error);
                })
        }, 2000);
    };
    useEffect(() => {
        console.log('location', location);
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }
            }>{children}
        </RestaurantsContext.Provider>
    );
};