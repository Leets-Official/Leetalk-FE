import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import CategoriesContainer from '../../components/container/CategoriesContainer';
import FeedItemContainer from '../../components/main/container/FeedItemContainer';

export default function MainPage() {
  return (
    <section>
      <Header />
      <CategoriesContainer />
      <FeedItemContainer className=" top-60" />
      <Footer />
    </section>
  );
}
