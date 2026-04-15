import { motion } from "motion/react";
import {
  ArrowRight,
  Shield,
  Sparkles,
  Lock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0e1a] overflow-hidden pt-20">
      {/* Advanced animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Enhanced blue glows with movement */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-[900px] h-[900px] bg-blue-500 rounded-full blur-[200px] opacity-[0.15]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[180px] opacity-[0.1]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Enhanced floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 py-32 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 mb-8 border border-blue-500/20 px-5 py-2.5 rounded-full bg-blue-500/5 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 font-semibold">
                Live Audits Available
              </span>
              <span className="text-gray-700">•</span>
              <span className="text-gray-400">&lt;24h response</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.85]">
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AUDIT
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                WITH
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                CONFIDENCE
                {/* Enhanced glowing underline */}
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-400 leading-relaxed mb-12 max-w-xl font-light"
            >
              Enterprise security audits for smart contracts.
              <span className="text-white block mt-3 font-normal">
                Before they cost you millions.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-5 text-lg font-bold hover:from-blue-500 hover:to-blue-400 transition-all hover:shadow-2xl hover:shadow-blue-500/40 inline-flex items-center gap-3 justify-center overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Request Audit</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border-2 border-gray-800 text-gray-300 px-10 py-5 text-lg font-semibold hover:border-blue-500 hover:text-white hover:bg-blue-500/5 transition-all inline-flex items-center gap-3 justify-center group rounded-lg">
                <Shield className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                View Reports
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Security Score Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Enhanced glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-3xl rounded-2xl" />

              {/* Main Security Score Card */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl border border-gray-800/80 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 p-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-between mb-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500/20 border-2 border-blue-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-mono">
                        Security Analysis
                      </div>
                      <div className="text-white font-bold">
                        Smart Contract Audit
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    COMPLETE
                  </div>
                </motion.div>

                {/* Large Security Score */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                  className="text-center mb-12"
                >
                  <div className="relative inline-block">
                    {/* Circular progress background */}
                    <svg className="w-56 h-56 -rotate-90" viewBox="0 0 200 200">
                      {/* Background circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="85"
                        fill="none"
                        stroke="#1f2937"
                        strokeWidth="12"
                      />
                      {/* Animated progress circle */}
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="85"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 534 }}
                        animate={{ strokeDashoffset: 53.4 }}
                        transition={{
                          duration: 2,
                          delay: 1.2,
                          ease: "easeOut",
                        }}
                        style={{
                          strokeDasharray: 534,
                        }}
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#60A5FA" />
                          <stop offset="100%" stopColor="#22D3EE" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Score in center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-7xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                      >
                        90
                      </motion.div>
                      <div className="text-gray-500 text-sm font-mono uppercase tracking-wider">
                        Security Score
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Security Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      label: "Code Quality",
                      value: "A+",
                      icon: CheckCircle2,
                      color: "text-green-400",
                      delay: 1.6,
                    },
                    {
                      label: "Gas Optimized",
                      value: "85%",
                      icon: CheckCircle2,
                      color: "text-blue-400",
                      delay: 1.7,
                    },
                    {
                      label: "Best Practices",
                      value: "A",
                      icon: CheckCircle2,
                      color: "text-cyan-400",
                      delay: 1.8,
                    },
                  ].map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: metric.delay }}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center"
                    >
                      <metric.icon
                        className={`w-5 h-5 ${metric.color} mx-auto mb-2`}
                      />
                      <div className={`text-xl font-bold ${metric.color} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 font-mono">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                  className="mt-8 space-y-3"
                >
                  {[
                    { label: "Access Control", status: "Secure", icon: Lock },
                    {
                      label: "Reentrancy Protection",
                      status: "Implemented",
                      icon: Shield,
                    },
                    {
                      label: "Integer Overflow",
                      status: "Safe",
                      icon: CheckCircle2,
                    },
                  ].map((check, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-900/30 border border-gray-800/50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <check.icon className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-400">
                          {check.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-xs text-green-400 font-mono">
                          {check.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 2.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 border-2 border-blue-400/50 rounded-2xl px-8 py-6 shadow-2xl shadow-blue-500/40 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-white/80 animate-pulse" />
                  <div className="text-xs text-blue-100 font-mono uppercase tracking-wider font-bold">
                    Value Protected
                  </div>
                </div>
                <div className="text-6xl font-bold text-white">$50M+</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
