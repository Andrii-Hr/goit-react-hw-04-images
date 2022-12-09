import HashLoader from 'react-spinners/HashLoader';

import s from './Loader.module.css';

import React from 'react';

function Loader() {
  return (
    <div className={s.loader}>
      <HashLoader color="#fff"  size={125} />      
    </div>
  );
}
export default Loader;
