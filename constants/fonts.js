//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// fonts.js
// Fonts constants, get the fonts used in the app.
//
// Last Updated: 07/04/2024
//

const FONTS = {
    regular: Platform.OS === 'android' ? 'sans-serif' : 'System',
    medium: Platform.OS === 'android' ? 'sans-serif-medium' : 'System',
    bold: Platform.OS === 'android' ? 'sans-serif-medium' : 'System',
};

export { FONTS };