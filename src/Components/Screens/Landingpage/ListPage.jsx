import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const ListPage = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const fetchAllData = () => {
        axios
            .get(`https://api.npoint.io/af78801eb324bb50bb2d/${id}/`)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchAllData();
    }, []);
    return (
        <>
            <ListPageContainer>
                <ListWrapper>
                    <Gallery>
                        <ItemDiv>
                            <Tittle>{data.description}</Tittle>
                            <Review>{data.review}</Review>
                        </ItemDiv>
                        <MainContent>
                            <LikeImage>
                                <img src={data.pictures} alt="like" />
                            </LikeImage>
                            <ImageContainer>
                                <img src={data.image} alt="images" />
                            </ImageContainer>
                            <RoomImage>
                                <img src={data.pictures} alt="room" />
                            </RoomImage>
                        </MainContent>
                    </Gallery>
                </ListWrapper>
            </ListPageContainer>
        </>
    );
};
const ListPageContainer = styled.section`
    padding-top: 150px;
`;
const ListWrapper = styled.section`
    margin: 0 auto;
    width: 75%;
`;
const MainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`;
const Gallery = styled.div``;
const ItemDiv = styled.div``;
const ImageContainer = styled.div`
    width: 400px;
    img {
        border-radius: 8px;
        display: block;
        width: 100%;
    }
`;
const Tittle = styled.h2`
    margin-bottom: 5px;
`;
const Review = styled.div`
    margin-bottom: 50px;
`;
const RoomImage = styled.div`
    width: 400px;
    height: 265px;
    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`;
const LikeImage = styled.div`
    width: 600px;
    height: 500px;
 

    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;
