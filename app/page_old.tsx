import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="flex flex-col items-center">
        <Image
          src="/profile.jpg"
          alt="Basavaraja Beerabbi"
          width={180}
          height={180}
          className="rounded-full"
        />

        <h1 className="text-5xl font-bold mt-6">
          Basavaraja Beerabbi
        </h1>

        <p className="text-2xl text-purple-400 mt-3">
          AI & Data Science Student
        </p>

        <p className="mt-4">
          Student Head - PALS MITT Club
        </p>

        <p>
          Treasurer - Wings of MITT Aero Club (2025-2026)
        </p>

        <p className="mt-4">
          LLM Developer | AI Agent Developer | Educator
        </p>

        <p className="mt-4">
          Email: bbeerabbi@gmail.com
        </p>

        <p>
          Phone: 7204488641
        </p>

        <h2 className="text-3xl font-bold text-purple-400 mt-10">
          Skills
        </h2>

        <ul className="mt-4">
          <li>Python</li>
          <li>Java</li>
          <li>SQL</li>
          <li>Machine Learning</li>
          <li>LLMs</li>
          <li>Agentic AI</li>
        </ul>

        <h2 className="text-3xl font-bold text-purple-400 mt-10">
          Projects
        </h2>

        <ul className="mt-4">
          <li>SwachhVision - Smart Waste Management System</li>
          <li>Smart Waste Segregation Bin</li>
          <li>Intelligent Multi-Agent E-Commerce Assistant</li>
          <li>Android Waste Classification Application</li>
        </ul>
      </div>
    </main>
  );
}