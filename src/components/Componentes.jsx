import React, { useState, useEffect } from "react";
import MeuCalendario from "./MeuCalendario";
import Modal from "./Modal";
import { motion } from "framer-motion";
import "../componentes.scss";
import { useNavigate } from "react-router-dom";

export default function Componentes() {
  
  const navigate = useNavigate();
  const [modalAberto, setModalAberto] = useState(false);
  const [alertaVisivel, setAlertaVisivel] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [tempo, setTempo] = useState(0);
  const [index, setIndex] = useState(0);

  const imagens = [
    "./src/assets/logo.jpg",
    "./src/assets/react.png",
    "./src/assets/razer.png"
  ];
  


  // Timer simples
  useEffect(() => {
    const interval = setInterval(() => setTempo(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Carrossel automático
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex(prev => (prev + 1) % imagens.length);
    }, 3000); // troca a cada 3 segundos
    return () => clearInterval(slideInterval);
  }, []);

  return (
   
    <div className="container">
      <h1>Componentes Legais e Úteis</h1>
      <button className="botao" onClick={() => navigate(-1)}>
        Voltar
      </button>


      <div className="carrossel-calendario">
        {/* Carrossel */}
        <div className="carrossel grande">
          <button onClick={() => setIndex((prev) => (prev - 1 + imagens.length) % imagens.length)}>◀</button>
          <img src={imagens[index]} alt={`Slide ${index + 1}`} />
          <button onClick={() => setIndex((prev) => (prev + 1) % imagens.length)}>▶</button>
        </div>

        <div className="calendario-lateral">
          <MeuCalendario />
        </div>
      </div>

      <h2>Timer</h2>
      <div className="timer">
        <p>Tempo: {tempo}s</p>
      </div>

      <h2>Arraste-me com animação</h2>
      <motion.div
        className="motion-box"
        drag
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 0 }}
        dragElastic={0.2}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Arraste-me com animação!
      </motion.div>

      {/* Select Customizado */}
      <h2>Select Customizado</h2>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Escolha uma opção</option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
      </select>
      {selectedOption && <p>Selecionado: {selectedOption}</p>}

      <h2>Card de Informações</h2>
      <div className="card info-card">
        <img src="./src/assets/avatar2.jpg" alt="Avatar" className="avatar" />
        <div>
          <h3>Nome do Usuário</h3>
          <p>Descrição detalhada do perfil ou produto. Pode colocar mais informações aqui.</p>
        </div>
      </div>

      <h2>Alertas / Notificações</h2>
      {alertaVisivel && (
        <div className="alerta">
          <p>Este é um alerta!</p>
          <button className="botao" onClick={() => setAlertaVisivel(false)}>Fechar</button>
        </div>
      )}

      {/* Modal de exemplo */}
      <Modal aberto={modalAberto} tarefa="Exemplo de Modal" fechar={() => setModalAberto(false)} />
    </div>
    
  );
  
}