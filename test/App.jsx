import { Admin, Resource } from 'react-admin'
import { dataProvider } from 'ywemay-ra-erp-data-provider-mock'
import { 
  people,
} from '../'

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource {...people} />
  </Admin>
}