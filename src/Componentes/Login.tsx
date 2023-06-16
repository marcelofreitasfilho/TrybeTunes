import { useState, ChangeEvent, FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';

export function Login() {
// ---------------------------ESTADOS--------------------------------------
  const [btnState, setBtnState] = useState(false);
  const [inptLog, setInpt] = useState('');
  const [user, setUSer] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  // ----------------------------FUNCOES----------------------------------
  const handleBTNChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nomeDigitado = e.target.value;
    setInpt(nomeDigitado);
    const regex = /^[a-zA-Z]{3,}$/;
    const validacao = regex.test(nomeDigitado);
    setBtnState(validacao);
    setUSer(nomeDigitado);
  };

  const handleEntraBtn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await createUser({ name: user });
    nav('/search');
  };

  // ---------------------------FORM---------------------------------------

  if (loading) {
    return (
      <p>Carregando...</p>
    );
  }
  return (
    <form onSubmit={ handleEntraBtn }>

      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name=""
        id="nome"
        data-testid="login-name-input"
        onChange={ handleBTNChange }
        value={ inptLog }
      />

      <button
        type="submit"
        data-testid="login-submit-button"
        disabled={ !btnState }
      >
        Entrar
      </button>
    </form>
  );
}
