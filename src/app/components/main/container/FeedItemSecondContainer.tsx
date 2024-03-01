import FeedTagContainer from './FeedTagContainer';

interface FeedItemSecondContainerProps {
  tag: string[];
  title: string;
  truncatedContent: string;
}

const FeedItemSecondContainer = ({
  tag,
  title,
  truncatedContent,
}: FeedItemSecondContainerProps) => {
  return (
    <div className="w-[700px] h-full mt-4">
      <div>
        <FeedTagContainer
          taglist={['tag1', 'tag2', 'tag3']}
          backgroundstyle="mr-5"
          textstyle="text-black text-lg font-medium"
        />
        <div className="text-black text-3xl font-bold mb-7">제목인디요</div>
        <div className="text-zinc-500 text-base font-medium">
          {`요즘 20대 청년들이 가장 관심을 가지고 있는 주제들을 함께 알아보려고
          해요. 현대 청년들은 다양한 분야에 관심을 갖고 있지만, 그 중에서도 특정
          주제들이 두드러지게 떠오르고 있어요. 첫 번째로는 '자기계발'이에요.
          20대 청년들은 성장과 발전에 큰 관심을 가지고 있어요.책 읽기, 온라인
          강의 수강, 스킬 향상을 위한 공부 등 다양한 방법으로 자기.....`}
        </div>
      </div>
    </div>
  );
};

export default FeedItemSecondContainer;
