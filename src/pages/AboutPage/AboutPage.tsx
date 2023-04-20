import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Team from "./components/Team";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Team />
      <section className="p-page flex flex-col items-center pt-20">
        <h1 className="text-3xl font-semibold">Want to get it touch?</h1>
        <p className="py-1 text-front text-opacity-75 text-lg">
          We are just an email away
        </p>
        <Link to="mailto:help@ideavaulthk.com" className="btn-1 px-6 py-4 mt-5">
          Mail us
        </Link>
      </section>
    </>
  );
}
