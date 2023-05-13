import { component$, type QRL } from '@builder.io/qwik';
import { Close, Exclamation } from '../icons';

interface ConfirmProps {
    message: string;
    action: 'delete' | 'update';
    onClose: QRL<() => false>
}

export const Confirm = component$(({ message, action, onClose }: ConfirmProps ) => {
    return (
        <dialog class='bg-opacity-50 absolute inset-0 flex justify-center items-center'>
            <section class='max-w-sm py-2 px-4 rounded shadow-xl'>
                <div class='flex justify-between items-center'>
                    <h4 class='text-lg font-bold'>{`Confirm ${action}`}</h4>
                    <button onClick$={onClose}>
                        <Close />
                    </button>
                </div>
                <div class='mt-3 flex'>
                    <Exclamation />
                    <span class='ml-2'>
                        {`Are you sure to ${action} ${message}?`}
                    </span>
                </div>
                <div class='mt-4 flex justify-end space-x-3'>
                    <button onClick$={onClose} class='px-3 py-1 text-gray-200 bg-yellow-500 hover:bg-yellow-400 rounded'>Cancel</button>
                    <button class='px-3 py-1 text-gray-200 bg-red-800 hover:bg-red-600 rounded'>Delete</button>
                </div>
            </section>
        </dialog>
    )
});