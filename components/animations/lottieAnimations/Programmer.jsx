import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/lf30_editor_ib9cahqr.json';

const Programmer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={600} width={600} />;
};

export default Programmer;
