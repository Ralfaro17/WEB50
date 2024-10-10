import { fetchPokemon } from '@/api/pokeapi';
import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function EjemploAPI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {data, error, refetch} = useQuery({queryKey: ['pokemon', name], queryFn: (name) => fetchPokemon(name)});

  console.log(data?.data);
  console.log(error);

  const [pokemon, setPokemon] = useState(null);

  const pokemonSubmit = (data) => {
    fetchPokemon(data.pokemon).then((response) => {
      refetch(data.pokemon);
      setPokemon(response.data);
    });
  };

  return (
    <div className='flex gap-52 items-center'>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Pokemon</h2>
          </CardTitle>
          <CardDescription>
            <p>Busca tu Pokemon favorito</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(pokemonSubmit)}
          >
            <Label htmlFor="pokemon">Pokemon</Label>
            <Input
              placeholder="Pokemon"
              {...register('pokemon', {
                required: 'Campo requerido',
              })}
            />
            {errors.pokemon && (
              <span className="text-red-500">{errors.pokemon.message}</span>
            )}
            <Button type="submit">Buscar</Button>
          </form>
        </CardContent>
      </Card>

      {pokemon && (
        <Card>
          <CardHeader>
            <CardTitle>
              <h2>{pokemon.name}</h2>
            </CardTitle>
            <CardDescription>
              <p>Información del Pokemon</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselPrevious />
              <CarouselContent className="flex m-auto">
                <CarouselItem>
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default EjemploAPI;
