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
    <div className="relative w-full px-[16%] flex my-28 items-center">
      <div className="mr-16 w-32 h-32">
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
            borderRadius: '50%',
          }}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-black text-xl font-bold">{writerName}</div>
        <div className="text-black text-lg font-medium">{writerBio}</div>
      </div>
    </div>
  );
};

export default ProfileContainer;
