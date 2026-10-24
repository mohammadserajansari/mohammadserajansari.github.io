import React, { useState, useMemo } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, Copy, Check, Download, Radio, Sparkles, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Dispatch',
    value: 'mail.serajansari@gmail.com',
    href: 'mailto:mail.serajansari@gmail.com',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Direct Line',
    value: '+91- 9628104350',
    href: 'tel:+919628104350',
    copyable: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn Network',
    value: 'linkedin.com/in/ansariserajmd',
    href: 'https://www.linkedin.com/in/ansariserajmd/',
    copyable: false,
  },
  {
    icon: Github,
    label: 'GitHub Repositories',
    value: 'github.com/mohammadserajansari',
    href: 'https://github.com/mohammadserajansari',
    copyable: false,
  },
  {
    icon: MapPin,
    label: 'Base Station',
    value: 'Varanasi, Uttar Pradesh, India',
    copyable: false,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const { toast } = useToast();

  // Detect email provider from entered email
  const detectedProvider = useMemo(() => {
    const email = formData.email.trim().toLowerCase();
    if (email.includes('@gmail') || email.includes('@googlemail')) {
      return 'gmail';
    }
    if (
      email.includes('@outlook') ||
      email.includes('@hotmail') ||
      email.includes('@live') ||
      email.includes('@msn') ||
      email.includes('@microsoft')
    ) {
      return 'microsoft';
    }
    return 'other';
  }, [formData.email]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    toast({
      title: 'Copied to clipboard!',
      description: `${label}: ${text}`,
    });
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const getEncodedData = () => {
    const subject = formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`;
    const body = `Hi Seraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact System`;
    return {
      encodedSubject: encodeURIComponent(subject),
      encodedBody: encodeURIComponent(body),
      rawSubject: subject,
      rawBody: body,
    };
  };

  // Open in Google Gmail
  const openGmail = () => {
    const { encodedSubject, encodedBody } = getEncodedData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mail.serajansari@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    toast({
      title: 'Opening Google Gmail...',
      description: 'Your message has been pre-filled in Gmail. Just click "Send" to transmit!',
    });
  };

  // Open in Microsoft Outlook / Office 365
  const openOutlook = () => {
    const { encodedSubject, encodedBody } = getEncodedData();
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=mail.serajansari@gmail.com&subject=${encodedSubject}&body=${encodedBody}`;
    window.open(outlookUrl, '_blank', 'noopener,noreferrer');
    toast({
      title: 'Opening Microsoft Outlook...',
      description: 'Your message has been pre-filled in Outlook. Just click "Send" to transmit!',
    });
  };

  // Open in Default Mail Client
  const openMailto = () => {
    const { encodedSubject, encodedBody } = getEncodedData();
    window.location.href = `mailto:mail.serajansari@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Direct Web Dispatch using Web3Forms endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b94e33b0-58c9-4a94-87cf-4a37827e85c1', // Public web3forms dispatch key for static portfolio
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Inquiry from ${formData.name}`,
          message: formData.message,
          to_email: 'mail.serajansari@gmail.com',
          from_name: 'Mohammad Seraj Portfolio',
        }),
      });

      const resData = await response.json().catch(() => null);

      if (response.ok && resData?.success) {
        setSendSuccess(true);
        toast({
          title: 'Transmission Delivered Successfully!',
          description: 'Your message has been routed directly to mail.serajansari@gmail.com.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: Smart provider trigger based on entered email
        if (detectedProvider === 'gmail') {
          openGmail();
        } else if (detectedProvider === 'microsoft') {
          openOutlook();
        } else {
          openMailto();
        }
        setSendSuccess(true);
      }
    } catch {
      // Offline / Network fallback
      if (detectedProvider === 'gmail') {
        openGmail();
      } else if (detectedProvider === 'microsoft') {
        openOutlook();
      } else {
        openMailto();
      }
      setSendSuccess(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-secondary/20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(187_86%_42%_/_0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4">
            <Radio className="h-3.5 w-3.5 animate-pulse" />
            <span>COMMUNICATION ARRAY // UPLINK</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Initiate <span className="gradient-text">Connection</span>
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Available for AI Solution Engineering opportunities, enterprise agentic consulting, 
            research collaborations, and high-impact ML initiatives.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Cards & Direct Resume */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-bold font-display text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Direct Transmission Nodes
            </h4>

            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-card border border-border/80 card-glow flex items-center justify-between gap-4 group hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-muted-foreground uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>

                {item.copyable && (
                  <button
                    onClick={() => handleCopy(item.value, item.label)}
                    title="Copy to clipboard"
                    className="p-2 rounded-lg bg-secondary/80 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
                  >
                    {copiedItem === item.label ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>
            ))}

            {/* Direct Resume Download Card */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-primary/10 via-card to-card border border-primary/30 flex items-center justify-between gap-4 mt-6">
              <div>
                <p className="text-xs font-mono text-primary font-semibold">
                  OFFICIAL RESUME (PDF)
                </p>
                <p className="text-sm font-bold text-foreground">
                  Mohammad Seraj
                </p>
                <p className="text-xs text-muted-foreground">Updated October 2026</p>
              </div>

              <Button size="sm" className="font-mono gap-1.5" asChild>
                <a href="/Mohammad_Seraj_Resume.pdf" download="Mohammad_Seraj_Resume.pdf">
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Interactive Message Console with Multi-Provider Support */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-card border border-border/80 card-glow shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-lg font-bold font-display text-foreground">
                Transmit a Message
              </h4>
              {detectedProvider === 'gmail' && (
                <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[11px] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  Gmail Detected
                </span>
              )}
              {detectedProvider === 'microsoft' && (
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Microsoft Outlook Detected
                </span>
              )}
            </div>

            <p className="text-xs font-mono text-muted-foreground mb-6">
              Direct telemetry routed to Seraj's inbox at <span className="text-primary font-semibold">mail.serajansari@gmail.com</span>.
            </p>

            {sendSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Message dispatched! Seraj will review and get back to you promptly.</span>
                </div>
                <button
                  onClick={() => setSendSuccess(false)}
                  className="text-xs underline hover:text-emerald-300"
                >
                  Dismiss
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-muted-foreground uppercase text-[10px]">
                    Your Name *
                  </label>
                  <Input
                    placeholder="e.g. Dr. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/40 border-border focus:border-primary text-xs font-mono"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-muted-foreground uppercase text-[10px]">
                    Your Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="name@gmail.com or name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/40 border-border focus:border-primary text-xs font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-muted-foreground uppercase text-[10px]">
                  Subject Line
                </label>
                <Input
                  placeholder="AI Solution Engineering / Project Consultation"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-secondary/40 border-border focus:border-primary text-xs font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-muted-foreground uppercase text-[10px]">
                  Transmission Payload (Message) *
                </label>
                <Textarea
                  placeholder="Describe your project, timeline, or consultation objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/40 border-border focus:border-primary resize-none text-xs font-mono"
                />
              </div>

              {/* Main Submit Action */}
              <Button
                type="submit"
                size="lg"
                disabled={isSending}
                className="w-full font-mono group gap-2 shadow-lg shadow-primary/10"
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Transmitting Payload...
                  </>
                ) : (
                  <>
                    Send Transmission
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Multi-Provider 1-Click Dispatch Buttons */}
              <div className="pt-2">
                <p className="text-[10px] text-muted-foreground font-mono mb-2 uppercase text-center">
                  Or launch directly in your preferred email web app:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={openGmail}
                    className="px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>🔴 Send via Gmail</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                  <button
                    type="button"
                    onClick={openOutlook}
                    className="px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>🔵 Send via Outlook</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
