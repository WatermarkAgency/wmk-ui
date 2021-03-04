import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { WMKLink } from "wmk-lib";

const StyledTitle = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: white;
  border: none;
  display: inline-block;
  padding: 0.5rem;
  text-align: left;
  width: 100%;
  top: 0;
  left: 0;
`;
const WrapCol = styled(Col)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${({ height }) => height}px;
  :hover {
    .cat-overlay {
      background: rgb(0, 0, 0);
      transition: all 0.3s ease;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0) 60%
      );
    }
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 40%
  );
  transition: all 0.3s ease;
`;

const StyledLink = styled(WMKLink)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 0.5rem;
`;

const StyledBg = styled.img`
  position: relative;
  object-fit: cover;
  max-width: 100%;
  z-index: 1;
`;

const TileCategory = ({ tag, height, width }) => {
  const { bg, title, slug } = tag;
  return (
    <WrapCol lg={3} md={6} height={height}>
      <StyledLink to={slug} height={height} width={width}>
        <StyledBg height={height} width={width} src={bg} alt={title} />
        <StyledTitle>{title}</StyledTitle>
        <StyledOverlay className="cat-overlay" />
      </StyledLink>
    </WrapCol>
  );
};

export default TileCategory;
