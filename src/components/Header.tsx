import { Home, Compass, Bot, User, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import logoImage from "../assets/3c6ed11014c18e5a382db0cda081db2aca716cf6.png";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-gradient-to-r
        from-[#0B1321]/95 via-[#0E152A]/95 to-[#111827]/95
        dark:from-[#060913]/95 dark:via-[#070B17]/95 dark:to-[#0B1321]/95
        text-white
        backdrop-blur-lg border-b border-white/10 shadow-lg
      "
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand (INLINE STYLE ile kesin büyüklük) */}
          <div className="flex items-center gap-6">
            <div
              className="
                shrink-0 rounded-2xl
                bg-white/30 dark:bg-white/20
                flex items-center justify-center
                ring-2 ring-cyan-400/40
                shadow-[0_4px_20px_rgba(0,200,255,0.25)]
                backdrop-blur-sm overflow-hidden
              "
              aria-label="CareerVerse Logosu"
              style={{
                width: "90px",   // <- DIŞ KUTU BOYUTU
                height: "90px",  // <- DIŞ KUTU BOYUTU
                padding: "8px",
              }}
            >
              <img
                src={logoImage}
                alt="CareerVerse Logo"
                style={{
                  width: "72px",     // <- LOGO BOYUTU
                  height: "72px",    // <- LOGO BOYUTU
                  objectFit: "contain",
                  filter:
                    "brightness(1.5) contrast(1.2) saturate(1.3) drop-shadow(0 0 10px rgba(0,255,255,0.6))",
                }}
                className="pointer-events-none select-none"
              />
            </div>

            {/* Yazı boyutunu da inline ile belirgin artırdık */}
            <span
              className="font-extrabold tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
              style={{
                color: "white",
                fontSize: "44px",  // <- YAZI BOYUTU
                letterSpacing: "-0.5px",
              }}
            >
              CareerVerse
            </span>
          </div>

          {/* Desktop Navigation */}
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center gap-10">
  <a
    href="#home"
    className="group px-2 py-1 rounded-md flex items-center gap-3 text-white/90 hover:text-cyan-300 hover:bg-white/5 text-[18px] font-medium transition-colors"
    aria-label="Ana Sayfa"
  >
    <Home className="w-5 h-5 opacity-90 group-hover:opacity-100" />
    <span className="leading-none">Ana Sayfa</span>
  </a>

  <a
    href="#explore"
    className="group px-2 py-1 rounded-md flex items-center gap-3 text-white/90 hover:text-cyan-300 hover:bg-white/5 text-[18px] font-medium transition-colors"
    aria-label="Keşfet"
  >
    <Compass className="w-5 h-5 opacity-90 group-hover:opacity-100" />
    <span className="leading-none">Keşfet</span>
  </a>

  <a
    href="#assistant"
    className="group px-2 py-1 rounded-md flex items-center gap-3 text-white/90 hover:text-cyan-300 hover:bg-white/5 text-[18px] font-medium transition-colors"
    aria-label="Asistanım"
  >
    <Bot className="w-5 h-5 opacity-90 group-hover:opacity-100" />
    <span className="leading-none">Asistanım</span>
  </a>

  <a
    href="#about"
    className="group px-2 py-1 rounded-md flex items-center gap-3 text-white/90 hover:text-cyan-300 hover:bg-white/5 text-[18px] font-medium transition-colors"
    aria-label="Hakkımızda"
  >
    <span className="leading-none">Hakkımızda</span>
  </a>
</nav>



          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-white/15 hover:bg-white/10"
              aria-label="Temayı Değiştir"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-cyan-300" />
              ) : (
                <Moon className="w-5 h-5 text-cyan-300" />
              )}
            </Button>

            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
              <User className="w-4 h-4 mr-2" />
              Profilim
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white/90" aria-label="Mobil menüyü aç">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (bottom bar) */}
      <nav
        className="
          fixed bottom-0 left-0 right-0 md:hidden
          bg-[#0B1321]/90 dark:bg-[#060913]/90
          text-white
          backdrop-blur-md border-t border-white/10
          p-4 shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.5)]
        "
        aria-label="Mobil gezinme"
      >
        <div className="flex items-center justify-around">
          <a href="#home" className="flex flex-col items-center gap-1 text-white/80 hover:text-cyan-300 transition-colors">
            <Home className="w-5 h-5" />
            <span className="text-[11px]">Ana Sayfa</span>
          </a>
          <a href="#explore" className="flex flex-col items-center gap-1 text-white/80 hover:text-cyan-300 transition-colors">
            <Compass className="w-5 h-5" />
            <span className="text-[11px]">Keşfet</span>
          </a>
          <a href="#assistant" className="flex flex-col items-center gap-1 text-white/80 hover:text-cyan-300 transition-colors">
            <Bot className="w-5 h-5" />
            <span className="text-[11px]">Asistanım</span>
          </a>
          <button onClick={toggleTheme} className="flex flex-col items-center gap-1 text-white/80 hover:text-cyan-300 transition-colors" aria-label="Temayı Değiştir (Mobil)">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="text-[11px]">Tema</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
