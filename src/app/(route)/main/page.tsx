export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">
      <div className="max-w-[1280px]">{children}</div>
    </section>
  );
}
