import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { tr } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="font-display text-lg font-bold text-foreground mb-3">
              ORYN <span className="text-gradient">TECH</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              {tr("footer_desc")}
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">{tr("footer_platform")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">CRM</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">AI Agents</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Automation</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">{tr("nav_pricing")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">{tr("footer_legal")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{tr("footer_privacy")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{tr("footer_terms")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{tr("footer_about")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ORYN TECH. {tr("footer_rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
