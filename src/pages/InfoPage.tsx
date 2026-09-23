import Navbar from "../components/layout/Navbar";
import Footer from "../components/common/Footer";

interface InfoPageProps {
  title: string;
  description: string;
  items: string[];
}

function InfoPage({ title, description, items }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-5xl font-bold text-[#311f09] sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5c4529] sm:text-lg">
            {description}
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item} className="rounded-2xl bg-[#fafafa] p-7 text-left shadow-sm">
                <p className="text-sm leading-6 text-[#5c4529]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default InfoPage;
