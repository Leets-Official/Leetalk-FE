import DefaultDetailCoverImg from '../../../ui/default/DefaultDetailCoverImg';
import FeedTagContainer from '../../main/container/FeedTagContainer';

const TitleContainer = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div></div>
      <div className="w-full z-10">
        <FeedTagContainer
          taglist={['하이', '방가', '프론트']}
          backgroundstyle="mr-5"
          textstyle="text-white text-lg font-medium"
        />
      </div>
      <div>
        <DefaultDetailCoverImg />
      </div>
    </div>
  );
};

export default TitleContainer;
