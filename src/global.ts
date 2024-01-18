import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Responive AntD Tables! */
.ant-table-wrapper .ant-table-tbody > tr > td {
  padding: 8px;

  @media (width < 768px) {
    padding: 5px;
    font-size: 12px;
  }

  @media (width < 475px) {
    padding: 2px;
    font-size: 10px;
  }
}

.ant-table-wrapper .ant-table-thead > tr > th {
  padding: 8px;

  @media (width < 768px) {
    padding: 5px;
    font-size: 12px;
  }

  @media (width < 475px) {
    padding: 2px;
    font-size: 10px;
  }
}
`;

export default GlobalStyles;
