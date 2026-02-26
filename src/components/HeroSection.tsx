import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { tr } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="text-sm font-medium text-primary-foreground/90">{tr("hero_badge")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-primary-foreground">{tr("hero_title_1")}</span>
          <br />
          <span className="text-gradient">{tr("hero_title_2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
        >
          {tr("hero_subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-accent"
          >
            {tr("hero_cta")}
          </a>
          <a
            href="#pricing"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            {tr("hero_cta_secondary")}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16"
        >
          {[
            { value: "$29k+", label: tr("stat_saving") },
            { value: "24/7", label: tr("stat_response") },
            { value: "0%", label: tr("stat_leads") },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
