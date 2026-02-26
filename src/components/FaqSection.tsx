import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const { tr } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: tr("faq_q1"), a: tr("faq_a1") },
    { q: tr("faq_q2"), a: tr("faq_a2") },
    { q: tr("faq_q3"), a: tr("faq_a3") },
    { q: tr("faq_q4"), a: tr("faq_a4") },
    { q: tr("faq_q5"), a: tr("faq_a5") },
    { q: tr("faq_q6"), a: tr("faq_a6") },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-soft text-accent-foreground text-sm font-medium px-4 py-1 rounded-full mb-4">
            {tr("faq_badge")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {tr("faq_title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {tr("faq_subtitle")}
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-foreground text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
