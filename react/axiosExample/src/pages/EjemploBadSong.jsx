import React from 'react';
import { useEffect } from 'react';
import { postSong } from '@/api/pokeapi';
import { useMutation } from '@tanstack/react-query';

function EjemploBadSong() {
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (data) => postSong(data),
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  });

  return (
    <div>
      <button
        onClick={() => mutate({
          name: 'i can see you',
          artist: 'Taylor Swift',
          description: 'CS50',
          image: 'url',
        })}
      >
        Hacer fetch
      </button>
    </div>
  );
}

export default EjemploBadSong;
