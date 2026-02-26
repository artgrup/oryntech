import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Users, Zap, Bot, TrendingUp, Mail, Calendar } from "lucide-react";

const features = [
  { icon: Users, titleKey: "feat_crm_title", descKey: "feat_crm_desc" },
  { icon: Zap, titleKey: "feat_auto_title", descKey: "feat_auto_desc" },
  { icon: Bot, titleKey: "feat_ai_title", descKey: "feat_ai_desc" },
  { icon: TrendingUp, titleKey: "feat_funnel_title", descKey: "feat_funnel_desc" },
  { icon: Mail, titleKey: "feat_email_title", descKey: "feat_email_desc" },
  { icon: Calendar, titleKey: "feat_booking_title", descKey: "feat_booking_desc" },
];

const FeaturesSection = () => {
  const { tr } = useLanguage();

  return (
    <section id="features" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-soft text-accent-foreground text-sm font-medium px-4 py-1 rounded-full mb-4">
            {tr("features_badge")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {tr("features_title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {tr("features_subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-shadow group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {tr(feat.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tr(feat.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
