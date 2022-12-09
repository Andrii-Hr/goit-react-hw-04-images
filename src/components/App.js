import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const onSubmit = word => {
    if (word === keyword) return;

    setKeyword(word);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        keyword={keyword}
        setPage={setPage}
        page={page}
        images={images}
        setImages={setImages}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
}
