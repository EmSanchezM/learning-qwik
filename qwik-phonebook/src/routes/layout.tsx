import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {

  return (
    <main class="flex justify-center items-center m-auto min-h-screen bg-gradient-to-r from-teal-400 to-yellow-200">
      <Slot />
    </main>
  );
});
