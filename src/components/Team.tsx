"use client";

import FadeIn from "./FadeIn";

type Chef = {
  name: string;
  role: string;
  bio: string;
  interests: string[];
};

const chefs: Chef[] = [
  {
    name: "Brad Donakowski",
    role: "Co-Founder & Engineer",
    bio: "Senior engineer with a background spanning energy tech, fintech, healthcare, and consulting. Built apps used by 800K+ users, designed AI development pipelines, and has a thing for clean architecture. Denver born, Detroit sports loyal. When he's not coding, he's playing guitar, watching hockey, or chasing his kid around.",
    interests: ["Flutter", "AI/ML", "IoT", "React"],
  },
  {
    name: "Mauricio Munoz",
    role: "Co-Founder & Engineer",
    bio: "Software architect who's shipped apps to hundreds of thousands of users across energy tech and consumer electronics. Brings deep expertise in system design, scalable infrastructure, and turning complex requirements into elegant solutions. Splits his free time between the boxing ring and building things that matter.",
    interests: ["Architecture", "Cloud", "Systems Design", "Mobile"],
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-bg-dark px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <FadeIn className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Who&apos;s in the Kitchen
          </p>
          <h2 className="mb-4 text-3xl font-bold text-text-on-dark md:text-4xl">
            Meet the Chefs
          </h2>
          <div className="menu-divider mx-auto max-w-xs">
            <span className="text-sm text-text-on-dark-muted">✦</span>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 md:gap-16">
          {chefs.map((chef, i) => (
            <FadeIn key={chef.name} delay={i * 0.15}>
              <div className="text-center">
                {/* Photo placeholder */}
                <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border-2 border-text-on-dark-muted/20 bg-bg-dark-secondary">
                  <span className="text-5xl">👨‍🍳</span>
                </div>

                <h3 className="mb-1 text-2xl font-bold text-text-on-dark">
                  {chef.name}
                </h3>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-primary">
                  {chef.role}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-text-on-dark-muted">
                  {chef.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {chef.interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-text-on-dark-muted/20 px-3 py-0.5 text-xs font-medium text-text-on-dark-muted"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
