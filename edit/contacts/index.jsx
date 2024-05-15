import { useRecordContext } from "react-admin";
import { List } from "ywemay-ra-erp-contacts/list";
import Actions from "./Actions";

export default function Contacts (props) {
  const { id: person_id} = useRecordContext()
  return <List 
    filter={{person_id}}
    actions={<Actions />}
    resource="people_contacts" 
    {...props}
    />
}
