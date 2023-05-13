import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import { Contact } from '~/views/contact';
import Search from '~/views/search';

export default component$(() => {

  return (
    <article class='flex flex-col'>
      <Search />
      <section class='bg-white rounded-lg shadow-md p-4'>
        <ul>
          <li class='py-4 flex'>
            <Contact
              avatar={'https://via.placeholder.com/150'}
              name={'John Doe'}
            />
          </li>
          <li class='py-4 flex'>
            <Contact
              avatar={'https://via.placeholder.com/150'}
              name={'Jane Smith'}
            />
          </li>
          <li class='py-4 flex'>
            <Contact
              avatar={'https://via.placeholder.com/150'}
              name={'Jane Smith'}
            />
          </li>
        </ul>
      </section>
    </article>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Phonebook',
  meta: [
    {
      name: 'description',
      content: 'Learning Qwik concepts',
    },
  ],
};
