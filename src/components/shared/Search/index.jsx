import styled from 'styled-components';
import { colors, zIndexes, breakpoints } from '../../../styles/theme';

const StyledInput = styled.input.attrs({ placeholder: 'Search' })`
  cursor: pointer;
  padding: 4px 5px;
  border-radius: 5px;
  font-size: 16px;
  border: 2px solid ${colors.pink};
  outline: none;
  z-index: ${zIndexes.search};
  margin-bottom: 10px;

  &:focus,
  &:active {
    border-color: ${colors.coralRed};
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${colors.coralRed};
    }
  }
`;

const Search = ({ handleSearchChange }) => {
  const handleChange = event => {
    handleSearchChange(event.target.value);
  };

  return <StyledInput onChange={handleChange} />;
};

export default Search;
