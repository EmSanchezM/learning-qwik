import { component$ } from '@builder.io/qwik';
import { Exclamation } from '../icons';

interface ConfirmProps {
    contactName: string;
    action: 'delete' | 'update'
}

export const Confirm = component$(({ contactName, action }: ConfirmProps ) => {
    return (
        <dialog class='bg-opacity-50 absolute inset-0 flex justify-center items-center'>
            <div class='bg-gray-200 max-w-sm py-1 px-3 rounded shadow-xl'>
                <div class='flex justify-between items-center'>
                    
                    <h4 class='text-lg font-bold'>{`Confirm ${action}`}</h4>
                    X
                </div>
                <div class='mt-2 flex'>
                    <Exclamation />
                    <span class='ml-2'>
                        {`Are you sure to ${action} ${contactName}?`}
                    </span>
                </div>
                <div class='mt-3 flex justify-end space-x-3'>
                    <button class='px-3 py-1 rounded hover:bg-red-300 hover:bg-opacity-50'>Cancel</button>
                    <button class='px-3 py-1 rounded hover:bg-red-300 hover:bg-opacity-50'>Delete</button>
                </div>
            </div>
        </dialog>
    )
});