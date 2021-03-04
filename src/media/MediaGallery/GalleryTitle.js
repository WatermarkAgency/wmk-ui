import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors as defaultColors } from "../../vars/palette";

const Title = styled.h4`
  color: ${({ colors }) => colors.hex("primary")};
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 0 0.5rem 0;
`;

const GalleryTitle = ({ children, colors }) => (
  <Title colors={colors}>{children}</Title>
);

export default GalleryTitle;

GalleryTitle.propTypes = {
  children: PropTypes.node.isRequired,
  colors: PropTypes.object,
};

GalleryTitle.defaultProps = {
  colors: defaultColors,
};
