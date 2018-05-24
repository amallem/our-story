import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

class PhotoCard extends Component {
  render() {
    const { imgSrc } = this.props;
    return (
      <div>
        <Image src={require(`../assets/${imgSrc}`)} alt={`${imgSrc}-image`} />
      </div>
    );
  }
}

PhotoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

export default PhotoCard;
