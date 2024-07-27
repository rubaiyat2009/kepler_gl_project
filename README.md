# Kepler.gl Project

This project demonstrates the use of Kepler.gl for interactive geospatial data visualization, with custom component integration.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Custom Component Integration](#custom-component-integration)
- [Issues and Solutions](#issues-and-solutions)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/rubaiyat2009/kepler_gl_project.git
   ```

2. Navigate to the project directory:
   ```
   cd kepler_gl_project
   ```

3. Install dependencies:
   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the Kepler.gl map with the integrated custom component.

## Custom Component Integration

In this project, we replaced the default side panel of Kepler.gl with a custom component called `CustomSidePanel`. This component communicates with the parent component to pass data or trigger actions.

### Parent Component

The parent component includes the KeplerGl map and the custom side panel:

```javascript
import React from 'react';
import KeplerGl from 'kepler.gl';
import CustomSidePanel from './CustomSidePanel';

const ParentComponent = () => {
  const handleCustomAction = (data) => {
    console.log('Data from custom component:', data);
  };

  return (
    <KeplerGl
      id="map"
      mapboxApiAccessToken="YOUR_ACTUAL_MAPBOX_TOKEN"
      width={window.innerWidth}
      height={window.innerHeight}
      sidePanel={<CustomSidePanel onCustomAction={handleCustomAction} />}
    />
  );
};

export default ParentComponent;
```

### Custom Component (CustomSidePanel)

The custom component receives a function prop from the parent and uses it to send data back:

```javascript
import React from 'react';

const CustomSidePanel = ({ onCustomAction }) => {
  const sendDataToParent = () => {
    const data = { message: 'Hello from CustomSidePanel' };
    onCustomAction(data);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data</button>
    </div>
  );
};

export default CustomSidePanel;
```

## Issues and Solutions

### Problem with `injectComponents`

Initially, there was an attempt to use the `injectComponents()` function from `kepler.gl` to replace components. However, due to the absence of this function in the version used, the project has been modified to directly include custom components without `injectComponents()`.

### Import Errors

Ensure you have installed the `kepler.gl` package correctly. If you encounter module resolution errors, reinstall the package and check for correct versions.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

## License

This project is licensed under the MIT License. See the LICENSE file for more information.