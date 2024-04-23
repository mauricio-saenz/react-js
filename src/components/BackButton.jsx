import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Navega hacia atrás en el historial
  };

  return (
    <button className='btn btn-primary' onClick={handleClick}>Go Back</button>
  );
}

export default BackButton;
