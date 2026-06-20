export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-page-bg">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary">© Ahmer Mehmood {year}</p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/ahmermehmood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ahmermehmood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
