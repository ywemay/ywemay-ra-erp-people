import { Edit } from 'ywemay-ra-erp-contacts/edit/Edit'
import { Create } from 'ywemay-ra-erp-contacts/edit/Create'
import { useStore } from 'react-admin'


function edit(props) {
  const [ person_id ] = useStore('person_edit_redirect', false)
  const redirect = (resource, id, data) => {
    return person_id ? 'people/' + person_id : 'people'
  }
  return <Edit 
    redirect={redirect}
    />
}

function create(props) {
  const [ person_id ] = useStore('person_edit_redirect', false)
  const redirect = (resource, id, data) => {
    return person_id ? 'people/' + person_id : 'people'
  }
  return <Create 
    redirect={redirect}
    />
}

export default {
  name: 'people_contacts',
  create, edit
}