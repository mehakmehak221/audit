import { motion } from "motion/react";
import {
  Award,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Lock,
} from "lucide-react";

const mainStats = [
  {
    icon: Award,
    value: "47",
    unit: "+",
    label: "Audits Completed",
    detail: "Across 8 blockchain networks",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: DollarSign,
    value: "$50",
    unit: "M+",
    label: "Total Value Secured",
    detail: "Assets protected from exploits",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: TrendingUp,
    value: "230",
    unit: "+",
    label: "Vulnerabilities Found",
    detail: "38 critical severity issues",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Users,
    value: "100",
    unit: "%",
    label: "Client Retention",
    detail: "Zero breaches post-audit",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
];

export function StatsShowcase() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 mb-6 border border-blue-500/30 px-4 py-2 rounded-full bg-blue-500/5"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>IMPACT METRICS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Security at scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Protecting billions in assets through rigorous security analysis
          </motion.p>
        </div>

        {/* Enhanced stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-black border ${stat.borderColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${stat.bgColor} ${stat.borderColor} border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon
                    className={`w-7 h-7 ${stat.color}`}
                    strokeWidth={2}
                  />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                    <span className={`text-3xl font-bold ${stat.color}`}>
                      {stat.unit}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>

                {/* Detail */}
                <div className="text-sm text-gray-500">{stat.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced service highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              label: "Avg Response Time",
              value: "<24h",
              icon: Zap,
              color: "blue",
            },
            {
              label: "Standard Delivery",
              value: "7-10 days",
              icon: Shield,
              color: "purple",
            },
            {
              label: "Post-Audit Support",
              value: "30 days",
              icon: Lock,
              color: "cyan",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`relative bg-black border-2 border-${item.color}-500/20 rounded-xl p-6 group hover:border-${item.color}-500/40 transition-all`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className={`text-3xl font-bold text-${item.color}-400`}>
                    {item.value}
                  </div>
                </div>
                <div
                  className={`w-12 h-12 bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
