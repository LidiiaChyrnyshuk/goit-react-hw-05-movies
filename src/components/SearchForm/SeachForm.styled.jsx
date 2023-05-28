import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border-radius: 4px;
  border-color: aqua;
  padding: 8px;
  background-color: transparent;
  color: inherit;
  outline: none;

  &::placeholder {
    font-size: 16px;
  }
`;

export const BtnSearch = styled.button`
  display: inline-block;
  width: 80px;
  height: 45px;
  font-size: 16px;
  border: 0;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  background-color: aqua;
`;
