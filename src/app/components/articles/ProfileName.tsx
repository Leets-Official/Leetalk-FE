interface ProfileNameProps {
  name: string | undefined;
}

const ProfileName = ({ name }: ProfileNameProps) => {
  return (
    <div className="w-[33%] h-[100%] flex justify-center items-center text-white">
      <div className="mobile:w-[60%] sm:w-auto mobile:h-[90%] sm:h-[30%] sm:px-7 sm:py-4 rounded-[20px] border border-white justify-center items-center gap-2.5 inline-flex">
        <div className="mobile:text-[8.2px] md:text-xs lg:text-sm font-normal">
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProfileName;
