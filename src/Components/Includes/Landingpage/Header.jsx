import React, { useState } from "react";
import styled from "styled-components";
import { ProfileModal } from "../Modals/ProfileModal";

export default function Header() {
    const [isProfile,setProfile] = useState(false)
    return (
        <>
            <ProfileModal isProfile={isProfile} setProfile={setProfile} />
            <HeaderContainer>
                <HeaderWrapper>
                    <MainContainer>
                        <LeftContent>
                            <Image href="/">
                                <img
                                    src={require("../../Assests/Images/airbnb_horizontal_lockup_web.bd87ed2c8e964eb35463744e07a1a0670177bda2.png")}
                                    alt="Logo"
                                />
                            </Image>
                        </LeftContent>
                        <MiddleContent>
                            <Blackdot>
                                <AnyContent>Anywhere</AnyContent>
                                <WeekContent>Anyweek</WeekContent>
                                <Add>Add guest</Add>
                                <ImageContainer>
                                    <img
                                        src={
                                            require("../../Assests/Images/search-icon.svg")
                                                .default
                                        }
                                        alt="search"
                                    />
                                </ImageContainer>
                            </Blackdot>
                        </MiddleContent>
                        <RightContent>
                            <MainSection>
                                <Content>Become a host</Content>
                                <GlobalImage>
                                    <img
                                        src={require("../../Assests/Images/images.png")}
                                        alt="global"
                                    />
                                </GlobalImage>
                                <Blackdot2>
                                    <HambergerImage>
                                        <img
                                            src={require("../../Assests/Images/4615397-200.png")}
                                            alt="Hamberger"
                                        />
                                    </HambergerImage>
                                    <PofileImage onClick={()=>setProfile(!isProfile)}>
                                        <img
                                            src={require("../../Assests/Images/istockphoto-1223671392-612x612.jpg")}
                                            alt="Pofile"
                                        />
                                    </PofileImage>
                                </Blackdot2>
                            </MainSection>
                        </RightContent>
                    </MainContainer>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.div`
    border-bottom: dotted 1px;
    color: grey;
    position: fixed;
    width: 100%;
    background-color: #fff;
    height: 116px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;
const HeaderWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Image = styled.a`
    width: 152px;
    display: block;
    img {
        display: block;
        width: 100%;
        cursor: pointer;
    }
`;
const LeftContent = styled.div``;
const MiddleContent = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: black;
    font-size: 15px;
    width: 7%;
`;
const Blackdot = styled.div`
    border: solid 1px;
    border-radius: 20px;
    padding: 7px 10px;
    color: grey;
    display: flex;
    box-shadow: 3px 9px 4px -8px #888888;
    align-items: center;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease;
        
    }
`;
const AnyContent = styled.span`
    margin-right: 15px;
    display: inline-block;
    color: black;
    &::after {
        content: "";
        height: 40px;
        border: 1px solid grey;
        margin-left: 10px;
    }
`;
const WeekContent = styled.span`
    margin-right: 15px;
    display: inline-block;
    color: black;

    &::after {
        content: "";
        height: 40px;
        border: 1px solid grey;
        margin-left: 10px;
    }
`;
const Add = styled.span`
    color: gray;
    width: max-content;
`;
const ImageContainer = styled.div`
    width: 13px;
    background-color: #ff385c;
    padding: 8px 8px;
    border-radius: 20px;
    margin-left: 20px;

    img {
        display: block;
        width: 100%;
    }
    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease;
        font-size: 10px;
    }
`;
const RightContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22%;
`;
const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FilterContent = styled.p`
    font-size: 18px;
    padding: 5px 22px;
    border-radius: 20px;
    color: wheat;
    cursor: pointer;
    background-color: #ff385c;
`;
const Content = styled.p`
    margin-right: 15px;
    cursor: pointer;
    color: black;
`;
const GlobalImage = styled.div`
    width: 20px;
    cursor: pointer;
    margin-right: 15px;

    img {
        width: 100%;
        display: block;
    }
`;
const Blackdot2 = styled.div`
    border: solid 1px grey;
    display: flex;
    justify-content: space-between;
    padding: 3px 8px;
    border-radius: 19px;
   
`;
const HambergerImage = styled.div`
    width: 33px;
    cursor: pointer;
    img {
        width: 100%;
        display: block;
    }
    &:hover {
        transform: scale(1.2);
        transition: all 1.1s ease-out;
    }
`;
const PofileImage = styled.div`
    width: 29px;
    cursor: pointer;

    img {
        width: 100%;
        display: block;
    }
    &:hover {
        transform: scale(1.2);
        transition: all 1.1s ease-out;
    }
`;
