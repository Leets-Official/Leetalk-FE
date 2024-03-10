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
    <footer className="disable-text-select bg-white mb-28 mt-56 flex justify-between w-[75%] h-6 text-[#2EB79C]">
      <div className="mobile:w-[140px] sm:w-36 md:w-48 lg:w-64 flex flex-shrink items-center text-teal-500 font-bold">
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
        >
          <Instagram />
        </Link>
        <Link className="w-[20%]" href="https://open.kakao.com/o/sObD2U5e">
          <KakaoTalk />
        </Link>
        <Link className="w-[20%]" href="https://github.com/Leets-Official">
          <Github />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
