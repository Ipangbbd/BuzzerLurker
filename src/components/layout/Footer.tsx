import { Twitter, Youtube, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-light text-text-primary border-t border-primary-dark light:bg-white light:border-neutral-300 light:text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-h3 font-semibold mb-4 text-text-primary light:text-neutral-900">
              About Buzzer Gen Z Social Research
            </h3>
            <p className="text-text-secondary light:text-neutral-700">
              Buzzer Gen Z Social Research explores Gen Z's social dynamics and culture, providing insights into their behaviors, preferences, and values through research and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-h3 font-semibold mb-4 text-text-primary light:text-neutral-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent-teal transition-colors light:text-neutral-700"
                >
                  Theory Hub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent-teal transition-colors light:text-neutral-700"
                >
                  Research Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent-teal transition-colors light:text-neutral-700"
                >
                  Competition Details
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-h3 font-semibold mb-4 text-text-primary light:text-neutral-900">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-secondary hover:text-accent-teal transition-colors light:text-neutral-700"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-accent-teal transition-colors light:text-neutral-700"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-accent-teal transition-colors light:text-neutral-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@buzzerresearch.com"
                className="text-text-secondary hover:text-accent-teal transition-colors light:text-neutral-700"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-dark text-center text-text-secondary light:border-neutral-200 light:text-neutral-600">
          <p>© 2025 Buzzer Gen Z Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
