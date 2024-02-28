import Header from '../../components/layout/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="max-w-[1920px] h-[1920px] mx-auto">
        <Header />
        {children}
      </div>
    </section>
  );
}
