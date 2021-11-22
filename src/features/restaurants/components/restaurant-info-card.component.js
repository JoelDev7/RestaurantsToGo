import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { View } from "react-native";
import { SvgXml } from 'react-native-svg';
import star from "../../../../assets/star";
import openIcon from "../../../../assets/open"

const RestaurantCard = styled(Card)`
background-color: ${props => props.theme.colors.bg.primary};
margin: ${props => props.theme.sizes[1]};
`
const RestaurantCardCover = styled(Card.Cover)`
background-color: ${props => props.theme.colors.bg.primary};
`

const Title = styled.Text`
font-family: ${props => props.theme.fonts.body}
font-size: ${props => props.theme.fontSizes.body}
color: ${props => props.theme.colors.ui.primary};
`
const Info = styled.View`
padding: ${props => props.theme.space[3]};
`

const Address = styled.Text`
font-family: ${props => props.theme.fonts.heading}
font-size: ${props => props.theme.fontSizes.caption}
`
const Stars = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;

`
const StarsContainer = styled.View`
display: flex;
flex-direction: row;
`
const ClosedTemporarily = styled.Text`
color: red;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some nice restaurant",
        icon,
        photos = [
            "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg"
        ],
        address = "Some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.round(rating)))
    return (<RestaurantCard>
        <RestaurantCardCover elevation={5} source={{ uri: photos[0] }} />
        <Info>
            <Title>{name}</Title>
            <Stars>
                <StarsContainer>
                    {ratingArray.map((x, index) => (
                        <SvgXml key={index} xml={star} width={20} height={20} />
                    ))}
                </StarsContainer>
                {isOpenNow ? <SvgXml key="openICon" xml={openIcon} width={20} height={20} /> : null}
                {isClosedTemporarily ? <ClosedTemporarily key="closed">CLOSED TEMPORARILY</ClosedTemporarily> : null}
            </Stars>
            <Address>{address}</Address>
        </Info>
    </RestaurantCard>);
}
