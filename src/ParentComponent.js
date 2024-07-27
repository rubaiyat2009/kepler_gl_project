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
      mapboxApiAccessToken="YOUR_ACTUAL_MAPBOX_TOKEN" // Replace with your actual token
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default ParentComponent;
