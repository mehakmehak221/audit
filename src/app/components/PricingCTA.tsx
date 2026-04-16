import { motion } from 'motion/react';
import { Check, Star, ArrowRight, Mail, DollarSign, Sparkles } from 'lucide-react';
import { AuditModal } from './AuditModal';

const plans = [
  {
    name: 'Standard',
    price: 'Custom',
    timeline: '7-10 days',
    features: [
      'Automated + manual review',
      'Detailed PDF report',
      '1 round of fixes',
      'Post-audit consultation',
      'Security badge'
    ],
    color: 'blue'
  },
  {
    name: 'Comprehensive',
    price: 'Custom',
    timeline: '10-14 days',
    featured: true,
    features: [
      'Everything in Standard',
      'Adversarial testing',
      'Economic modeling',
      'Unlimited fix rounds',
      '30-day support window',
      'Priority response'
    ],
    color: 'purple'
  },
  {
    name: 'Retainer',
    price: 'Monthly',
    timeline: 'Ongoing',
    features: [
      'Quarterly full audits',
      'Continuous review',
      'Priority support 24/7',
      'Team training',
      'Incident response',
      'Dedicated auditor'
    ],
    color: 'cyan'
  }
];

export function PricingCTA() {
  return (
    <section id="pricing" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        animate={{ 
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto relative">
        {/* Pricing */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 mb-6 border border-blue-500/30 px-4 py-2 rounded-full bg-blue-500/5"
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>TRANSPARENT PRICING</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Flexible engagement
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 font-light leading-relaxed"
            >
              Custom pricing based on codebase complexity and scope
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-gradient-to-br from-gray-900/80 to-black border rounded-2xl p-8 transition-all duration-300 ${
                  plan.featured 
                    ? 'border-blue-500 md:scale-110 shadow-2xl shadow-blue-500/20' 
                    : 'border-gray-800 hover:border-gray-700 hover:scale-105'
                }`}
              >
                {plan.featured && (
                  <>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
                    
                    {/* Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 text-xs font-bold font-mono flex items-center gap-1.5 rounded-full shadow-lg shadow-blue-500/50">
                      <Star className="w-3.5 h-3.5" fill="currentColor" />
                      MOST POPULAR
                    </div>
                  </>
                )}

                <div className="relative">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-3 ${plan.featured ? 'text-blue-400' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <div className={`text-5xl font-bold ${plan.featured ? 'text-blue-400' : 'text-white'}`}>
                        {plan.price}
                      </div>
                      {plan.price !== 'Custom' && plan.price !== 'Monthly' && (
                        <span className="text-gray-500">/audit</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                      <div className={`w-2 h-2 rounded-full ${plan.featured ? 'bg-blue-500' : 'bg-gray-700'}`} />
                      {plan.timeline} delivery
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${plan.featured ? 'bg-blue-500/20 border-2 border-blue-500' : 'bg-gray-800 border border-gray-700'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 ${plan.featured ? 'text-blue-400' : 'text-gray-500'}`} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-400 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <AuditModal>
                    <button 
                      className={`block w-full py-4 font-semibold rounded-lg transition-all text-center cursor-pointer ${
                      plan.featured
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                        : 'border-2 border-gray-800 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5'
                    }`}>
                      Get Quote
                    </button>
                  </AuditModal>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Multiple glow layers */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-10" />
          
          <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent border-2 border-blue-500/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Animated grid overlay */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />

            <div className="max-w-3xl mx-auto relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 mb-8 border border-blue-500/30 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-semibold">Available now</span>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>&lt;24h response time</span>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to secure
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  your protocol?
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                Get a custom quote based on your codebase. Our team responds within 24 hours with a detailed proposal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <AuditModal>
                  <button 
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-5 font-bold text-lg hover:from-blue-500 hover:to-blue-400 transition-all hover:shadow-2xl hover:shadow-blue-500/40 inline-flex items-center gap-3 justify-center rounded-lg overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative">Request Audit</span>
                    <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                  </button>
                </AuditModal>
                
                <a 
                  href="mailto:support@maxtron.io"
                  className="border-2 border-gray-700 text-gray-300 px-10 py-5 font-semibold hover:border-blue-500 hover:text-white hover:bg-blue-500/5 transition-all inline-flex items-center gap-3 justify-center group rounded-lg"
                >
                  <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  support@maxtron.io
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                {[
                  'Free initial consultation',
                  'NDA available',
                  'Flexible payment terms'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-400" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
