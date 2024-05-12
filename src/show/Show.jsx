import { 
  EditButton,
  Show as RAShow,
  TopToolbar,
  useRecordContext,
} from "react-admin";

import { Layout } from "./Layout";

function Actions () {
  const record = useRecordContext() || {};
  const canEdit = (record.orders_count + record.proposals_count === 0)
  if (!canEdit) return null;
  return <TopToolbar> <EditButton /> </TopToolbar>
}

export function Show({ layout, ...params }) {
  return <RAShow {...params}
    queryOptions={{
      meta: {
        columns: '*;customers(orders_count, proposals_count)'
      }
    }}
    actions={<Actions />}
  >
    <Layout />
  </RAShow>
}