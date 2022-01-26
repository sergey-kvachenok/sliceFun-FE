import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { colors, zIndexes } from '../../../styles/theme';

const StyledInput = styled.input`
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

type SearchProps = {
  handleSearchChange: Function
} 

const Search = ({ handleSearchChange }: SearchProps) => {
  const { t } = useTranslation(['shows']);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.target.value);
  };

  return <StyledInput placeholder={t('search')} onChange={handleChange} />;
};

export default Search;
