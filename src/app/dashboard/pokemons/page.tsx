import { SimplePokemon } from '../../../pokemons/interfaces/simple-pokemon';
import { PokemonsResponse } from '../../../pokemons/interfaces/pokemons-response';
import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';

const getPokemons = async ( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
    const pokemonsResponse: PokemonsResponse = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }` )
        .then( response => response.json() );

    const pokemonsData = pokemonsResponse.results.map( ( pokemon ) => ( {
        id: pokemon.url.split( '/' ).at( -2 )!,
        name: pokemon.name
    } ) );

    // throw new Error( 'No se pudieron cargar los pokemons' );
    return pokemonsData;
};


export default async function PokemonsPage () {

    const pokemons = await getPokemons( 151 );

    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-4'>Listado de Pokemons <small>estático</small></span>
            <PokemonGrid pokemons={ pokemons } />
        </div>
    );
}