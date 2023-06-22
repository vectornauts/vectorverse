export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pt-20">
      <div className="mx-auto px-6 py-12 h-full flex justify-center items-center">
        <div className="card md:w-8/12 lg:w-5/12 px-8 py-10 max-w-md">
          {children}
        </div>
      </div>
    </section>
  );
}
