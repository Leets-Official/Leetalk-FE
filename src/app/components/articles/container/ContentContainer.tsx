import Image from 'next/image';

interface ContentContainerProps {
  contents: Array<Content>;
}

const ContentContainer = ({ contents }: ContentContainerProps) => {
  return (
    <div className="w-full px-[16%] relative top-[100px] my-12">
      <div className="">
        <div className="text-black text-xl font-bold tracking-wide">
          서브타이틀
        </div>
        {contents.map((content, index) => {
          switch (content.type) {
            case 'text':
              return (
                <div
                  key={index}
                  className="w-full my-12 text-black text-lg font-medium leading-[35px] tracking-wide"
                >
                  {content.data}
                </div>
              );
            case 'image':
              return (
                <div key={index} className="w-full py-12 flex justify-center">
                  <Image
                    src={content.data}
                    alt="content"
                    width={1280}
                    height={700}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      width: '90%',
                      height: '90%',
                    }}
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default ContentContainer;
