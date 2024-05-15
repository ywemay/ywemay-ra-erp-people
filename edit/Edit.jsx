import {
  Edit as RAEdit,
} from "react-admin";
import { Form, transform } from "./Form";
import { resource } from '../resource'
import Contacts from "./contacts";

export function Edit({form, ...props}) {
  return <RAEdit 
    resource={resource}
    transform={transform}
    {...props}
    >
      <Form {...form} />
      <Contacts />
    </RAEdit>
}