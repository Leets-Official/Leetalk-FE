import Link from 'next/link';
import {
  Leets,
  Instagram,
  KakaoTalk,
  Github,
  FooterLeetalk,
} from '../../ui/Logo';

const Footer = () => {
  return (
    <footer className="px-[3%] disable-text-select bg-white absolute bottom-28 flex justify-between w-full h-6 text-[#2EB79C]">
      <div className="w-56 flex items-center text-teal-500 text-xl font-bold">
        <FooterLeetalk />
        <div className="mx-4">&</div>
        <Leets />
        <div className="ml-2">Leets</div>
      </div>
      <div className="w-28 flex justify-between items-center">
        <Link href="">
          <Instagram />
        </Link>
        <Link href="">
          <KakaoTalk />
        </Link>
        <Link href="">
          <Github />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
