import { 
  SimpleShowLayout,
  TextField,
  useShowContext,
} from "react-admin";
import { GenderSelectField } from 'ywemay-ra-erp'
import { CustomerReferenceField } from 'ywemay-ra-erp';
import { List as Contacts } from "@/views/contacts";
import { contacts_resource } from '../'
import { CardIcon } from "@/views/people";

function MainInfo() {
  return <div className="flex flex-col md:flex-row gap-3 w-full">
    <CardIcon />
    <SimpleShowLayout className="w-1/2">
      <TextField
        label="people.full_name"
        source="full_name"
        />
      <CustomerReferenceField />
    </SimpleShowLayout>
    <SimpleShowLayout>
      <TextField
        label="people.job"
        source="job"
        />
      <GenderSelectField />
      {contacts_resource}
    </SimpleShowLayout>
  </div>
}

export function Layout(props) {
  const { record, isLoading } = useShowContext();
  return <div className="p-3" {...props}>
    <MainInfo />
    {!isLoading && <Contacts 
      className="w-full"
      filter={{ person_id: record.id }}
      disableSuncWithLocation
      resource={contacts_resource}
      exporter={false}
      grid={{ bulkActionButtons: false, exporter: false }}
      /> }
  </div>
}