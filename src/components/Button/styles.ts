import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #fff;
  margin: 0 10px;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
  ${({ variant }) =>
    variant === "tertiary" &&
    css`
      min-width: 100px;
      height: 25px;

      background: green;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e5e044;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;