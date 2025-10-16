import { Home, Compass, Bot, User, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import logoImage from "figma:asset/3c6ed11014c18e5a382db0cda081db2aca716cf6.png";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-cyan-50/50 to-purple-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 backdrop-blur-lg border-b border-cyan-500/30 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 p-2 flex items-center justify-center shadow-sm">
              <img src={logoImage} alt="CareerVerse Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-foreground text-2xl">CareerVerse</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" />
              Ana Sayfa
            </a>
            <a href="#explore" className="text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Keşfet
            </a>
            <a href="#assistant" className="text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Asistanım
            </a>
            <a href="#about" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              Hakkımızda
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-cyan-500/30 hover:bg-cyan-500/10"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-cyan-400" />
              ) : (
                <Moon className="w-5 h-5 text-cyan-400" />
              )}
            </Button>

            {/* Profile Button */}
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
              <User className="w-4 h-4 mr-2" />
              Profilim
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background/95 backdrop-blur-lg border-t border-cyan-500/30 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-none">
        <div className="flex items-center justify-around">
          <a href="#home" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-cyan-400 transition-colors">
            <Home className="w-5 h-5" />
            <span className="text-xs">Ana Sayfa</span>
          </a>
          <a href="#explore" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-cyan-400 transition-colors">
            <Compass className="w-5 h-5" />
            <span className="text-xs">Keşfet</span>
          </a>
          <a href="#assistant" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-cyan-400 transition-colors">
            <Bot className="w-5 h-5" />
            <span className="text-xs">Asistanım</span>
          </a>
          <button onClick={toggleTheme} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-cyan-400 transition-colors">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="text-xs">Tema</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
