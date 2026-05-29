import  { useState } from 'react'

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface Props{
    id: number;
}


export const usePokemon = ({id}: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

   
  

    return {
        //Properties
        pokemon,

    }
}

export default usePokemon
