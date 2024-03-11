import Icons from '../common/Icons';
import { leetalk } from '../../ui/IconPath';
import Link from 'next/link';

interface HeaderProps {
  type: string;
}

const Header = ({ type }: HeaderProps) => {
  return (
    <header className="z-20 disable-text-select w-[100%] bg-white fixed h-[100px] md:h-[120px] flex justify-center items-center text-xl font-bold">
      <div className="w-[75%] flex items-center gap-7 sm:gap-[70px] ">
        <div className="w-[30%] max-w-[220px]">
          <Link href="/main" className="">
            <Icons name={leetalk} />
          </Link>
        </div>
        <div className="flex cursor-pointer gap-7 sm:gap-[70px]">
          <Link
            href="/main/feed"
            className={`text-xs sm:text-base md:text-lg lg:text-xl text-${type === 'feed' || type === 'articles' ? 'black' : 'zinc-500 hover:text-black'}`}
          >
            피드
          </Link>
          <Link
            href="/main/write"
            className={`text-xs sm:text-base md:text-lg lg:text-xl text-${type === 'write' || type === 'articles' ? 'black' : 'zinc-500 hover:text-black'}`}
          >
            작성하기
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
