export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Insight Panel. All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm text-slate-300/90">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#register">Join</a>
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
