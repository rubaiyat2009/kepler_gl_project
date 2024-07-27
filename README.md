# Kepler.gl Project

## Overview

This project is a React-based application integrating Kepler.gl, an advanced open-source tool for geospatial data analysis. It showcases how to use Kepler.gl for visualizing geospatial data, including custom component integration.

## Features

- **Kepler.gl Integration**: Interactive visualization and analysis of geospatial data.
- **Custom Components**: Extendable UI with custom components integrated into Kepler.gl.
- **Responsive Design**: Adapts to various screen sizes.

## Prerequisites

Ensure you have the following installed:

- Node.js (version 12.x or later)
- npm (Node Package Manager) or yarn

## Setup and Installation

To set up and run the project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/kepler_gl_project.git
   cd kepler_gl_project
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or with yarn:

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables:**

   Obtain a Mapbox API token. Create a `.env` file in the root directory and include your token:

   ```env
   REACT_APP_MAPBOX_API_TOKEN=your_actual_mapbox_token
   ```

   Replace `your_actual_mapbox_token` with your actual Mapbox token.

4. **Start the Development Server:**

   Using npm:

   ```bash
   npm start
   ```

   Or with yarn:

   ```bash
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure

```
kepler_gl_project/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── CustomSidePanel.js
│   │   └── ... (other components)
│   │
│   ├── App.js
│   ├── index.js
│   ├── ParentComponent.js
│   ├── App.css
│   ├── index.css
│   └── ... (other styles or utilities)
│
├── .gitignore
├── package.json
├── README.md
└── yarn.lock / package-lock.json
```

- **public/**: Contains the main HTML file and static assets.
- **src/**: Main directory for source files, including React components and styles.
  - **components/**: Directory for custom React components.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.
  - **ParentComponent.js**: Component that integrates Kepler.gl.
  - **styles**: CSS files for styling the application.

## Usage

To utilize the Kepler.gl map, ensure your Mapbox token is correctly set in the `.env` file. This will enable the map to render with the provided data and custom components.

## Contributing

Contributions are welcome! Feel free to fork the project, submit issues, and send pull requests. For significant changes, please open an issue to discuss them first.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- [Kepler.gl](https://kepler.gl/) - The open-source tool for geospatial data analysis.
- [Mapbox](https://www.mapbox.com/) - Provider of mapping and location services used in this project.