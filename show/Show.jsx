import { 
  // EditButton,
  Show as RAShow,
  // TopToolbar,
  // useRecordContext,
  TextField,
} from "react-admin";
import { GenderSelectField } from 'ywemay-ra-erp-fields/src/GenderSelectField'
// import { Layout } from "./Layout";

// function Actions () {
//   const record = useRecordContext() || {};
//   const canEdit = (record.orders_count + record.proposals_count === 0)
//   if (!canEdit) return null;
//   return <TopToolbar> <EditButton /> </TopToolbar>
// }

export function Show(params) {
  return <RAShow {...params} >
    <TextField source="full_name" />
    <GenderSelectField />
  </RAShow>
}