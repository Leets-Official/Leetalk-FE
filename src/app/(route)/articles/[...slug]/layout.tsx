export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="relative max-w-[1920px] h-[1920px] mx-auto">
        {children}
      </div>
    </section>
  );
}
