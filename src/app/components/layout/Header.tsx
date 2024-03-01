import Icons from '../common/Icons';
import { leetalk } from '../../ui/IconPath';
import Link from 'next/link';

interface HeaderProps {
  type: string;
}

const Header = ({ type }: HeaderProps) => {
  return (
    <header className="z-20 disable-text-select bg-white fixed w-full h-[100px] pl-[16%] flex gap-[70px] items-center text-xl font-bold">
      <div>
        <Link href="/main">
          <Icons name={leetalk} />
        </Link>
      </div>
      <div className="flex cursor-pointer gap-[70px]">
        <Link
          href="/main/feed"
          className={`text-${type === 'feed' || type === 'articles' ? 'black' : 'zinc-500 hover:text-black'}`}
        >
          피드
        </Link>
        <Link
          href="/main/write"
          className={`text-${type === 'write' || type === 'articles' ? 'black' : 'zinc-500 hover:text-black'}`}
        >
          작성하기
        </Link>
      </div>
    </header>
  );
};

export default Header;
