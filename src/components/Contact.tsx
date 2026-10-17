import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, Copy, Check, Download, Radio, Sparkles } from 'lucide-react';
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
    value: '+91 9628104350',
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
    value: 'Varanasi, UP, India (Open to Remote / Relocation)',
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
  const { toast } = useToast();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    toast({
      title: 'Copied to clipboard!',
      description: `${label}: ${text}`,
    });
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} via Portfolio`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open user's default email client
    window.location.href = `mailto:mail.serajansari@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    toast({
      title: 'Email client opening...',
      description: 'Your pre-formatted message is ready to send to mail.serajansari@gmail.com',
    });
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
                  Mohammad Seraj Ansari
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

          {/* Right: Interactive Message Console */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-card border border-border/80 card-glow shadow-xl">
            <h4 className="text-lg font-bold font-display text-foreground mb-1">
              Transmit a Message
            </h4>
            <p className="text-xs font-mono text-muted-foreground mb-6">
              Direct telemetry routed to Seraj's primary mailbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-muted-foreground uppercase text-[10px]">
                    Your Name
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
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="name@company.com"
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
                  placeholder="AI Solution Engineering / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-secondary/40 border-border focus:border-primary text-xs font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-muted-foreground uppercase text-[10px]">
                  Transmission Payload (Message)
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

              <Button type="submit" size="lg" className="w-full font-mono group gap-2">
                Send Transmission
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
