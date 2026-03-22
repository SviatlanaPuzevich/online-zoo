import AnimalFact from '../../components/AnimalFact/AnimalFact.tsx';
import QuickDonationSection from '../../components/QuickDonationSection/quickDonationSection.tsx';
import LiveSection from '../../components/ZooSections/LiveSection/LiveSection.tsx';
import PopupLayout from '../../layouts/modal/PopupLayout.tsx';
import MapPopup from '../../components/popups/MapPopup/MapPopup.tsx';
import { parseCoordinate } from '../../utils/coordinatesHelper.ts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../../services/service.ts';
import { type AnimalFact as Fact } from '../../types/types.ts';

export default function ZooPage() {

  const { id } = useParams<{ id: string }>();

  const [fact, setFact] = useState<Fact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const fact = await ApiService.getAnimalFact(Number(id));
        setFact(fact);
      } catch (err) {
        console.error(err);
        setError('Something went wrong. Please reload the page');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const latitude = fact && parseCoordinate(fact.latitude);
  const longitude = fact && parseCoordinate(fact.longitude);
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=12&output=embed`;
  const mapPopupId = 'mapPopup';

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
      <AnimalFact fact={fact} isLoading={isLoading} error={error} onErrorClose={setError} popupId={mapPopupId} />
      <PopupLayout title="Animal Location" id={mapPopupId}>
        <MapPopup src={mapSrc} />
      </PopupLayout>
    </>
  );
}