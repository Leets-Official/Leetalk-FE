'use client';

import { share } from '../../ui/IconPath';
import Icons from '../common/Icons';

const Share = () => {
  const doCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window && window.location.href)
        .then(() => {
          alert('클립보드에 복사되었습니다.');
        })
        .catch(() => {
          alert('복사를 다시 시도해주세요.');
        });
    }
  };

  return (
    <div className="w-[20%] h-[20%]">
      <Icons
        name={share}
        className=" cursor-pointer"
        onClick={() => doCopy()}
      />
    </div>
  );
};
export default Share;
