import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1em;
  padding-top: 4em;
  padding-bottom: 3em;
  background: #555b6e;
  
  .form-row {
  padding-bottom: 1em;
  }
`;

export const CENTERDIV= styled.div`     
  text-align: center;
`;

export const ICON = styled.i`
  position:relative;
  top: calc(50% - 10px); /* 50% - 3/4 of icon height */
  font-size: 2rem;
  :hover {
    cursor: pointer;
    color: #313543;
  }
`;

export default Wrapper;