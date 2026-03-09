import { FaEdit, FaSave } from "react-icons/fa";

function Modal({
  aberto,
  tarefa,
  fechar,
  modoEdicao,
  setModoEdicao,
  textoEditado,
  setTextoEditado,
  salvar
}) {
  if (!aberto) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Tarefa</h2>

        {!modoEdicao ? (
          <p>{tarefa}</p>
        ) : (
          <input
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
          />
        )}

        <div className="modal-botoes">

          {!modoEdicao ? (
            <button onClick={() => setModoEdicao(true)}>
              <FaEdit /> Editar
            </button>
          ) : (
            <button onClick={salvar}>
              <FaSave /> Salvar
            </button>
          )}

          <button onClick={fechar}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;