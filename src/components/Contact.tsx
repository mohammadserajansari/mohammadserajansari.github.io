import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mail.serajansari@gmail.com',
    href: 'mailto:mail.serajansari@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/ansariserajmd/',
    href: 'https://www.linkedin.com/in/ansariserajmd/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'https://github.com/mohammadserajansari',
    href: 'https://github.com/mohammadserajansari',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Varanasi, Uttar Pradesh, India',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9628104350',
    href: 'tel:+919628104350',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a static site - show a message about emailing directly
    toast({
      title: 'Thanks for reaching out!',
      description: 'Please email me directly at mail.serajansari@gmail.com for the fastest response.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(187_86%_42%_/_0.08)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Get in Touch</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in AI/ML collaboration, research opportunities, or have a project in mind? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-glow group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="text-xl font-bold mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Or email me directly at{' '}
                <a href="mailto:mail.serajansari@gmail.com" className="text-primary hover:underline">
                  mail.serajansari@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
