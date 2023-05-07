import { component$ } from '@builder.io/qwik';
import { Confirm } from '~/components/confirm-modal';

interface ContactDeleteProps {
    confirmDeleteContact: boolean;
    contactName: string;
}

export const ContactDelete = component$(({ confirmDeleteContact, contactName }: ContactDeleteProps) => {
    console.log(confirmDeleteContact)
    if (!confirmDeleteContact) return null;

    return (
        <Confirm
            contactName={contactName}
            action='delete'
        />
    )
});