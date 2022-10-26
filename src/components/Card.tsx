import axios from "axios";
import { FormEvent, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Checkbox from '@radix-ui/react-checkbox';
import { DividerHorizontalIcon, CheckIcon } from '@radix-ui/react-icons';
import { ButtonType } from "./ButtonType";

export function Card(){

  interface Pokemon  {
    name: string,
    url: string,
    sprites: any,
    types: any,
    stats: any
  }
  const [pokemon, setPokemon] = useState<Pokemon>(
    {
      name: 'pikachu',
      url: 'www.com.br',
      sprites: 'google.com',
      types: [{type: {name: 'eletric'}}],
      stats: []
    }
  )

  const [checked, setChecked] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');


  async function getAPokemon(event: FormEvent){
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if(!data.pokemon){
      return -1;
    }
    try {    
      await axios(`https://pokeapi.co/api/v2/pokemon/${data.pokemon}`)
        .then(response => {
          setPokemon(response.data)
      })
    }
    catch (err) {
      alert(err)
    }
  }
  

  return (
    <div className="bg-lime-100 px-4 pb-4 rounded-md">
      <form className="mt-8 flex flex-col gap-4" onSubmit={getAPokemon}>
        <label htmlFor="pokemon" className="font-semibold text-center"> Who's that pokemon?</label>
        <input name = 'pokemon' type="text" placeholder="type a pokemon to search" className="text-center" onChange={(e) => {setInput(e.target.value)}} required/>


      <Dialog.Root>
        <Dialog.Trigger className="bg-lime-400 text-center h-6 px-2 rounded-md font-semibold 
        hover:bg-lime-500" type="submit" disabled={!input}>
            go for it!
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-10 px-10 shadow-black/25 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480]">
            <div className = "flex flex-col gap-1 align-middle">
              <Dialog.Title className="text-3xl text-center font-black">{pokemon.name}</Dialog.Title>
              
              <img src={
                checked === false ? 
                pokemon.sprites.front_default :
                pokemon.sprites.front_shiny                
                } alt="" />
              <h3 className="mt-2 flex items-center gap-2 text-sm">
              Shiny?
                <Checkbox.Root className = "w-4 h-4 rounded bg-zinc-900"
                  checked = {checked}
                  onCheckedChange={(checked) => {
                    if(checked === true) {
                      setChecked(true)
                    }
                    else {
                      setChecked(false)
                    }
                  }}> 
                  <Checkbox.Indicator >
                  {checked === false && <DividerHorizontalIcon />}
                  {checked === true && <CheckIcon />}
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </h3>
              <div className='flex flex-col gap-2'>
                <div className="grid grid-cols-3 gap-1">
                  <h3>Type:</h3>
                  {
                    pokemon.types.map((type: { type: {name: string}}) => {
                      return (
                        <ButtonType type = {type.type.name}/>
                      )
                    })
                  }
                </div>
              </div>
              <div  className="flex flex-col gap-2">
                <ToggleGroup.Root type = "multiple" className="grid grid-cols-3 gap-2 py-2">
                  {pokemon.stats.map((stat: { stat: { name: string; }, base_stat: number; }) => {
                    return(
                      <div>
                        <ToggleGroup.Item value = "1">{stat.stat.name}</ToggleGroup.Item>
                        <h3>{stat.base_stat}</h3>
                      </div>
                    )
                  })}               
                </ToggleGroup.Root>
                </div>
              <Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-7 rounded-md font-semibold">Voltar</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      </form>
    </div>
  )
}