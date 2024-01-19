const customTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    lightText: '#FFFFFF',
    darkText: '#000000',
    primary: '#00FF00', // Replace with your primary color
    secondary: '#FFA500', // Replace with your secondary color
    tertiary: '#191970', // Replace with your tertiary color
    pageBackground: '#191970',
    headerBackground: '#FFFFFF',
    // Add other colors as needed
  },
  // Add typography styles here if needed
  // Example: fontSize, fontFamily, fontWeight, etc.
  typography: {
    // Add your typography styles here
  },
  config: {
    initialColorMode: 'light',
    // Add other configuration options as needed
  },
};

export type Theme = typeof customTheme;
export default customTheme;
