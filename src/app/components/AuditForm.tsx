import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  User, Mail, MessageSquare, Briefcase, 
  FileText, Cpu, Zap, Send, Loader2, CheckCircle2, AlertCircle
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

export function AuditForm({ className }: { className?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

      setSubmitStatus('success');
      form.reset();
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("bg-[#111625]/50 backdrop-blur-xl border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-6 shadow-2xl", className)}
    >
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
            {/* Success state */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Request submitted successfully!</p>
                  <p className="text-xs text-green-400/70 mt-0.5">Our lead auditors will get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            {/* Error state */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Submission failed</p>
                  <p className="text-xs text-red-400/70 mt-0.5">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            <Button 
              type="submit"
              disabled={submitting || submitStatus === 'success'}
              className="w-full py-7 md:py-9 text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:from-blue-800 disabled:to-blue-700 disabled:cursor-not-allowed text-white rounded-xl md:rounded-2xl shadow-xl shadow-blue-500/20 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/40 active:scale-[0.98]"
            >
              <span className="flex items-center gap-3">
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Request Submitted!
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
    </motion.div>
  );
}
