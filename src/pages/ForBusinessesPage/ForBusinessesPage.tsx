import Hero from "./components/Hero";
import Publisher from "./components/Publisher";

export default function ForBusinessesPage() {
  return (
    <div>
      <Hero />
      <Publisher />
      <section className="p-page py-8">
        <img src="/images/gateway.jpg" alt="gateway" className="w-full" />
      </section>
    </div>
  );
}
