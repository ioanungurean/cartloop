import styled, { css } from "styled-components";

export const StyledMessenger = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 600px;

  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const StyledHeader = styled.div`
  font-size: 18px;

  display: flex;
  align-items: center;

  width: 100%;
  padding: 20px;

  border-bottom: 1px solid #eef2f7;
  border-radius: 16px 16px 0 0;
`;

export const StyledCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;

  background-color: red;

  ${({ connected }) =>
    connected &&
    css`
      background-color: green;
    `}
`;

export const StyledChatHistory = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;

  padding: 20px;

  flex-grow: 1;
`;

export const StyledMessage = styled.p`
  font-size: 14px;
  line-height: 1.4;

  position: relative;

  display: flex;

  max-width: 380px;
  margin: 1px 0;
  padding: 8px 17px 6px 13px;

  color: black;
  border-radius: 18px;
  background-color: #e5e5ea;

  align-self: flex-start;

  ${({ fromMe }) =>
    fromMe &&
    css`
      color: white;
      align-self: flex-end;
      background-color: #1084ff;
    `}
`;

export const StyledInput = styled.div`
  display: flex;
  padding: 20px;
  border-top: 1px solid #eef2f7;
`;
