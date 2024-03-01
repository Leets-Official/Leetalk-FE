import Image from 'next/image';

const ProfileContainer = () => {
  return (
    <div className="relative w-full px-[16%] flex my-28 items-center">
      <div className=" mr-16">
        <Image
          src={'/images/Ellipse.png'}
          alt="profile"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-black text-xl font-bold">프로필 이름</div>
        <div className="text-black text-lg font-medium">프로필 소개글</div>
      </div>
    </div>
  );
};

export default ProfileContainer;
