interface Props {
  type: string,
}


export function ButtonType(props: Props){
  let color = 'ffff'
  switch (props.type){
    case 'normal':
      color = 'bg-slate-200'
      break
    case 'fighting':
      color = 'bg-orange-700'
      break
    case 'flying':
      color = 'bg-violet-300'
      break
    case 'poison':
      color = 'bg-purple-900'
      break
    case 'ground':
      color = 'bg-yellow-300'
      break
    case 'rock':
      color = 'bg-yellow-700'
      break
    case 'bug':
      color = 'bg-lime-700'
      break
    case 'ghost':
      color = 'bg-purple-600'
      break
    case 'steel':
      color = 'bg-purple-200'
      break
    case 'fire':
      color = 'bg-orange-500'
      break
    case 'water':
      color = 'bg-sky-500'
      break
    case 'grass':
      color = 'bg-green-500'
      break
    case 'electric':
      color = 'bg-yellow-400'
      break
    case 'psychic':
      color = 'bg-pink-600'
      break
    case 'ice':
      color = 'bg-sky-300'
      break
    case 'dragon':
      color = 'bg-indigo-800'
      break
    case 'dark':
      color = 'bg-stone-800'
      break
    case 'fairy': 
      color = 'bg-pink-400'
      break
    default:
      break
  }

  return (
    <button key = {`${props.type}`} className = {`${color} text-black font-bold py-[0.5] px-2 rounded`}>{props.type}</button>
  )

}