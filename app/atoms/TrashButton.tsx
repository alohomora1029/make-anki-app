import {FiTrash2} from 'react-icons/fi';

export default function TrashButton({onClick}:Click) {
  return (
    <div>
      <FiTrash2 className='hover:shadow-lg hover:translate-y-1' onClick={onClick}/>
    </div>
  )
}
