
export default function ChangeButton({ onClick }:Click) {
  return (
    <button className='btn h-10 px-4 ml-2 mt-12 rounded-full bg-gray-200  hover:shadow-lg hover:bg-blue-300 transition ease-out delay-80 hover:-translate-y-1 hover:scale-110'
    onClick={onClick}>Change</button>

  )
}
