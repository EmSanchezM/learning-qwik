import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { View, Remove } from '~/components/icons';

interface ContactProps {
    avatar: string;
    name: string;
}

export const Contact = component$(({ avatar, name }: ContactProps) => {
    
    return (
        <article class='flex justify-center items-center rounded-sm border-dotted border-red-500 p-2'>
            <img 
                class='h-8 w-8 rounded-full object-cover' 
                src={avatar} 
                alt={`'Profile Picture of ${name}`} 
            />
            <span class='ml-3 font-medium text-gray-900'>{name}</span>
            <Link href='detail' class='ml-96 font-medium text-gray-900 rounded-sm bg-yellow-500 p-3'>
                <View />
            </Link>
            <button class='ml-2 font-medium text-gray-900 rounded-sm bg-red-700 p-3'>
                <Remove />
            </button>
        </article>
    )
});