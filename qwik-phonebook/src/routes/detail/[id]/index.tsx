import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Detail } from '~/views/update';

export default component$(() => {
  const location = useLocation()
  
  return <Detail id={location.params?.id} />
});