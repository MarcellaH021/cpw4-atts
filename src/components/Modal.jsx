function Modal({ aberto, tarefa, fechar }) {
  if (!aberto) return null

  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Tarefa completa</h2>

        <div className="modal-conteudo">
          <p>{tarefa}</p>
        </div>

        <button className="botao botao-visualizar" onClick={fechar}>
          Fechar
        </button>
      </div>
    </div>
  )
}

export default Modal
