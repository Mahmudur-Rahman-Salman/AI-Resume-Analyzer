import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeIQ" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar></Navbar>
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Application & Resume Ratings</h1>
          <h2>Review your submission and check AI-Powered feedbacks </h2>
        </div>
      </section>
    </main>
  );
}
