import styled from "styled-components";
const StyledTable = styled.div`
  position: relative;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */

  table {
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  th {
    text-align: left;
  }

  thead {
    th {
      background-color: #55608f;
    }
  }

  tbody {
    tr {
      &:hover {
        color: white;

        background-color: blanchedalmond;
      }
    }
    td {
      color: blue;
      position: relative;
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: ;
          z-index: -1;
        }
      }
    }
  }
`;
export default StyledTable;
