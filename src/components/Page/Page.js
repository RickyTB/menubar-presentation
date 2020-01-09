import React from 'react';
import styled from "styled-components";
import cx from 'classnames';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.background || '#343a40'};
`;

const Page = ({children, className, ...props}) => {
    return (
        <PageContainer className={cx("container-fluid", className)} {...props}>
            {children}
        </PageContainer>
    );
};

export default Page;