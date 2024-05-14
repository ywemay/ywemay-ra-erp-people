import {
  TextField,
  ArrayField,
  SingleFieldList,
  Datagrid,
} from 'react-admin'


export function Grid(props) {

  return <Datagrid rowClick="show" {...props} >
    <TextField 
      label="people.full_name"
      source="full_name" 
      />
    <TextField 
      label="people.job"
      source="job" 
      />
    <TextField 
      label="people.gender"
      source="gender" 
      />
    <ArrayField
      label="people.contacts"
      source="people_contacts">
      <SingleFieldList linkType={false} className="gap-x-2">
        <TextField source="val" />
      </SingleFieldList>
    </ArrayField>
  </Datagrid>
}
