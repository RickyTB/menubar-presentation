import React from "react";
import styled from "styled-components";

import Page from "../components/Page/Page";
import Title from "../components/Title/Title";

const PageTitle = styled(Title)`
  color: #fff;
  font-size: 80px;
  -webkit-text-stroke: 4px #000000;
`;

const Resources = () => {
    return (
        <Page>
            <Title align="left" color="white" className="pt-4 pb-2">Recursos</Title>
            <div className="container">
                <PageTitle>menubar.ricardobaquero.com</PageTitle>
            </div>
        </Page>
    );
};

export default Resources;