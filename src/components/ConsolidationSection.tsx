import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Check } from "lucide-react";

const tools = [
  { name: "CRM & Pipeline Management", replaces: "HubSpot", cost: "$997" },
  { name: "AI Agents", replaces: "Sintra & Others", cost: "$97" },
  { name: "Unlimited Sales Funnels", replaces: "ClickFunnels", cost: "$297" },
  { name: "Website Builder", replaces: "WordPress, Wix", cost: "$29" },
  { name: "Email Marketing", replaces: "Mailchimp", cost: "$99" },
  { name: "SMS Marketing", replaces: "Twilio", cost: "$99" },
  { name: "Booking & Appointments", replaces: "Calendly", cost: "$29" },
  { name: "Workflow Automations", replaces: "Zapier", cost: "$169" },
  { name: "Call Tracking", replaces: "CallRail", cost: "$49" },
  { name: "Tracking & Analytics", replaces: "Google Analytics Pro", cost: "$299" },
];

const ConsolidationSection = () => {
  const { tr } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-soft text-accent-foreground text-sm font-medium px-4 py-1 rounded-full mb-4">
            {tr("consol_badge")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {tr("consol_title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {tr("consol_subtitle")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 bg-secondary px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-5">Feature</div>
              <div className="col-span-4">Replaces</div>
              <div className="col-span-2 text-right">Cost</div>
              <div className="col-span-1 text-center">
                <span className="text-accent">✓</span>
              </div>
            </div>

            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-12 px-6 py-3 border-t border-border items-center text-sm"
              >
                <div className="col-span-5 font-medium text-foreground">{tool.name}</div>
                <div className="col-span-4 text-muted-foreground">{tool.replaces}</div>
                <div className="col-span-2 text-right text-muted-foreground">{tool.cost}{tr("consol_monthly")}</div>
                <div className="col-span-1 flex justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
              </motion.div>
            ))}

            {/* Footer comparison */}
            <div className="border-t border-border bg-secondary/50 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">{tr("consol_without")}</div>
                  <div className="text-2xl font-bold text-foreground line-through opacity-60">$2,165{tr("consol_monthly")}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-accent font-medium">{tr("consol_with")}</div>
                  <div className="text-2xl font-bold text-gradient">$197{tr("consol_monthly")}</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">{tr("consol_footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default ConsolidationSection;
