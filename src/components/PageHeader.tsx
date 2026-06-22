export function PageHeader({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-ink md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted md:text-lg">{description}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
