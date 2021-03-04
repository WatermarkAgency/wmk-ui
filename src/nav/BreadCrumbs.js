import React from "react";
import { WMKLink } from "wmk-lib";
import styled from "styled-components";
import get from "lodash/get";
import PropTypes from "prop-types";
import { colors as defaultColors } from "../vars/palette";

const Wrap = styled.div`
  display: flex;
  * {
    margin-right: 15px;
    font-size: 0.75rem;
    font-weight: 300;
  }
  button {
    border: none;
    background: none;
    height: 1.1rem;
    padding: 0;
    color: ${colors.hex("primary")};
    :hover {
      text-decoration: underline;
    }
  }
  img {
    width: 10px;
    height: 15px;
    position: relative;
    top: 2px;
  }
`;

const CurrentTitle = styled.p`
  color: green;
  text-decoration: underline;
`;

export const BreadCrumbs = ({ root, paths, current, Separator, colors }) => {
  return (
    <Wrap>
      {root ? (
        <BreadCrumbLink to={get(root, "to")} target={get(root, "target")}>
          {get(root, "text")}
        </BreadCrumbLink>
      ) : null}
      {paths && paths.length
        ? paths.map((path, i) => {
            return (
              <BreadCrumbLink
                seperate
                Separator={Separator}
                to={get(path, "to")}
                target={get(path, "target")}
                key={"crumbLink" + i}
              >
                {get(path, "text")}
              </BreadCrumbLink>
            );
          })
        : null}
      <BreadCrumbCurrent Separator={Separator}>{current}</BreadCrumbCurrent>
    </Wrap>
  );
};

BreadCrumbs.propTypes = {
  root: PropTypes.object,
  paths: PropTypes.array,
  current: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  Separator: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  colors: PropTypes.object,
};

BreadCrumbs.defaultProps = {
  colors: defaultColors,
};

const BreadCrumbCurrent = ({ children, Separator }) => {
  return children ? (
    <React.Fragment>
      {Separator ? <Separator /> : <span>|</span>}
      <CurrentTitle>{children}</CurrentTitle>
    </React.Fragment>
  ) : null;
};

const BreadCrumbLink = ({ Separator, seperate, to, target, children }) => {
  return (
    <React.Fragment>
      {seperate ? Separator ? <Separator /> : <span>|</span> : null}
      <WMKLink to={to} target={target}>
        {children}
      </WMKLink>
    </React.Fragment>
  );
};
