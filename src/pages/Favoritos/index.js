import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";
export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);
  function handleDelete(id) {
    let filtroFilme = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilme);
    localStorage.setItem("filme", JSON.stringify(filtroFilme));
    toast.success("filme excluido com sucesso");
  }
  return (
    <div id="meusFilmes">
      <h1>seus filmes</h1>
      {filmes.length === 0 && <span>voce nao possui nenhum filme ;-;</span>}
      <ul>
        {filmes.map((item) => {
          return (
            <>
              <li key={item.id}>
                <span>{item.nome}</span>
                <div>
                  <Link to={`/filme/${item.id}`}>ver detalhes</Link>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    excluir
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
