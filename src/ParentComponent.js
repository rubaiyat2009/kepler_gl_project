import React from 'react';
import KeplerGl from 'kepler.gl';
// Remove the import statement for injectComponents

import CustomSidePanel from './CustomSidePanel';

const ParentComponent = () => {
  const handleCustomAction = (data) => {
    console.log('Data from custom component:', data);
  };

  return (
    <KeplerGl
      id="map"
      mapboxApiAccessToken="YOUR_ACTUAL_MAPBOX_TOKEN" // Replace with your actual token
      width={window.innerWidth}
      height={window.innerHeight}
      sidePanel={<CustomSidePanel onCustomAction={handleCustomAction} />}
    />
  );
};

export default ParentComponent;