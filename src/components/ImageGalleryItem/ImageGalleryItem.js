import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ images }) {
  const [modalOptions, setModalOptions] = useState({
    show: false,
    src: '',
    alt: '',
  });

  const showModal = e => {
    setModalOptions({
      show: true,
      src: e.target.dataset.src,
      alt: e.target.alt,
    });
  };

  const closeModal = () => {
    setModalOptions({ show: false, src: '', alt: '' });
  };

  return (
    <>
      {images.map(el => (
        <li className={s.galleryItem} key={el.id}>
          <img
            onClick={showModal}
            className={s.galleryItemImg}
            src={el.webformatURL}
            alt={el.tags}
            data-src={el.largeImageURL}
          />
        </li>
      ))}
      {modalOptions.show && (
        <Modal
          src={modalOptions.src}
          alt={modalOptions.alt}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
