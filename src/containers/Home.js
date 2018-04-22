import React, { Component } from "react";
import PhotoCard from "../components/PhotoCard";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hi Home!</h1>
        <PhotoCard imgSrc={"alaska.jpg"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          diam felis, tristique sed enim nec, sagittis malesuada ligula.
          Pellentesque volutpat ullamcorper dignissim. Vivamus eget auctor odio.
          Sed tincidunt urna a efficitur ultricies. Donec fermentum, sapien eget
          maximus ultricies, nunc erat accumsan felis, ut aliquet nulla urna ut
          odio. Duis rutrum elit dui, a hendrerit purus consectetur sed. Etiam
          vel massa sit amet lectus pellentesque imperdiet. Phasellus ornare
          blandit purus, et cursus nunc iaculis vitae.
        </p>
      </div>
    );
  }
}

export default Home;
