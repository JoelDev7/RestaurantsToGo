import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from 'react-native-paper';
import { View } from "react-native";
import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled(View)`
padding: ${props => props.theme.sizes[1]}
`

export const Search = () => {
    // const locationContext = useContext(LocationContext);
    const { keyword, search, error } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    //console.log(locationContext)
    useEffect(() => {
        search(keyword)
    }, []);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Type something"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}

            />
        </SearchContainer>
    );
};