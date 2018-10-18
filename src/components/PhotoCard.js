import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import Flipcard from '@kennethormandy/react-flipcard'

const Image = styled.img`
  width: 100%;
`;

class PhotoCard extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     flipped: false,
  //   }
  // }

  render() {
    const { imgSrc } = this.props;
    return (
      <div>
        <Image src={require(`../assets/${imgSrc}`)} alt={`${imgSrc}-image`} />
      </div>
        // <Flipcard
        //   flipped={this.state.flipped}
        //   type="horizontal"
        //   onClick={e => this.setState({ flipped: !this.state.flipped })}
        // >
        //   <div>
        //     <Image src={require(`../assets/${imgSrc}`)} alt={`${imgSrc}-image`} />
        //   </div>
        //   <div><p>I am Back!!!</p></div>
        // </Flipcard>
    );
  }
}

PhotoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

export default PhotoCard;
