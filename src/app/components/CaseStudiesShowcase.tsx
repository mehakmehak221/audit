import { motion } from "motion/react";
import { Shield, TrendingUp, CheckCircle2 } from "lucide-react";

const cases = [
  {
    project: "Ulalo",
    // type: "DeFi Protocol",
    // tvl: "$2M",
    outcome:
      "All critical issues resolved pre-launch. Protocol successfully deployed with zero security incidents.",
    tech: ["Solidity", "ERC-20", "AMM", "Uniswap V2"],
    gradient: "from-blue-500/10 via-purple-500/5 to-transparent",
    borderColor: "border-blue-500/20",
  },
  {
    project: "Creator Console",
    // type: "NFT Marketplace",
    // tvl: "$1.2M",
    outcome:
      "30% gas cost reduction achieved alongside security hardening. Optimized for high-volume trading.",
    tech: ["Solidity", "ERC-721", "ERC-1155", "IPFS"],
    gradient: "from-purple-500/10 via-cyan-500/5 to-transparent",
    borderColor: "border-purple-500/20",
  },
  {
    project: "DexSwap",
    // type: "DEX Aggregator",
    // tvl: "$5M",
    outcome:
      "Comprehensive security audit completed. Multiple attack vectors identified and patched before mainnet launch.",
    tech: ["Solidity", "Multi-chain", "Router V3"],
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    borderColor: "border-cyan-500/20",
  },
];

export function CaseStudiesShowcase() {
  return (
    <section id="cases" className="relative py-32 px-6 bg-[#0a0e1a]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #3B82F6 1px, transparent 1px), linear-gradient(-45deg, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 mb-6 border border-blue-500/30 px-4 py-2 rounded-full bg-blue-500/5"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>CASE STUDIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Recent audits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light leading-relaxed"
          >
            Real protocols, real impact
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.project}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl`}
              />

              <div
                className={`relative bg-black border ${item.borderColor} hover:border-opacity-40 transition-all rounded-2xl p-8 group-hover:scale-105 duration-300 h-full flex flex-col`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                    {item.project}
                  </h3>
                  {/* <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-500 font-medium">
                      {item.type}
                    </span>
                    <span className="text-gray-800">•</span>
                    <span className="text-blue-400 font-mono font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.tvl}
                    </span>
                  </div> */}
                </div>

                {/* Outcome */}
                <div className="mb-6 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <div className="font-mono text-xs text-gray-600 uppercase tracking-wider">
                      Outcome
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.outcome}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="pt-6 border-t border-gray-900">
                  <div className="text-xs text-gray-600 font-mono uppercase tracking-wider mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-gray-800 px-3 py-1.5 text-xs text-gray-400 font-mono rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
