import React from 'react';
import { useRouter } from '../hooks/useRouter';

const Home = () => {
  const { routeTo } = useRouter();
  return (
    <>
      <h1>photo4</h1>
      <div>
        <button
          onClick={() => {
            routeTo('/step-1');
          }}
        >
          START
        </button>
      </div>
    </>
  );
};

export default Home;
