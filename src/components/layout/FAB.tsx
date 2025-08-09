// FloatingActionButton.tsx
import { useState } from "react";

// Define your external links here
// *** IMPORTANT: Replace with your actual Google Drive and Google Form links ***
const GOOGLE_DRIVE_LINK = "YOUR_GOOGLE_DRIVE_FOLDER_LINK_HERE";
const GOOGLE_FORM_LINK = "YOUR_GOOGLE_FORM_LINK_HERE";

export default function FloatingActionButton() {
  const [isFabOpen, setIsFabOpen] = useState(false);

  // This function now exclusively toggles the FAB state.
  // When the main FAB is clicked, it opens/closes the options.
  const toggleFab = () => {
    setIsFabOpen(!isFabOpen);
  };

  // This function ensures the FAB options close when a link is clicked.
  const handleLinkClick = () => {
    setIsFabOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start space-y-3">
      {/* Option Buttons (conditionally rendered) */}
      {isFabOpen && (
        <>
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-dark bg-accent-teal text-dark-900 hover:bg-neutral-300 transition-all duration-200 group"
            title="Open Google Form"
          >
            {/* Google Forms Icon (simple text or replace with SVG) */}
            <span className="font-bold text-xl group-hover:scale-110 transition-transform">
              📝
            </span>
          </a>
          <a
            href={GOOGLE_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-dark bg-dark-800 text-neutral-300 hover:bg-dark-700 transition-all duration-200 group border border-neutral-500/30 light:bg-neutral-100 light:hover:bg-neutral-200 light:text-neutral-900"
            title="Open Google Drive"
          >
            {/* Google Drive Icon (simple text or replace with SVG) */}
            <span className="font-bold text-xl group-hover:scale-110 transition-transform">
              📁
            </span>
          </a>
          {/* REMOVED: The explicit "Cancel" button.
              The main FAB's 'X' icon and toggle behavior now serve this purpose. */}
        </>
      )}

      {/* Main FAB Button */}
      <button
        onClick={toggleFab}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-dark-lg bg-accent-teal text-dark-900 hover:bg-neutral-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal"
        title={isFabOpen ? "Close Options" : "Open Options"}
      >
        {/* The SVG element itself will stay the same, but its inner path will change
      and the rotation class will be applied based on isFabOpen */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 transition-transform ${
            isFabOpen ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            // This is the path for the PLUS sign.
            // When rotate-45 is applied, it will look like an 'X'.
            d="M12 6v6m0 0v6m0-6h6m0 0H6"
          />
        </svg>
      </button>
    </div>
  );
}
