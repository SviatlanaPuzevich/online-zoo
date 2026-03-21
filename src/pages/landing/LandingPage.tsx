import HeroSection from '../../components/landingSection/hero/HeroSection.tsx';
import InfoSection from '../../components/landingSection/info/InfoSection.tsx';
import QuickDonationSection from '../../components/QuickDonationSection/quickDonationSection.tsx';
import FeedSection from '../../components/landingSection/feedSection/FeedSection.tsx';
import Banner from '../../components/banner/Banner.tsx';
import AnimalCardsSection from '../../components/landingSection/animalCardsSection/AnimalCardsSection.tsx';
import AnimalFeeding from '../../components/landingSection/animalFeeding/AnimalFeeding.tsx';

export default function LandingPage() {
  return (<>
      <HeroSection />
      <InfoSection />
      <QuickDonationSection title="Your donation makes a difference!" text="The Online Zoo's animal webcams are some of the most famous on the internet.
                          Tune in to watch your favourite animals — live, 24/7!" />
      <AnimalCardsSection />
      <FeedSection />
      <AnimalFeeding/>
      <Banner alt='Touch animal' src='/images/Touch_the_animal_landing.png' />
    </>
  );
}