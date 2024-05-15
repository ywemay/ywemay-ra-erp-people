import { Create as RACreate } from "react-admin";
import { Form, transform } from "./Form";

export function Create({form, ...props}) {
  const allProps = {transform, ...props}
  return <RACreate {...allProps}>
      <Form {...form}/>
  </RACreate>
}