import { component$ } from '@builder.io/qwik';

export const View = component$(({ width = 24, height = 24 }: { width?: number; height?: number }) => {
  return (
    <svg 
        width={`${width}px`}
        height={`${height}px`}
        stroke-width="1.5" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M12 14a2 2 0 100-4 2 2 0 000 4z" 
            stroke="#fff" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        ></path>
        <path 
            d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" 
            stroke="#fff" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        ></path>
    </svg>
  )
});