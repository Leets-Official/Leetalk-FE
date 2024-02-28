import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="relative max-w-[1920px] h-[1920px] mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </section>
  );
}
