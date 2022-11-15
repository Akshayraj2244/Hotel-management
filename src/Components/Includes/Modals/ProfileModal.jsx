import React from "react";
import styled from "styled-components";

export const ProfileModal = ({ isProfile, setProfile }) => {
    return (
        <>
            <Container className={isProfile ? "active" : ""}>
                <ModalWrapper>
                    <Content>
                        <Signup>Sign up</Signup>
                        <Login>Log in</Login>
                        <Host>Host your Home</Host>
                        <Experience>Host an experience</Experience>
                        <Help>Help</Help>
                    </Content>
                </ModalWrapper>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 226px;
    height: 21%;
    position: fixed;
    right: 190px;
    top: -300px;
    background-color: #fff;
    background-size: contain;
    display: none;
    box-shadow: 20px 20px 50px 15px grey;
    z-index: 2;
    border-radius: 10px;
    &.active {
        top: 90px;
        display: block;
    }
`;
const ModalWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const Content = styled.p`
`;
const Signup = styled.p`
    cursor: pointer;
`;
const Login = styled.p`
    border-bottom: 1px solid grey;
    margin-top: 20px;
    cursor: pointer;

`;
const Host = styled.p`
    cursor: pointer;
`;
const Experience = styled.p`
    cursor: pointer;
`;
const Help = styled.p`
    cursor: pointer;
`;
