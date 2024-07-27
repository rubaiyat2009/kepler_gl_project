import React from 'react';
import KeplerGl from 'kepler.gl';

// const ParentComponent = () => {
//     const handleCustomAction = (data) => {
//       console.log('Data from custom component:', data);
//     };

const ParentComponent = () => {
  return (
    <KeplerGl
      id="map"
      mapboxApiAccessToken="pk.eyJ1Ijoic2FtcGxlIiwiYSI6ImNrbzZybXNzZDA1cWMyb3Fxb3R6dmN4aXEifQ.-VoK67n-9uTF1gM7zT0n_A"       //mapboxApiAccessToken="YOUR_ACTUAL_MAPBOX_TOKEN" // Replace with your actual token
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default ParentComponent;
