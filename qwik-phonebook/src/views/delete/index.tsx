import { type Signal, component$, $ } from '@builder.io/qwik';
import { Confirm } from '~/components/confirm-modal';

interface ContactDeleteProps {
    confirmDeleteContact: Signal<boolean>;
    contactName: string;
}

export const ContactDelete = component$(({ confirmDeleteContact, contactName }: ContactDeleteProps) => {

    const onCloseContactModal = $(() => confirmDeleteContact.value = false)

    if (!confirmDeleteContact.value) return null;

    return (
        <Confirm
            message={contactName}
            action='delete'
            onClose={onCloseContactModal}
        />
    )
});