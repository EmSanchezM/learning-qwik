import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class="flex justify-between items-center bg-white mb-2 rounded-lg shadow-md p-4">
        <section class="flex flex-grow basic-0">
          <input 
            class="bg-gray-300 pl-12 py-3 rounded-md text-base font-semibold outline-0" 
            type="search" 
            name="contact" 
            id="contact" 
            placeholder='Search contact'
          />
        </section>
        <section class='flex-end'>
          <Link href='new' class='font-bold text-white rounded-md bg-green-700 p-3'>
            New contact
          </Link>
        </section>
      </header>
  )
});