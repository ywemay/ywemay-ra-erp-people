import { Admin, Resource } from 'react-admin'
import { dataProvider } from 'ywemay-ra-erp-data-provider-mock'
import { 
  people,
} from '../'
import people_contacts from './people-contacts'

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource {...people} />
    <Resource {...people_contacts} name="people_contacts" />
  </Admin>
}