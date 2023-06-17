export function Search() {
  return (
    <form action="">
      <label htmlFor="busca">Busca</label>
      <input
        type="text"
        name=""
        id="busca"
        data-testid="search-artist-input"
      />

      <button data-testid="search-artist-button">
        Pesquisar
      </button>
    </form>
  );
}
