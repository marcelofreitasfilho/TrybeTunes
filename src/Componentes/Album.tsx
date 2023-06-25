import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../types';
import getMusics from '../services/musicsAPI';

function Album() {
  const [musica, setMusica] = useState<[AlbumType, ...SongType[]] | []>([]);
  const [carregando, setCarregando] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function myApi() {
      setCarregando(true);
      const musicas = await getMusics(id as string);
      setMusica(musicas);
      setCarregando(false);
    }
    myApi();
  }, [id]);
  const musicasArray = musica.filter((item, index) => index >= 1);

  if (carregando) {
    return (
      <p>Carregando...</p>
    );
  }
  return (
    <section>
      <h2 data-testid="artist-name">
        {musica[0]?.artistName}
      </h2>

      <h2 data-testid="album-name">
        {musica[0]?.collectionName}
      </h2>
    </section>
  );
}

export default Album;
