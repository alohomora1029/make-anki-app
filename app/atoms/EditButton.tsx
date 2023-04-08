import {BiEditAlt} from 'react-icons/bi';

export default function EditButton({onClick}:Click) {
  return (
    <div>
      <BiEditAlt onClick={onClick}/>
    </div>
  )
}
