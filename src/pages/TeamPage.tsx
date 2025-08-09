import { teamMembers } from '../data/team';
import CreatorCard from '../components/team/CreatorCard';
// import CompetitionStats from '../components/team/CompetitionStats';
import ResearchFullGallery from '../components/team/ResearchFullGallery';
import VideoGallery from '../components/media/VideoGallery';

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-12 max-w-screen-xl mx-auto px-4 lg:px-8 py-7">
      <div className="text-center mb-4">
        <h1 className="text-h1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-teal to-neutral-400 dark:from-accent-teal dark:to-neutral-400 mb-3">
          Meet Our Research Team
        </h1>
        <p className="text-body-lg text-text-secondary max-w-2xl mx-auto light:text-neutral-700">
          Dedicated researchers pushing the boundaries of scientific understanding
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <CreatorCard key={member.id} member={member} />
        ))}
      </div>
      <ResearchFullGallery />

      {/* <CompetitionStats /> */}

      <VideoGallery />

    </div>
  );
}