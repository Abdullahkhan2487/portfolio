import React from 'react';
import { Send } from 'lucide-react';
import { site } from '../../config/site.js';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export default function Contact() {
    const revealRef = useScrollReveal();

    return (
        <section id="contact" className="py-28 relative">
            <div className="absolute -left-32 top-1/4 w-72 h-72 rounded-full bg-primary-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute -right-32 bottom-1/4 w-72 h-72 rounded-full bg-secondary-500/10 blur-[100px] pointer-events-none" />

            <div ref={revealRef} className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="reveal-item">
                    <SectionHeading
                        title="Get In"
                        highlight="Touch"
                        subtitle="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
                    />
                </div>

                <GlassCard strong className="reveal-item p-8 md:p-12">
                    <form className="space-y-6" action={site.formspree} method="POST">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-mono text-white/60 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 glass-input text-white placeholder-white/30 transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-mono text-white/60 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 glass-input text-white placeholder-white/30 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-mono text-white/60 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 glass-input text-white placeholder-white/30 transition-all"
                                placeholder="What's this about?"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-mono text-white/60 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                className="w-full px-4 py-3 glass-input text-white placeholder-white/30 transition-all resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </form>
                </GlassCard>
            </div>
        </section>
    );
}
