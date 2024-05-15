import { List as list } from './list'
import { Edit as edit, Create as create } from './edit'
import { Show as show } from './show'
import { Icon as icon } from './icon'

const name = 'people';

export const resource = name;
export const contacts_resource = 'people_contacts';

export const people = {
  name,
  icon,
  options: { label: 'people.people' },
  list, 
  edit, create, 
  show
}