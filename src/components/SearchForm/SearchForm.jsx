import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormStyled,
  SearchFormInput,
  BtnSearch,
} from './SeachForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      alert('Enter new name');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <label>
        <SearchFormInput
          onChange={handleChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </label>
      <BtnSearch type="submit">Seach</BtnSearch>
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
