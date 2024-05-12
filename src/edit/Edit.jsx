import {
  Edit as RAEdit,
  useRecordContext
} from "react-admin";
import { Form, transform } from "./Form";

import { ContactsEditList } from "@/views/contacts/edit/list/List";
import { contacts_resource, resource } from '../'

export function ContactsEdit () {
  const { id: person_id} = useRecordContext();
  return <ContactsEditList 
    resource={contacts_resource}
    filter={{person_id}}
    sort={{field: 'contact_type', order: 'ASC'}} 
    />
}

export function Edit({form, ...props}) {
  return <RAEdit 
    resource={resource}
    transform={transform}
    {...props}
    >
      <Form {...form} />
      <ContactsEdit />
    </RAEdit>
}