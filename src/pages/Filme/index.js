import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./style.css";
export default function Filme() {
  const { id } = useParams();
  let history = useHistory();

  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      setFilme(response.data);
      console.log(response.data.length);
      if (response.data.length === 0) {
        history.replace("/");
        return;
      }
      setFilme(response.data);
      setLoad(false);
    }
    loadFilme();

    // componentdidmount
    return () => {
      console.log("componente desmontado");
    };
  }, [id, history]);

  function salvaFilme() {
    const minhaLista = localStorage.getItem("filmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some((filmesSalvos) => {
      return filmesSalvos.id === filme.id;
    });
    if (hasFilme) {
      toast.info("voce ja possui esse filme salvo");

      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("filme salvo com sucesso");
  }
  if (load) {
    return (
      <div className="filme-info">
        <strong>carregando seu filme</strong>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1> {filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>sinopse</h3>

      {filme.sinopse}
      <div>
        <button onClick={salvaFilme}>salvar</button>
        <button>
          <a
            target="black"
            href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}
          >
            trailer
          </a>
        </button>
      </div>
    </div>
  );
}
