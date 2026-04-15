import { motion } from "motion/react";
import {
  Shield,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  Code,
  Bug,
  FileCheck,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Smart Contract Audits",
    desc: "Comprehensive security review with automated + manual analysis",
    color: "from-blue-500/20 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Zap,
    title: "Gas Optimization",
    desc: "Reduce transaction costs by 20-40% without compromising security",
    color: "from-yellow-500/20 to-transparent",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Target,
    title: "Penetration Testing",
    desc: "Real-world attack simulation and exploit development",
    color: "from-purple-500/20 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
];

const timeline = [
  {
    phase: "0-2d",
    title: "Automated Analysis",
    desc: "Slither, Mythril, pattern detection",
    icon: Code,
    color: "blue",
  },
  {
    phase: "3-6d",
    title: "Manual Review",
    desc: "Line-by-line, business logic, access control",
    icon: Bug,
    color: "purple",
  },
  {
    phase: "5-7d",
    title: "Adversarial Testing",
    desc: "Fork testing, exploit dev, fuzzing",
    icon: Target,
    color: "orange",
  },
  {
    phase: "7-10d",
    title: "Report & Fix",
    desc: "PDF delivery, consultation, verification",
    icon: FileCheck,
    color: "green",
  },
];

export function ServicesAuditProcess() {
  return (
    <section id="services" className="relative py-32 px-6 bg-black">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Services */}
        <div className="mb-40">
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 mb-6 border border-blue-500/30 px-4 py-2 rounded-full bg-blue-500/5"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>OUR SERVICES</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              What we do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 font-light leading-relaxed"
            >
              Full-stack security from code analysis to economic modeling
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative group bg-gradient-to-br from-gray-900/80 to-black border ${service.borderColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300 overflow-hidden`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`mb-8 w-16 h-16 rounded-2xl ${service.iconBg} border ${service.borderColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${service.iconColor}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {service.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 group-hover:text-blue-400 transition-colors">
                    <span className="font-mono">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audit Process Timeline */}
        <div id="process">
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 mb-6 border border-blue-500/30 px-4 py-2 rounded-full bg-blue-500/5"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>OUR PROCESS</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              7-10 day delivery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 font-light leading-relaxed"
            >
              Structured methodology with parallel workstreams for faster
              delivery
            </motion.p>
          </div>

          {/* Enhanced Visual Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 hidden lg:block opacity-30" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline marker */}
                  <div className="relative mb-10">
                    <div
                      className={`w-20 h-20 rounded-2xl border-4 border-${step.color}-500 bg-black flex items-center justify-center mx-auto relative z-10 group-hover:scale-110 transition-transform shadow-lg shadow-${step.color}-500/20`}
                    >
                      <div className="text-center">
                        <div className="font-mono text-xs text-gray-500 mb-0.5">
                          Day
                        </div>
                        <div
                          className={`font-mono text-sm text-${step.color}-400 font-bold`}
                        >
                          {step.phase}
                        </div>
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-${step.color}-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`bg-gradient-to-br from-gray-900/80 to-black border border-${step.color}-500/20 rounded-2xl p-6 group-hover:border-${step.color}-500/40 transition-all group-hover:scale-105`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 bg-${step.color}-500/10 border border-${step.color}-500/20 rounded-xl flex items-center justify-center mb-4`}
                    >
                      <step.icon
                        className={`w-6 h-6 text-${step.color}-400`}
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Mobile arrow */}
                  {i < timeline.length - 1 && (
                    <div className="flex justify-center my-6 lg:hidden">
                      <ArrowRight className="w-6 h-6 text-gray-800" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
