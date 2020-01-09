import React from 'react';
import styled from "styled-components";
import cx from 'classnames';

import Card from "../Card/Card";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
`;

const Menu = styled.div`
  display: flex;
  padding: 0.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: rgba(215,245,255,0.2);
  box-shadow: 0 -4px 6px 0 rgba(0,0,0,0.1);
`;

const CircleCard = styled(Card)`
  min-width: 50px;
  border-radius: 25px;
  display: inline-flex;
  height: 50px;
  border: 5px solid black;
  box-shadow: none;
  padding: 4px;
  flex-direction: row;
  transition: border 300ms ease-out;
  cursor: pointer;
  
  p+p {
    display: none;
  }
  
  &:hover, &.active {
    border-color: #007bff;
    p+p {
      display: inline-block;
    }
    box-shadow: 2px 3px 6px 0 rgba(0,0,0,0.2);
  }
  
`;

const IndexHelper = ({pages, onPageSelected, currentPage}) => {
    return (
        <Container>
            <Menu>
                <div className="container-fluid d-flex justify-content-around">
                    {pages.map((page) => (
                        <div className="d-flex align-items-center">
                            <CircleCard className={cx({'active': currentPage === page.tag})}
                                        onClick={() => onPageSelected(page.tag)}>
                                <p className="mx-2 my-0 text-center">{page.index}</p>
                                <p className="mr-2 m-0">{page.name}</p>
                            </CircleCard>
                        </div>
                    ))}
                </div>
            </Menu>
        </Container>
    );
};

export default IndexHelper;