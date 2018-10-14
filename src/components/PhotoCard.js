import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flipcard from '@kennethormandy/react-flipcard'

const Image = styled.img`
  width: 100%;
`;

class PhotoCard extends Component {

  constructor() {
    super();
    this.state = {
      flipped: false,
    }
  }

  render() {
    const { imgSrc } = this.props;
    return (
      <div>
        <button onClick={e => this.setState({ flipped: !this.state.flipped })}>
          Flip
        </button>
        <Flipcard flipped={this.state.flipped} type="horizontal">
          <div>
            <Image src={require(`../assets/${imgSrc}`)} alt={`${imgSrc}-image`} />
          </div>
          <div><p>I am Back!!!</p></div>
        </Flipcard>
      </div>
    );
  }
}

PhotoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

export default PhotoCard;
