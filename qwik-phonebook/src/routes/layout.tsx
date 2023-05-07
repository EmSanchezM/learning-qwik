import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {

  return (
    <>
      <main class="flex justify-center items-center m-auto min-h-screen">
        <Slot />
      </main>
    </>
  );
});
