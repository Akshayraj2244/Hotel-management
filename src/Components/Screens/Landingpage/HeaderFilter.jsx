import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderFilter = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.npoint.io/af78801eb324bb50bb2d")
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }, []);
    return (
        <>
            <FilterContainer>
                <FilterWrapper>
                    <MainContent>
                        <Gallery>
                            {items.map((place) => (
                                <ItemDiv>
                                    <Link to={`${place.id}`}>
                                        <ImageContainer>
                                            <img
                                                src={place.image}
                                                alt="image"
                                            />
                                           
                                        </ImageContainer>
                                        <Text>{place.title}</Text>
                                            <Kilometers>
                                                {place.kilometers}
                                            </Kilometers>
                                            <Price>{place.price}</Price>
                                    </Link>
                                </ItemDiv>
                            ))}
                        </Gallery>
                    </MainContent>
                </FilterWrapper>
            </FilterContainer>
        </>
    );
};

const FilterContainer = styled.div`
    padding: 158px 0 40px 0;

`;
const FilterWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const MainContent = styled.div``;
const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;
`;
const ItemDiv = styled.div`
    width: 90%;
`;
const ImageContainer = styled.div`
    height: 250px;
    width: 250px;
    img {
        width: 100%;
        display: block;
        border-radius: 10px;
        height: 100%;
    }
    &:hover {
        transform: scale(1.1);
        transition: all 1.1s ease-out;
        font-size: 10px;
    } 
`;
const Text = styled.p`
    font-size: 15px;
    color: black;
    margin-bottom: 10px;
`;
const Price = styled.div`
    color: grey;
    font-size: 15px;
    margin-top: 4px;
`;
const Kilometers = styled.p`
    color: grey;
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 0;
`;
