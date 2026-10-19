import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Страница собирается из секций макета сверху вниз. Секции переносим на новый
// дизайн по очереди — здесь перечислены только те, что уже готовы.
export default function Page() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
