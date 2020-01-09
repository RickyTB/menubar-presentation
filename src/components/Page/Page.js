import React from 'react';
import styled from "styled-components";
import cx from 'classnames';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 80px;
  background: #343a40;
  background: ${props => props.background || "linear-gradient(135deg, #209ffe 0%, #343a40 100%)"};
`;

const Page = ({children, className, ...props}) => {
    return (
        <PageContainer className={cx("container-fluid", className)} {...props}>
            {children}
        </PageContainer>
    );
};

export default Page;