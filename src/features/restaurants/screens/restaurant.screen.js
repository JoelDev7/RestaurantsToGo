import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight} && 'margin-top: ${StatusBar.currentHeight}px;'
`
const RestaurantListContainer = styled(View)`
flex: 1;
padding: ${props => props.theme.sizes[1]};
`

export const RestaurantScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (<SafeArea>
        <Search />
        <ActivityIndicator animating={isLoading} color={Colors.deepOrange400} />
        <FlatList
            data={restaurants}
            renderItem={({ item }) => { return <RestaurantInfoCard restaurant={item} /> }}
            keyExtractor={(item) => item.id}
        >
        </FlatList>
    </SafeArea>)
}