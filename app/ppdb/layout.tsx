export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="  h-screen">
          {children}
      </section>
  );
}
