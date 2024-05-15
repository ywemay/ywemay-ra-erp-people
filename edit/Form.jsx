import { 
  SimpleForm,
  TextInput,
} from "react-admin";
import { GenderSelectInput } from "ywemay-ra-erp-inputs";

export const transform = ({id, ...data}) => {
  return data
}

export function Form(props) {
  return <SimpleForm {...props}>
    <div className="flex flex-row w-full gap-2 justify-evenly">
      <TextInput
        label="people.full_name"
        source="full_name"
        fullWidth
        />
    </div>
    <div className="flex flex-row w-full gap-2 justify-evenly">
      <TextInput
        label="people.job"
        source="job"
        className="w-full" 
        />
      <GenderSelectInput className="w-full" />
    </div>
  </SimpleForm>
}