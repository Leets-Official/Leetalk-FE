import Icons from '../common/Icons';
import { leetalk } from '../../ui/IconPath';
import Link from 'next/link';

interface HeaderProps {
  type: string;
}

const Header = ({ type }: HeaderProps) => {
  return (
    <header className="z-20 disable-text-select bg-white fixed w-full h-[100px] ml-[3%] flex gap-[70px] items-center text-xl font-bold">
      <div>
        <Link href="/main">
          <Icons name={leetalk} />
        </Link>
      </div>
      <div className="flex cursor-pointer gap-[70px]">
        <Link
          href="/main/feed"
          className={
            type === 'feed' ? 'text-black' : 'text-zinc-500 hover:text-black'
          }
        >
          피드
        </Link>
        <Link
          href="/main/write"
          className={
            type === 'wrtie' ? 'text-black' : 'text-zinc-500 hover:text-black'
          }
        >
          작성하기
        </Link>
      </div>
    </header>
  );
};

export default Header;
