import {
  InfiniteList as RAList,
  SearchInput
} from 'react-admin'
import { Grid } from "./Grid";

const Filters = [
  <SearchInput source="q" alwaysOn />
];

const queryOptions = {
  meta: {
    columns: "id,full_name,job,gender,people_contacts(*)"
  }
}

export function List({ grid, ...props }) {
  return <RAList 
    resource="people" 
    exporter={false}
    filters={Filters}
    disableSyncWithLocation
    queryOptions={queryOptions}
    {...props}
    >
      <Grid {...grid} />
  </RAList>
}

