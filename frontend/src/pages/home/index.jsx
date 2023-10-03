import { Hero } from "../../components/hero";
import { Features } from "../../components/features";

export function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <section className="features">
        <Features />
      </section>
    </>
  );
}
