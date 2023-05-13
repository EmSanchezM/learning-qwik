import { component$ } from '@builder.io/qwik';

interface DetailProps {
  id: string;
}

export const Detail = component$(({ id }: DetailProps) => {

  return <div>Detail contact {id} Qwik!</div>
});