import Image from 'next/image';

interface TitleContainerProps {
  writerProfileImgName: string;
  writerName: string;
  writerBio: string;
}

const ProfileContainer = ({
  writerProfileImgName,
  writerName,
  writerBio,
}: TitleContainerProps) => {
  return (
    <div className="relative w-[75%] h-[100px] flex my-28 items-center">
      <div className="mobile:mr-10 sm:mr-16 mobile:w-[85px] mobile:h-[81px] sm:w-32 sm:h-32">
        <Image
          src={writerProfileImgName}
          alt="profile"
          width={100}
          height={100}
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            width: '100%',
            height: '100%',
            borderRadius: '100%',
          }}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-black mobile:text-sm sm:text-base md:text-xl lg:text-xl font-bold">
          {writerName}
        </div>
        <div className="text-black mobile:text-xs sm:text-sm md:text-lg font-medium">
          {writerBio}
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
