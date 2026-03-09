import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import "./componentes.scss";
import Modal from "./Modal";

function App() {
  const navigate = useNavigate();

  const [temaEscuro, setTemaEscuro] = useState(false);

  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Fazer exercícios",
    "Entregar atividade",
  ]);

  const [novaTarefa, setNovaTarefa] = useState("");

  const [modalAberto, setModalAberto] = useState(false);

  const [tarefaSelecionada, setTarefaSelecionada] = useState("");

  const [indexSelecionado, setIndexSelecionado] = useState(null);

  const [modoEdicao, setModoEdicao] = useState(false);

  const [textoEditado, setTextoEditado] = useState("");

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;

    setTarefas([...tarefas, novaTarefa]);

    setNovaTarefa("");
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function visualizarTarefa(tarefa, index) {
    setTarefaSelecionada(tarefa);
    setTextoEditado(tarefa);
    setIndexSelecionado(index);
    setModoEdicao(false);
    setModalAberto(true);
  }

  function salvarEdicao() {
    const novasTarefas = [...tarefas];

    novasTarefas[indexSelecionado] = textoEditado;

    setTarefas(novasTarefas);

    setModoEdicao(false);

    setModalAberto(false);
  }

  function truncar(texto, limite) {
    return texto.length > limite ? texto.slice(0, limite) + "..." : texto;
  }

  return (
    <div className={`app ${temaEscuro ? "escuro" : "claro"}`}>
      <div className="container">
        <h1 className="titulo">Done</h1>
        <div
          className={`toggle ${temaEscuro ? "ativo" : ""}`}
          onClick={() => setTemaEscuro(!temaEscuro)}
        >
          <div className="icone">{temaEscuro ? "🌙" : "☀️"}</div>
          <div className="bolinha"></div>
        </div>

        <button className="botao" onClick={() => navigate("/componentes")}>
          Componentes Úteis
        </button>

        <h2>Lista de tarefas</h2>
        <div className="area-input">
          <input
            className="input-tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Adicione uma tarefa"
          />

          <button className="botao botao-adicionar" onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>
        {tarefas.map((tarefa, index) => (
          <div className="card" key={index}>
            <span>{truncar(tarefa, 60)}</span>

            <div className="acoes">
              <button
                className="botao botao-visualizar"
                onClick={() => visualizarTarefa(tarefa, index)}
              >
                Visualizar
              </button>

              <button
                className="botao botao-remover"
                onClick={() => removerTarefa(index)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}

        <Modal
          aberto={modalAberto}
          tarefa={tarefaSelecionada}
          fechar={() => setModalAberto(false)}
          modoEdicao={modoEdicao}
          setModoEdicao={setModoEdicao}
          textoEditado={textoEditado}
          setTextoEditado={setTextoEditado}
          salvar={salvarEdicao}
        />
      </div>
    </div>
  );
}

export default App;