import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Check } from "lucide-react";

const PricingSection = () => {
  const { tr } = useLanguage();

  const features = [
    tr("pricing_feat_1"),
    tr("pricing_feat_2"),
    tr("pricing_feat_3"),
    tr("pricing_feat_4"),
    tr("pricing_feat_5"),
    tr("pricing_feat_6"),
    tr("pricing_feat_7"),
    tr("pricing_feat_8"),
  ];

  const plans = [
    {
      name: tr("pricing_6m"),
      badge: tr("pricing_popular"),
      price: "297",
      perMonth: tr("pricing_per_month"),
      features: features.slice(0, 6),
      highlighted: false,
    },
    {
      name: tr("pricing_12m"),
      badge: tr("pricing_best"),
      price: "237",
      perMonth: tr("pricing_per_month"),
      save: tr("pricing_save"),
      features: features,
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-soft text-accent-foreground text-sm font-medium px-4 py-1 rounded-full mb-4">
            {tr("pricing_badge")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {tr("pricing_title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {tr("pricing_subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-2 border-accent shadow-accent"
                  : "bg-card border border-border"
              }`}
            >
              {plan.save && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {plan.save}
                </span>
              )}

              <div className="mb-6">
                <span className={`text-xs font-semibold uppercase tracking-wider ${plan.highlighted ? "text-accent" : "text-accent"}`}>
                  {plan.badge}
                </span>
                <h3 className="font-display text-xl font-bold mt-1">{plan.name}</h3>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.perMonth}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground shadow-accent"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {tr("pricing_cta")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
