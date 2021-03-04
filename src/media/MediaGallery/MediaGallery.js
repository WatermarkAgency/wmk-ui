import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import get from "lodash/get";
import MGTitle from "./GalleryTitle";
import TileCategory from "./TileCategory";
import TileHover from "./TileHover";
import PropTypes from "prop-types";
import DefaultCrumbs from "../../nav/BreadCrumb";

const MediaGallery = ({
  media,
  init,
  tileHeight,
  tileWidth,
  Breadcrumbs,
  crumbs,
}) => {
  const { hash, arr } = media;
  const key = get(init, "slug");
  const galleryTitle = get("init", "title");
  return (
    <Container>
      {Breadcrumbs ? (
        <Row>
          <Col>
            <Breadcrumbs
              //currCat={init} //init={init} setinit={setinit}
              root={get(crumbs, "root")}
              paths={get(crumbs, "paths")}
              current={get(crumbs, "current")}
            />
          </Col>
        </Row>
      ) : null}
      {galleryTitle ? (
        <Row>
          <Col>
            <MGTitle>{galleryTitle}</MGTitle>
          </Col>
        </Row>
      ) : null}
      <Row>
        {!init
          ? arr.map((category) => {
              const { media, slug, title, bg, key } = category;
              return slug !== "general" ? (
                <TileCategory
                  media={media}
                  key={slug}
                  tag={category}
                  title={title}
                  bg={bg}
                  width={tileWidth}
                  height={tileHeight}
                  objKey={key}
                />
              ) : null;
            })
          : init &&
            hash[key] &&
            hash[key].map((med, i) => {
              const { type, title, to, bg } = med;
              return (
                <TileHover
                  key={"media" + i}
                  bg={bg}
                  type={type}
                  title={title}
                  to={to}
                  width={tileWidth}
                  height={tileHeight}
                />
              );
            })}
      </Row>
    </Container>
  );
};

export default MediaGallery;

MediaGallery.propTypes = {
  media: PropTypes.object.isRequired,
  init: PropTypes.object,
  tileHeight: PropTypes.number,
  tileWidth: PropTypes.number,
  crumbs: PropTypes.object,
  //Breadcrumbs: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

MediaGallery.defaultProps = {
  tileHeight: 175,
  tileWidth: 350,
  Breadcrumbs: DefaultCrumbs,
  crumbs: {
    root: { to: "/", text: "Home" },
    paths: [],
    current: false,
  },
};
