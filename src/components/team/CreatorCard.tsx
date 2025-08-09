import { TeamMember } from '../../data/team';
import { GraduationCap, FlaskRound as Flask, BookOpen, Trophy, Mail, Globe, Linkedin } from 'lucide-react';

type CreatorCardProps = {
  member: TeamMember;
};

export default function CreatorCard({ member }: CreatorCardProps) {
  return (
    <div className="bg-primary-light rounded-card shadow-subtle border border-primary-dark p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 relative group light:bg-white light:border-neutral-300">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-teal to-neutral-400 rounded-t-card"></div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
        <img 
          src={member.avatar}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-accent-teal/30"
        />
        
        <div className="text-center sm:text-left">
          <h3 className="text-h3 font-semibold text-text-primary mb-1">{member.name}</h3>
          <p className="text-accent-teal font-semibold mb-2">{member.role}</p>
          <div className="flex gap-3 items-center justify-center sm:justify-start">
            {member.social.linkedin && (
              <a 
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-teal transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            )}
            {member.social.website && (
              <a 
                href={member.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-teal transition-colors"
                aria-label="Personal Website"
              >
                <Globe size={18} />
              </a>
            )}
            {member.social.email && (
              <a 
                href={`mailto:${member.social.email}`}
                className="text-text-secondary hover:text-accent-teal transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {member.details.map((detail, index) => (
          <div key={index} className="flex items-start gap-3 text-text-secondary">
            <span className="mt-0.5">
              {detail.type === 'education' && <GraduationCap size={18} className="text-accent-teal" />}
              {detail.type === 'specialization' && <Flask size={18} className="text-accent-teal" />}
              {detail.type === 'publication' && <BookOpen size={18} className="text-accent-teal" />}
              {detail.type === 'award' && <Trophy size={18} className="text-accent-teal" />}
            </span>
            <span>{detail.content}</span>
          </div>
        ))}
      </div>

      <p className="text-text-secondary mb-6 leading-relaxed">{member.bio}</p>

      <div className="flex flex-wrap gap-2">
        {member.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-primary-dark text-accent-teal border border-accent-teal/30 px-3 py-1.5 rounded-small text-sm font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}