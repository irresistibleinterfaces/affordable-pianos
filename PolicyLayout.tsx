export default function PolicyLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-semibold mb-8">{title}</h1>
<a
  href="#/"
  className="block text-red-600 text-xl font-bold mb-8"
>
  ← BACK LINK TEST
</a>
        <div className="space-y-6 text-sm leading-relaxed text-[#444]">
          {children}
        </div>
      </div>
    </div>
  );
}