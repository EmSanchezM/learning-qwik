import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { Contact } from '~/views/contact';

export default component$(() => {

  return (
    <>
      <section class="bg-white rounded-lg shadow-md p-4">
        <ul>
          <li class="py-4 flex">
            <Contact
              avatar={'https://via.placeholder.com/150'}
              name={'John Doe'}
            />
          </li>
          <li class="py-4 flex">
            <Contact
              avatar={'https://via.placeholder.com/150'}
              name={'Jane Smith'}
            />
          </li>
          <li class="py-4 flex">
            <Contact
              avatar={'https://via.placeholder.com/150'}
              name={'Jane Smith'}
            />
          </li>
        </ul>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Phonebook',
  meta: [
    {
      name: 'description',
      content: 'Qwik Learning concepts qwik',
    },
  ],
};
