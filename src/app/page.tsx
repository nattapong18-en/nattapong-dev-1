import { PortfolioIntro } from "@/components/portfolio-intro";
import { getPortfolioProfile } from "@/lib/profile";

export default function Home() {
  const profile = getPortfolioProfile();

  return (
    <main className="page">
      <PortfolioIntro profile={profile} />
    </main>
  );
}
