import ITheme from './Types/styled';

const baseTheme: ITheme = {
  colors: {
    bg: '#222b3c',
    font: '#ddd',
    innerPieLegenda: '#8884d8',
    outerPieLegenda: '#82ca9d',
    dashboardCardIcon: 'gray',
    sideBarBg: '#2c374a',
    deleteButton: '#f54747',
    editButton: '#fff67a',
  },

  media: {
    XXL: '(max-width: 1366px)',
    XL: '(max-width: 1200px)',
    LG: '(max-width: 1024px)',
    MD: '(max-width: 768px)',
    SM: '(max-width: 540px)',
    XS: '(max-width: 476px)',
  },

  defaultImages: {
    user: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
    product:
      'https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png',
  },
};

export default baseTheme;
