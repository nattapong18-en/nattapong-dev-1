import Link from "next/link";

import type { PortfolioProfile } from "@/types/portfolio";

type PortfolioIntroProps = {
  profile: PortfolioProfile;
};

export function PortfolioIntro({ profile }: PortfolioIntroProps) {
  return (
    <section className="portfolio" aria-labelledby="portfolio-title">
      <header className="portfolio-header">
        <p className="portfolio-wordmark" id="portfolio-title">
          <span className="portfolio-wordmark-lockup">
            <span className="portfolio-wordmark-name">{profile.role}</span>
            <span className="portfolio-wordmark-suffix">
              {profile.brandSuffix}
            </span>
          </span>
        </p>
        <Link className="portfolio-nav" href="/">
          About
        </Link>
      </header>

      <nav aria-label="Project index" className="project-index">
        {profile.stories.map((story, position) => (
          <button
            aria-current={position === 0 ? "true" : undefined}
            aria-label={`View ${story.title}`}
            className="project-index-mark"
            key={story.index}
            type="button"
          />
        ))}
      </nav>

      <div className="story-rail" aria-label={`${profile.name}: selected stories`}>
        {profile.stories.map((story) => (
          <article
            aria-label={`${story.index}: ${story.title}, ${story.location}`}
            className="story-panel"
            key={story.index}
          >
            <div
              aria-hidden="true"
              className="story-image"
              style={{ backgroundImage: `url(${story.imageUrl})` }}
            />
          </article>
        ))}
      </div>

      <footer className="portfolio-footer">
        <p className="portfolio-note">
          <span>{profile.note}</span>
          <span>{profile.summary}</span>
        </p>
        <nav aria-label="Social links" className="portfolio-socials">
          <a href="mailto:hello@example.com">Email</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://twitter.com/">Twitter</a>
        </nav>
      </footer>
    </section>
  );
}
