import AnimalFact from '../../components/AnimalFact/AnimalFact.tsx';
import QuickDonationSection from '../../components/QuickDonationSection/quickDonationSection.tsx';
import LiveSection from '../../components/ZooSections/LiveSection/LiveSection.tsx';

export default function ZooPage() {

  return (
    <>
      <LiveSection />
      <QuickDonationSection title="make the Bamboo Donation!" text="Our process for bamboo donations first starts with a site evaluation.
                            It
                            is important that our team sees where the bamboo is growing, then determining if the bamboo
                            is a
                            species that our animals are currently eating. Thank you for your interest in donating
                            bamboo
                            for our pandas." />
      <AnimalFact />
    </>
  );
}