import { MessageSquareHeart, ArrowRight } from 'lucide-react';

export default function FeedbackCTA() {
  return (
    <div className="my-16 relative overflow-hidden rounded-3xl">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/10 to-neutral-400/10 rounded-3xl light:from-accent-teal/5 light:to-neutral-400/5" />
      
      {/* Animated background circles */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-teal/20 rounded-full blur-3xl animate-ping-slow light:bg-accent-teal/10" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neutral-400/20 rounded-full blur-3xl animate-ping-slow delay-700 light:bg-neutral-400/10" />
      
      <div className="relative px-4 py-12 md:py-16 flex flex-col items-center text-center max-w-full mx-auto lg:px-12">
        <div className="bg-primary-light/90 backdrop-blur-sm p-4 rounded-full mb-6 text-accent-teal border border-accent-teal/30 light:bg-white/80 light:text-accent-teal">
          <MessageSquareHeart size={32} />
        </div>  
        
        <h2 className="text-h2 font-bold text-text-primary mb-4">
          Help Shape the Future of Physics Research
        </h2>
        
        <p className="text-body-lg text-text-secondary mb-8 max-w-2xl">
          Your feedback is invaluable! Share your thoughts on our research theories 
          and help us improve our scientific understanding.
        </p>
        
        <a
          href="https://forms.google.com/your-form-id"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-gradient-to-r from-accent-teal to-neutral-400 text-primary-dark px-8 py-4 rounded-button font-semibold text-body-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          Share Your Feedback
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="mt-4 text-sm text-text-secondary">
          Takes only 2 minutes • Your responses are anonymous
        </p>
      </div>
    </div>
  );
}