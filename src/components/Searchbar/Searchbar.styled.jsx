import styled from "styled-components"

export const SearchForm = styled.form`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 20px 0;
    background: #4B79A1;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #283E51, #4B79A1);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #283E51, #4B79A1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
    z-index: 999;
`

export const SearchBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 120px;
    height: 35px;
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    cursor: pointer;
    &:hover,
    &:focus {
    background-color: rgba(255, 255, 126, 1);
  }
`

export const SearchSpan = styled.span`
    margin-left: 10px;
`

export const SearchInput = styled.input`
    width: 300px;
  height: 35px;
  padding: 5px 5px 5px 15px;
  font-size: 16px;
  outline: none;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font-size: 18px;
    color: #cccccc;
  }
`
