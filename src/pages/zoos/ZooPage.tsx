import AnimalFact from '../../components/AnimalFact/AnimalFact.tsx';
import { useParams } from 'react-router-dom';

export default function ZooPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <AnimalFact id={id}/>
  );
}