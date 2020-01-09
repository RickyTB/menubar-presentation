import React from 'react';
import styled from "styled-components";

import logo from "../assets/logo_primefaces.png";
import Page from "../components/Page/Page";
import Card from "../components/Card/Card";
import Image from "../components/Image/Image";
import Subtitle from "../components/Subtitle/Subtitle";
import Title from "../components/Title/Title";

const Logo = styled(Image)`
position: absolute;
top: -96px;
`;

const Space = styled.br`
  margin-bottom: 75px;
`;

const Landing = () => {
    return (
        <Page className="d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="d-flex flex-column align-items-center" style={{position: 'relative'}}>
                    <Logo src={logo} alt="logo"/>
                    <Card className="align-self-stretch align-items-center">
                        <Space/>
                        <Title className="m-0">Menubar</Title>
                        <Subtitle className="mt-0">Manual de usuario</Subtitle>
                        <br/>
                        <p className="m-0">Ricardo Baquero</p>
                        <p className="text-center">Universidad Central del Ecuador 2020</p>
                    </Card>
                </div>
            </div>
        </Page>
    );
};

export default Landing;