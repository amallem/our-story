import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

class PhotoCard extends Component {
  render() {
    return (
      <div>
        <Image src={require(`../assets/${this.props.imgSrc}`)} alt="alaska-image" />
      </div>
    );
  }
}

PhotoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired
}

export default PhotoCard;
