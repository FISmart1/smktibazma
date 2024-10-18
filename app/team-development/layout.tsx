export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col h-screen">
          {children}
      </section>
  );
}
