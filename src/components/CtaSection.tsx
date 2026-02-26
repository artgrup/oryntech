import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Gift, Users, BookOpen } from "lucide-react";

const CtaSection = () => {
  const { tr } = useLanguage();

  const perks = [
    { icon: Gift, text: tr("cta_free_migration") },
    { icon: Users, text: tr("cta_onboarding") },
    { icon: BookOpen, text: tr("cta_training") },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-hero rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="inline-block bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium px-4 py-1 rounded-full mb-6">
              {tr("cta_badge")}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              {tr("cta_title")}
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-8 max-w-lg mx-auto">
              {tr("cta_subtitle")}
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-accent mb-10"
            >
              {tr("cta_button")}
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                    <Icon className="w-4 h-4 text-accent" />
                    {perk.text}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
