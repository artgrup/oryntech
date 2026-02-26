import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lang, langNames } from "@/i18n/translations";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, tr } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: tr("nav_platform"), href: "#features" },
    { label: tr("nav_pricing"), href: "#pricing" },
    { label: tr("nav_faq"), href: "#faq" },
    { label: tr("nav_contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          ORYN <span className="text-gradient">TECH</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-secondary"
            >
              <Globe className="w-4 h-4" />
              {langNames[lang]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 mt-1 bg-card border border-border rounded-lg shadow-elegant overflow-hidden min-w-[140px]"
                >
                  {(Object.keys(langNames) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${lang === l ? "text-accent font-medium" : "text-foreground"}`}
                    >
                      {langNames[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#pricing"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {tr("nav_get_started")}
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {(Object.keys(langNames) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileOpen(false); }}
                    className={`text-xs px-3 py-1.5 rounded-md transition-colors ${lang === l ? "bg-accent text-accent-foreground font-medium" : "bg-secondary text-secondary-foreground"}`}
                  >
                    {langNames[l]}
                  </button>
                ))}
              </div>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="block bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity"
              >
                {tr("nav_get_started")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
