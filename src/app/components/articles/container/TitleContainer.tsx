import DefaultDetailCoverImg from '../../../ui/default/DefaultDetailCoverImg';
import FeedTagContainer from '../../main/container/FeedTagContainer';
import Date from '../Date';
import ProfileName from '../ProfileName';
import Share from '../Share';
import SubTitle from '../SubTitle';
import Title from '../Title';

const TitleContainer = () => {
  return (
    <div className="relative top-[100px] w-full flex justify-center">
      <DefaultDetailCoverImg />
      <div className="w-full z-10 px-[2%] flex flex-col">
        <div className="w-full mt-5 flex items-center justify-center">
          <div className="w-[33%] flex justify-start">
            <Date category="Frontend" date="2024.02.01" />
          </div>
          <ProfileName name="프로필 이름" />
          <div className="w-[33%] flex justify-end">
            <Share />
          </div>
        </div>
        <div className="w-full z-10 mt-[20%]">
          <FeedTagContainer
            taglist={['하이', '방가', '프론트']}
            backgroundstyle="mr-5"
            textstyle="text-white font-medium text-base"
          />
          <Title title="타이틀" />
          <SubTitle subtitle="서브타이틀" />
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
