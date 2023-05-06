import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>Hola</div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Phonebook',
  meta: [
    {
      name: 'description',
      content: 'Qwik Learnign concepts qwik',
    },
  ],
};
