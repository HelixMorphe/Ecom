import { css } from "styled-components";
export const mob = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const tab = (props) => {
  return css`
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};
