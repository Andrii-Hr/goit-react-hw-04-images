import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const onChange = e => {
    setKeyword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizeKeyword = keyword.toLowerCase().trim();

    if (normalizeKeyword === '') {
      return toast.info('Enter a word to search!');
    }

    onSubmit(normalizeKeyword);
    setKeyword('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          onChange={onChange}
          value={keyword}
          name="keyword"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
