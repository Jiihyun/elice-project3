import styled from '@emotion/styled';

export const Title = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
  color: #262626;
  margin-top: 0%;
`;

export const BottomButton = styled.button`
  width: 90%;
  height: 48px;
  border: none;
  font-weight: bold;
  border-radius: 64px;
  background-color: red;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`;

export const Div = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #262626;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 300px;
  outline: none;
  margin-right: 10px;

  &:focus {
    border-color: red;
  }
`;
