import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import { usePokemonDetail } from "../services/pockemonapi";
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);

    if (!pokemonData) {
        return <Loading />;
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="bg-[#DCDCDC] rounded-xl shadow-lg p-6 w-full max-w-xl text-center">
                <h1 className="text-3xl font-bold capitalize mb-4">{pokemonData.name}</h1>
                <div className="flex justify-center gap-4 mb-6">
                    <img
                        src={pokemonData.sprites.front_default}
                        alt="Front sprite"
                        className="w-32 h-32"
                    />
                    <img
                        src={pokemonData.sprites.back_default}
                        alt="Back sprite"
                        className="w-32 h-32"
                    />
                </div>
                <PokemonAddCollection
                    Pokecod={pokeid}
                    imgSprite={pokemonData.sprites.front_default}
                    name={pokemonData.name}
                    url=""
                />
                <div className="mt-6 text-left bg-[#AFAFAF] rounded">
                    <h2 className="text-xl font-semibold mb-2">Detalles</h2>
                    <ul className="bg-gray-100 p-4 rounded text-sm">
                        <li><strong>Experiencia base:</strong> {pokemonData.base_experience}</li>
                        <li><strong>Altura:</strong> {pokemonData.height}</li>
                        <li><strong>Peso:</strong> {pokemonData.weight}</li>
                        <li><strong>Tipo(s):</strong> {pokemonData.types.map(t => t.type.name).join(', ')}</li>
                        <li><strong>Habilidades:</strong> 
                            <ul className="ml-4 list-disc">
                                {pokemonData.abilities.map((a, i) => (
                                    <li key={i}>{a.ability.name} {a.is_hidden ? "(Oculta)" : ""}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
