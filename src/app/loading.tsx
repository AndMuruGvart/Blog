'use client';

import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: 'auto',
};

function LoadingPage() {
  return (
    <ClipLoader
      color="3b82f6"
      cssOverride={override}
      size={75}
      aria-label="Loading Spinner"
    />
  );
}

export default LoadingPage;
