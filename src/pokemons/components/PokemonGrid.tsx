import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ( { pokemons }: Props ) => {
    return (
        <div className='flex flex-wrap gap-10 items-center justify-center'>
            { pokemons.map( ( { id, name } ) => (
                <PokemonCard key={ id } pokemon={ { id, name } } />
            ) ) }
        </div>
    );
};
