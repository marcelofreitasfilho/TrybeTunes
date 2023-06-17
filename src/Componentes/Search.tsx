import { useState, ChangeEvent, MouseEvent } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

export function Search() {
// ----------------------ESTADOS--------------------------------
  const [btnState, setBtnState] = useState(false);
  const [inptLog, setInpt] = useState('');
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  // ----------------------FUNCOES--------------------------------
  const handleBTNChange = (e: ChangeEvent<HTMLInputElement>) => {
    const artistaBusca = e.target.value;
    setInpt(artistaBusca);
    if (artistaBusca.length >= 2) {
      setBtnState(true);
    }
  };

  const handleBuscaBtn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setLoading(true);

    const albumsAchados = await searchAlbumsAPI(inptLog);
    setAlbums(albumsAchados);
    setLoading(false);
  };

  // ------------------------ FORM ---------------------------------------

  if (loading) {
    return (
      <p>Carregando...</p>
    );
  }
  return (
    <form>
      <label htmlFor="busca">Busca</label>
      <input
        type="text"
        name=""
        id="busca"
        data-testid="search-artist-input"
        value={ inptLog }
        onChange={ handleBTNChange }
      />

      <button
        type="submit"
        data-testid="search-artist-button"
        disabled={ !btnState }
        onClick={ handleBuscaBtn }
      >
        Pesquisar
      </button>
    </form>
  );
}
