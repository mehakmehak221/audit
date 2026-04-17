import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  User, Mail, MessageSquare, Briefcase, 
  FileText, Cpu, Zap, Send, Loader2, AlertCircle,
  ShieldCheck, Clock, Mail as MailIcon
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
} from './ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { cn } from './ui/utils';

interface AuditFormValues {
  clientName: string;
  clientEmail: string;
  clientContact: string;
  projectName: string;
  projectDescription: string;
  blockchain: string;
  language: string;
  stage: string;
}

const SUCCESS_STEPS = [
  { icon: ShieldCheck, label: 'Request Logged', sub: 'Your submission has been securely recorded.' },
  { icon: Clock,       label: 'Under Review',  sub: 'Our lead auditors are reviewing your project.' },
  { icon: MailIcon,    label: 'Expect a Reply', sub: 'We\'ll contact you within 24 hours with a quote.' },
];

export function AuditForm({ className, onSuccess }: { className?: string; onSuccess?: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [clientName, setClientName] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const form = useForm<AuditFormValues>({
    defaultValues: {
      clientName: '',
      clientEmail: '',
      clientContact: '',
      projectName: '',
      projectDescription: '',
      blockchain: '',
      language: '',
      stage: '',
    },
  });

  const onSubmit = async (data: AuditFormValues) => {
    setSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('https://audit-backend-1.onrender.com/api/v1/audit/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          clientContact: data.clientContact,
          projectName: data.projectName,
          projectDescription: data.projectDescription,
          blockchain: data.blockchain,
          language: data.language,
          stage: data.stage,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.message || 'Submission failed. Please try again.');
      }

      setClientName(data.clientName);
      setSubmitStatus('success');
      setActiveStep(0);
      onSuccess?.();
      form.reset();
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus !== 'success') return;
    // Stagger each step lighting up using CSS animation-delay approach
    // All steps animate in; we just control visibility via CSS delay
    const t1 = setTimeout(() => setActiveStep(1), 700);
    const t2 = setTimeout(() => setActiveStep(2), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [submitStatus]);

  if (submitStatus === 'success') {
    return (
      <div className={cn('relative', className)}>
        <style>{`
          @keyframes sf-fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes sf-checkPop {
            0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
            65%  { transform: scale(1.12) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes sf-ring {
            0%   { transform: scale(1); opacity: 0.55; }
            100% { transform: scale(1.85); opacity: 0; }
          }
          @keyframes sf-shimmer {
            0%   { background-position: -200% center; }
            100% { background-position:  200% center; }
          }
          @keyframes sf-blink {
            0%, 100% { opacity: 0.35; }
            50%       { opacity: 1; }
          }
          @keyframes sf-stepIn {
            from { opacity: 0; transform: translateX(-14px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        `}</style>

        {/* Subtle ambient blobs — purely decorative, constrained */}
        <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none -z-0"
          style={{ background: 'radial-gradient(circle at top right, rgba(59,130,246,0.09) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-44 h-44 rounded-full pointer-events-none -z-0"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(99,102,241,0.08) 0%, transparent 65%)' }} />

        <div className="relative z-10 py-6 flex flex-col items-center text-center">

          {/* Icon + pulse rings */}
          <div className="relative inline-flex items-center justify-center mb-7"
            style={{ animation: 'sf-fadeUp 0.4s ease both' }}>
            <div className="absolute w-[120px] h-[120px] rounded-full"
              style={{ border: '1px solid rgba(59,130,246,0.25)', animation: 'sf-ring 2.2s ease-out 0.3s infinite' }} />
            <div className="absolute w-[90px] h-[90px] rounded-full"
              style={{ border: '1px solid rgba(59,130,246,0.35)', animation: 'sf-ring 2.2s ease-out 0.65s infinite' }} />
            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(145deg, rgba(59,130,246,0.18), rgba(99,102,241,0.12))',
                border: '1px solid rgba(59,130,246,0.35)',
                boxShadow: '0 0 36px rgba(59,130,246,0.22), inset 0 1px 0 rgba(255,255,255,0.07)',
                animation: 'sf-checkPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.08s both',
              }}>
              <ShieldCheck className="w-9 h-9 text-blue-400" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
            style={{ animation: 'sf-fadeUp 0.45s ease 0.12s both' }}>
            <span className="text-white">You&rsquo;re </span>
            {/* Use a wrapper div with isolation:isolate so gradient-text works reliably */}
            <span style={{ display: 'inline-block', isolation: 'isolate' }}>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #818cf8 45%, #93c5fd 100%)',
                  backgroundSize: '200% auto',
                  animation: 'sf-shimmer 2.8s linear infinite',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >all set!</span>
            </span>
          </h3>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-[15px] font-light leading-relaxed max-w-[280px] mb-8"
            style={{ animation: 'sf-fadeUp 0.45s ease 0.22s both' }}>
            {clientName
              ? <>Thanks, <span className="text-white font-medium">{clientName.split(' ')[0]}</span>! Your audit request has been received.</>
              : 'Your audit request has been received.'}
          </p>

          {/* Step cards */}
          <div className="w-full max-w-sm rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              animation: 'sf-fadeUp 0.45s ease 0.3s both',
            }}>
            {SUCCESS_STEPS.map(({ icon: Icon, label, sub }, i) => {
              const lit = i <= activeStep;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-[14px] transition-all duration-500"
                  style={{
                    borderBottom: i < SUCCESS_STEPS.length - 1
                      ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    opacity: lit ? 1 : 0.25,
                  }}
                >
                  {/* Step icon */}
                  <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500"
                    style={{
                      background: lit ? 'rgba(59,130,246,0.14)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${lit ? 'rgba(59,130,246,0.28)' : 'rgba(255,255,255,0.06)'}`,
                      boxShadow: lit ? '0 0 12px rgba(59,130,246,0.12)' : 'none',
                    }}>
                    <Icon className="w-4 h-4 transition-colors duration-500"
                      style={{ color: lit ? '#60a5fa' : '#374151' }} strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-sm font-semibold text-white/90 leading-tight">{label}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{sub}</p>
                  </div>

                  {/* Status badge */}
                  <div className="shrink-0">
                    {i === 0 && (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          style={{ animation: 'sf-blink 1.6s ease-in-out infinite' }} />
                        <span className="text-[9px] text-emerald-400 font-mono font-bold tracking-wider">DONE</span>
                      </div>
                    )}
                    {i === 1 && lit && (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"
                          style={{ animation: 'sf-blink 1.2s ease-in-out infinite' }} />
                        <span className="text-[9px] text-blue-400 font-mono font-bold tracking-wider">ACTIVE</span>
                      </div>
                    )}
                    {i === 2 && lit && (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span className="text-[9px] text-indigo-400 font-mono font-bold tracking-wider">PENDING</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-600"
            style={{ animation: 'sf-fadeUp 0.45s ease 0.45s both' }}>
            <MailIcon className="w-3.5 h-3.5 shrink-0" />
            <span>Check your inbox — we&rsquo;ll be in touch within 24 hours.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-transparent', className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:space-y-12">

      
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <div className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-focus-within:bg-blue-500/20 transition-colors">
                <User className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Client Information</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
              <FormField
                control={form.control}
                name="clientName"
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 md:w-4.5 h-4 md:h-4.5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                        <Input 
                          placeholder="John Doe" 
                          className="pl-11 h-11 md:h-12 bg-[#0d111c]/50 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20 text-sm md:text-base transition-all rounded-xl" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[11px] md:text-xs text-red-400/80" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="clientEmail"
                rules={{ 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                    message: "Invalid email"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">Email Address</FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 md:w-4.5 h-4 md:h-4.5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                        <Input 
                          placeholder="john@example.com" 
                          className="pl-11 h-11 md:h-12 bg-[#0d111c]/50 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20 text-sm md:text-base transition-all rounded-xl" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[11px] md:text-xs text-red-400/80" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="clientContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">Telegram / Discord <span className="text-gray-600 normal-case">(Optional)</span></FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 md:w-4.5 h-4 md:h-4.5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                      <Input 
                        placeholder="@username" 
                        className="pl-11 h-11 md:h-12 bg-[#0d111c]/50 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20 text-sm md:text-base transition-all rounded-xl" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Section 2: What is the project */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <div className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-focus-within:bg-purple-500/20 transition-colors">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Project Overview</h3>
            </div>

            <FormField
              control={form.control}
              name="projectName"
              rules={{ required: 'Project Name is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">Project Name</FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <Zap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                      <Input 
                        placeholder="e.g. DeFi Yield Protocol" 
                        className="pl-11 h-11 md:h-12 bg-[#0d111c]/50 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-purple-500/20 text-sm md:text-base transition-all rounded-xl" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-[11px] md:text-xs text-red-400/80" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDescription"
              rules={{ required: 'Project description is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">Description <span className="text-gray-600 normal-case">(1-2 lines)</span></FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                      <Textarea 
                        placeholder="A yield farming protocol on Ethereum with staking rewards..." 
                        className="pl-11 min-h-[90px] md:min-h-[110px] bg-[#0d111c]/50 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-purple-500/20 text-sm md:text-base transition-all rounded-xl resize-none" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-[11px] md:text-xs text-red-400/80" />
                </FormItem>
              )}
            />
          </div>

        
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <div className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Cpu className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Technical Details</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              <FormField
                control={form.control}
                name="blockchain"
                rules={{ required: 'Required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-xs font-medium uppercase tracking-wider">Blockchain</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 md:h-12 bg-[#0d111c]/50 border-white/10 text-white text-sm rounded-xl">
                          <SelectValue placeholder="Select network" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#111625] border-white/10 text-white">
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="solana">Solana</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="arbitrum">Arbitrum</SelectItem>
                        <SelectItem value="optimism">Optimism</SelectItem>
                        <SelectItem value="base">Base</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[11px] text-red-400/80" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="language"
                rules={{ required: 'Required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-xs font-medium uppercase tracking-wider">Language</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 md:h-12 bg-[#0d111c]/50 border-white/10 text-white text-sm rounded-xl">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#111625] border-white/10 text-white">
                        <SelectItem value="solidity">Solidity</SelectItem>
                        <SelectItem value="rust">Rust</SelectItem>
                        <SelectItem value="move">Move</SelectItem>
                        <SelectItem value="go">Go</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[11px] text-red-400/80" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stage"
                rules={{ required: 'Required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400 text-xs font-medium uppercase tracking-wider">Project Stage</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 md:h-12 bg-[#0d111c]/50 border-white/10 text-white text-sm rounded-xl">
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#111625] border-white/10 text-white">
                        <SelectItem value="Idea">Idea / Conceptual</SelectItem>
                        <SelectItem value="Dev">In Development</SelectItem>
                        <SelectItem value="Testnet">Testnet Live</SelectItem>
                        <SelectItem value="Mainnet">Mainnet / Production</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[11px] text-red-400/80" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="pt-8 md:pt-12 pb-4 space-y-4">
            {/* Error state */}
            {submitStatus === 'error' && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                style={{ animation: 'successFadeIn 0.3s ease both' }}
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Submission failed</p>
                  <p className="text-xs text-red-400/70 mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <Button 
              type="submit"
              disabled={submitting}
              className="w-full h-14 md:h-16 text-base md:text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:from-blue-800 disabled:to-blue-700 disabled:cursor-not-allowed text-white rounded-xl md:rounded-2xl shadow-xl shadow-blue-500/20 group transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-blue-500/40 active:scale-[0.98]"
            >
              <span className="flex items-center gap-3">
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Audit Request
                    <Send className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </span>
            </Button>
            <p className="text-center text-gray-500 text-[11px] md:text-sm font-light">
              By submitting, you agree to our <a href="#" className="underline hover:text-blue-400 transition-colors">terms</a> and confidentiality protocols.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
