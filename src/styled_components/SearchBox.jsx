import styled from 'styled-components'
import searchIcon from '../assets/images/icons/ic_outline-search.svg'

export const SearchBox = styled.div`
  background-color: hsla(0, 0%, 100%, 0.45);
  background-image: url(${searchIcon}); /* search icon goes here */
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: left 20px center;
  // padding: 4px 8px;
  outline: none;
  color: white;
  border-radius: 5px;
  // position: relative;

  &::placeholder {
    color: white;
    opacity: 0.8;
    font-size: 0.8rem;
  }
`
