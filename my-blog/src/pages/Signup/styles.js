import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  border-radius: 20px;
  margin-left: 1px;
  margin-top: 1px;
  margin-right: 1px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  background: #151515;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  max-width: 350px;
  padding: 30px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 25px;
  font-weight: 600;
  color: #676767;
  
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;