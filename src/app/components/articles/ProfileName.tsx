interface ProfileNameProps {
  name: string | undefined;
}

const ProfileName = ({ name }: ProfileNameProps) => {
  return (
    <div className="w-[33%] flex justify-center text-white">
      <div className="w-[130px] h-[37px] px-7 py-[9px] rounded-[20px] border border-white justify-center items-center gap-2.5 inline-flex">
        <div className="text-sm font-normal">{name}</div>
      </div>
    </div>
  );
};

export default ProfileName;
