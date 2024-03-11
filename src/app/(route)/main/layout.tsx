export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="relative max-w-[1920px]">{children}</div>
    </section>
  );
}
