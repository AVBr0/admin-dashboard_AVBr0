interface ITheme {
  colors: {
    bg: string;
    font: string;
    innerPieLegenda: string;
    outerPieLegenda: string;
    dashboardCardIcon: string;
    sideBarBg: string;
    deleteButton: string;
    editButton: string;
  };

  media: {
    XXL: string;
    XL: string;
    LG: string;
    MD: string;
    SM: string;
    XS: string;
  };

  defaultImages: {
    user: string;
    product: string;
  };
}

export default ITheme;
