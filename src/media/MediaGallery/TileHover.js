import React from "react";
import { WMKLink } from "wmk-lib";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import PropTypes from "prop-types";

//const width =

const BGImg = styled.img`
  height: ${({ height }) => height + "px"};
  object-fit: cover;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

const HoverLink = styled(WMKLink)`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
  :hover {
    span {
      transtion: all 0.4s ease;
      bottom: 0;
    }
  }
`;

const HoverTitle = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  bottom: -5rem;
  transition: all 0.4s ease;
  background: rgb(47, 144, 154, 0.8);
  color: white;
  font-size: 0.7rem;
  text-align: left;
  padding: 0.3rem 0.5rem;
`;

const Overlay = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  transition: all 0.5s ease;
  :hover {
    transition: all 0.5s ease;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

const PlayIconWrap = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 6vh;
    color: white;
    opacity: 0.8;
  }
`;

const PlayIcon = ({ children }) => {
  return <PlayIconWrap>{children}</PlayIconWrap>;
};

const TileHover = ({ bg, title, to, width, height, type, target }) => {
  return (
    <Col lg={3} md={6}>
      <HoverLink to={to} target={target} width={width} height={height}>
        {bg ? (
          <BGImg src={bg} alt={title} width={width} height={height} />
        ) : null}
        <HoverTitle>{title}</HoverTitle>
        <Overlay />
        {type === "video" ? (
          <PlayIcon>
            <FaPlayCircle />
          </PlayIcon>
        ) : null}
      </HoverLink>
    </Col>
  );
};

export default TileHover;

TileHover.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
};

TileHover.defaultProps = {
  width: 350,
  height: 175,
};
