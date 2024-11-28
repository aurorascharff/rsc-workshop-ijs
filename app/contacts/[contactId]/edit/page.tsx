import { getContact } from '@/data/services/getContact';
import ContactForm from './_components/ContactForm';

type PageProps = {
  params: Promise<{
    contactId: string;
  }>;
};

export default async function EditContactPage({ params }: PageProps) {
  const contactId = (await params).contactId;
  const contact = await getContact(contactId);

  return <ContactForm contact={contact} />;
}
