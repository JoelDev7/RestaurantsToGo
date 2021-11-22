import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { RestaurantScreen } from '../../features/restaurants/screens/restaurant.screen';
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;
const Maps = () => <Text>Maps</Text>;
export const AppNavigation = () => {
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Restaurants') {
                        iconName = focused
                            ? 'md-restaurant'
                            : 'md-restaurant-outline';
                    } else if (route.name === 'Map') {
                        iconName = focused
                            ? 'md-map'
                            : 'md-map-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused
                            ? 'md-settings'
                            : 'md-settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
}