export function Footer() {
  return (
    <footer
      className="border-t border-[#E5E5E5] py-8 px-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <span className="font-semibold text-black tracking-tight">oberstufe.site</span>
        <span className="text-xs">Das Schulprojekt-Archiv der Oberstufe</span>
        <div className="flex items-center gap-6">
          <a href="/impressum" className="hover:text-black transition-colors duration-200">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-black transition-colors duration-200">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  )
}
