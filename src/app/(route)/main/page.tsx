export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="w-full h-full">{children}</div>
    </section>
  );
}
