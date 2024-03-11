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
    <footer className="disable-text-select bg-white mb-28 mt-56 flex justify-between w-[75%] h-6 text-[#4A93FF]">
      <div className="mobile:w-[140px] sm:w-36 md:w-48 lg:w-64 flex flex-shrink items-center text-[#4A93FF] font-bold">
        <FooterLeetalk />
        <div className="ml-2 text-sm sm:text-base md:text-xl lg:text-3xl">
          &
        </div>
        <Leets />
        <div className=" text-sm sm:text-base md:text-xl lg:text-3xl">
          Leets
        </div>
      </div>
      <div className="w-[16%] flex justify-between items-center">
        <Link
          className="w-[20%]"
          href="https://www.instagram.com/leets.official/"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          className="w-[20%]"
          href="https://open.kakao.com/o/sObD2U5e"
          target="_blank"
        >
          <KakaoTalk />
        </Link>
        <Link
          className="w-[20%]"
          href="https://github.com/Leets-Official"
          target="_blank"
        >
          <Github />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
