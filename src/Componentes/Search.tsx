import { useState, ChangeEvent } from 'react';

export function Search() {
// ----------------------ESTADOS--------------------------------
  const [btnState, setBtnState] = useState(false);
  const [inptLog, setInpt] = useState('');

  // ----------------------FUNCOES--------------------------------
  const handleBTNChange = (e: ChangeEvent<HTMLInputElement>) => {
    const artistaBusca = e.target.value;
    setInpt(artistaBusca);
    if (artistaBusca.length >= 2) {
      setBtnState(true);
    }
  };

  return (
    <form action="">
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
      >
        Pesquisar
      </button>
    </form>
  );
}
