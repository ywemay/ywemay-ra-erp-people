import { 
  Button,
  useRecordContext,
  useRedirect,
  useStore
} from "react-admin";
import AddIcon from '@mui/icons-material/AddIcCall';

export default function CreateContactButton(params) {

  const record = useRecordContext();
  const redirect = useRedirect();

  const [ _, setValue ] = useStore('person_edit_redirect', false)

  const state = { record: { 
      person_id: record.id,
      contact_type: 1
    },
  }

  const handleClick = async() => {
    await setValue(record.id)
    await redirect('create', 'people_contacts', state)
  }

  return <Button
    resource="people_contacts"
    icon={<AddIcon />}
    label="actions.new.contact"
    // state={state}
    onClick={handleClick}
  />
}