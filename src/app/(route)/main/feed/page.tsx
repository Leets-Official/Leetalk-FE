import Footer from '../../../components/layout/Footer';
import Header from '../../../components/layout/Header';
import CategoriesContainer from '../../../components/container/CategoriesContainer';
import FeedItemContainer from '../../../components/main/container/FeedItemContainer';

export default function MainFeedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header type="feed" />
      <div className="flex-grow">
        <CategoriesContainer />
        <FeedItemContainer className="mt-50" />
      </div>
      <Footer />
    </div>
  );
}
