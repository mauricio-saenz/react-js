import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

function Category() {

  const location = useLocation();
  const currentPath = location.pathname;

  const lastSegment = decodeURIComponent(currentPath.split('/').pop());
  const category = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  return (
    <div className='text-center'>
      <h1>{category}</h1>
      <ItemListContainer category={lastSegment}/>
    </div>
  );
}

export default Category;
