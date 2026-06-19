import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">

        <Image
          src="/profile.jpg"
          alt="Basavaraja Beerabbi"
          width={220}
          height={220}
          className="rounded-full border-4 border-purple-500 shadow-lg"
        />

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Basavaraja Beerabbi
        </h1>

        <p className="text-purple-400 text-2xl mt-4">
          AI & Data Science Student
        </p>

        <p className="mt-3 text-lg">
          LLM Developer | AI Agent Developer | Educator
        </p>

        <p className="mt-2">
          Student Head - PALS MITT Club
        </p>

        <p>
          Treasurer - Wings of MITT Aero Club (2025-2026)
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">

          <a
            href="https://github.com/basavaraja-byte"
            target="_blank"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/basavarajabeerabbi"
            target="_blank"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            LinkedIn
          </a>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-purple-400 mb-8">
          About Me
        </h2>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Passionate AI & Data Science student with strong interest in
          Large Language Models, Agentic AI, Machine Learning,
          Android Development and Teaching.
        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-purple-400 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-zinc-900 p-4 rounded-xl">Python</div>
          <div className="bg-zinc-900 p-4 rounded-xl">Java</div>
          <div className="bg-zinc-900 p-4 rounded-xl">SQL</div>
          <div className="bg-zinc-900 p-4 rounded-xl">Machine Learning</div>

          <div className="bg-zinc-900 p-4 rounded-xl">TensorFlow</div>
          <div className="bg-zinc-900 p-4 rounded-xl">LLMs</div>
          <div className="bg-zinc-900 p-4 rounded-xl">Agentic AI</div>
          <div className="bg-zinc-900 p-4 rounded-xl">Android Development</div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-purple-400 mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              SwachhVision
            </h3>

            <p className="mt-2">
              Smart Waste Management System using AI.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Smart Waste Segregation Bin
            </h3>

            <p className="mt-2">
              AI-powered automatic waste segregation system.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Multi-Agent E-Commerce Assistant
            </h3>

            <p className="mt-2">
              Intelligent recommendation and retrieval assistant.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Android Waste Classification App
            </h3>

            <p className="mt-2">
              TensorFlow Lite based waste classification application.
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-purple-400 mb-8">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 p-5 rounded-xl">
            🏆 1st Place - PALS Thinkathon IIT Madras
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            🎓 EduAIThon Participant
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            🚀 E-Summit IIT Bombay Participant
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            👨‍💼 Student Head - PALS MITT Club
          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-purple-400 mb-8">
          Contact
        </h2>

        <div className="bg-zinc-900 p-6 rounded-xl">

          <p>Email: bbeerabbi@gmail.com</p>

          <p className="mt-2">
            Phone: 7204488641
          </p>

          <p className="mt-2">
            LinkedIn: linkedin.com/in/basavarajabeerabbi
          </p>

          <p className="mt-2">
            GitHub: github.com/basavaraja-byte
          </p>

        </div>

      </section>

    </main>
  );
}