import React, { useState, createContext, useEffect, useMemo } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('san francisco');
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const onSearch = (searchKeyword) => {
        console.log('location', searchKeyword)
        setIsLoading(true);
        setKeyword(searchKeyword);
        if (!searchKeyword.length) {
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
                console.log(result);
            }).catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    };
    // useEffect(() => {
    //     onSearch(keyword)
    // }, [])
    return (<LocationContext.Provider
        value={{ keyword, isLoading, error, location, search: onSearch }}>
        {children}
    </LocationContext.Provider>
    );
};
