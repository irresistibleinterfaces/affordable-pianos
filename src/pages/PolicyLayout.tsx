export default function PolicyLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">

        {/* 👇 ADD THIS BACK */}
        <a
          href="#/"
          className="block text-gray-600 text-sm mb-6 hover:text-black transition"
        >
          ← Back to Home
        </a>

        <h1 className="text-3xl font-semibold mb-8">{title}</h1>

        <div className="space-y-6 text-sm leading-relaxed text-[#444]">
          {children}
        </div>
      </div>
    </div>
  );
}