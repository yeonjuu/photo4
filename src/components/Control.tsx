import React from 'react';
import { useRouter } from '../hooks/useRouter';

interface ControlProps {
  minStep: number;
  maxStep: number;
}

const Control: React.FC<ControlProps> = ({ minStep, maxStep }) => {
  const { currentPath, routeTo } = useRouter();
  const now = Number(currentPath.slice(-1));

  const prevHandler = (): void => {
    if (now === minStep) {
      return;
    }
    routeTo(`/step-${now - 1}`);
  };

  const nextHandler = (): void => {
    if (now === maxStep) {
      return;
    }
    routeTo(`/step-${now + 1}`);
  };

  const savePhotoHandler = (): void => {
    alert('사진을 저장했습니다');
  };

  return (
    <>
      <h2
        onClick={() => {
          routeTo('/');
        }}
      >
        photo4
      </h2>
      <div>
        {now === minStep ? '' : <button onClick={prevHandler}>이전</button>}
        {now === maxStep ? (
          <button onClick={savePhotoHandler}>저장</button>
        ) : (
          <button onClick={nextHandler}>다음</button>
        )}
      </div>
    </>
  );
};

export default Control;
