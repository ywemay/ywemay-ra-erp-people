import {
  Edit as RAEdit,
  // useRecordContext
} from "react-admin";
import { Form, transform } from "./Form";
// import { EditList } from "ywemay-ra-erp-contacts";
import { resource } from '../resource'
import { Card } from 'ywemay-ra-erp'

// export function ContactsEdit () {
//   const { id: person_id} = useRecordContext();
//   return <EditList 
//     resource="people_contacts"
//     filter={{person_id}}
//     sort={{field: 'contact_type', order: 'ASC'}} 
//   />
// }

export function Edit({form, ...props}) {
  return <RAEdit 
    resource={resource}
    transform={transform}
    {...props}
    >
      <Form {...form} />
      {/* <Card style={{padding: '6pt'}}>
        <ContactsEdit />
        </Card> */}
    </RAEdit>
}