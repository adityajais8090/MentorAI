import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { recentSessions } from '@/constants';
import React from 'react';
import { cn } from '@/lib/utils'; 






const Page = () => {
  return (
    
      <main>
        <h2 className="text-3xl font-bold">Popular Companions</h2>
        <section className="home-section">
          <CompanionCard
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
            id="456"
            name="Wizard Number Magic"
            topic="Derivatives and Integrals"
            subject="math"
            duration={45}
            color="#e5d0ff"
          />
          <CompanionCard
            id="789"
            name="Verba the Vocabulary Builder"
            topic="Language"
            subject="english"
            duration={45}
            color="#ffda6e"
          />
        </section>

        <section className="home-section">
          <CompanionsList
            title="Recently Completed Session"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </main>
    
  );
};

export default Page;
