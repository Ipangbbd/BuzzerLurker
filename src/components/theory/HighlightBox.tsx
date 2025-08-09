import React from 'react';
import { Lightbulb } from 'lucide-react';

type HighlightBoxProps = {
  title: string;
  children: React.ReactNode;
};

export default function HighlightBox({ title, children }: HighlightBoxProps) {
  return (
    <div className="bg-primary-light border border-primary-dark rounded-card p-6 my-6 relative light:bg-white light:border-neutral-300">
      <div className="absolute -top-3 left-6 bg-primary-dark px-3 py-1 rounded-small flex items-center gap-2 border border-primary-light light:bg-neutral-900 light:border-neutral-700">
        <Lightbulb size={16} className="text-accent-teal" />
        <span className="font-semibold text-text-primary text-sm">{title}</span>
      </div>
      <p className="text-text-secondary leading-relaxed">{children}</p>
    </div>
  );
}