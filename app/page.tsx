export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-lg">Matthew Chou</span>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Hi, I&apos;m Matthew Chou
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Software engineer building thoughtful products and clean code.
          </p>
          <a
            href="#projects"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            View my work
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            I&apos;m a software engineer with a passion for building great user experiences.
            I enjoy working across the stack, from designing clean APIs to crafting polished
            frontends. When I&apos;m not coding, you&apos;ll find me exploring new technologies
            and contributing to open source.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Project One",
                description: "A full-stack web application built with modern tooling.",
                tags: ["Next.js", "TypeScript", "PostgreSQL"],
              },
              {
                title: "Project Two",
                description: "An open-source library for simplifying complex workflows.",
                tags: ["Rust", "CLI", "Open Source"],
              },
              {
                title: "Project Three",
                description: "A mobile-first dashboard with real-time data visualization.",
                tags: ["React Native", "GraphQL", "D3.js"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-gray-600 text-lg mb-8">
            I&apos;m always open to interesting conversations and opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@matthewchou.dev"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Email me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Matthew Chou. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
