import React, { useEffect, useState } from 'react';
import api from '../services/api';
import dragonballTitle from './imagens/dragonball.png'; // ajuste o caminho conforme o local exato


const DragonBallCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    api.get('/characters')
      .then((response) => {
        setCharacters(response.data.items);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao buscar personagens');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Carregando...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardStyle = (id) => ({
    border: '1px solid #ccc',
    padding: '15px',
    width: '250px',
    height: 'auto',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    transform: hoveredCard === id ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hoveredCard === id ? '0 0 15px rgba(0, 0, 0, 0.3)' : 'none',
  });

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '200px',
    objectFit: 'contain',
    borderRadius: '5px',
    marginBottom: '15px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
    textAlign: 'left',
    marginTop: '10px',
    color: '#333',
  };

  return (
    <div>
      {/* Imagem como título */}
      <img
        src={dragonballTitle} // <-- Altere aqui se o caminho for diferente
        alt="Dragon Ball Z Title"
        style={{
          display: 'block',
          margin: '0 auto 30px auto',
          maxWidth: '90%',
          height: 'auto',
          filter: 'drop-shadow(4px 4px 10px rgba(0,0,0,0.5))',
        }}
      />

      {/* Cards de personagens */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
        {characters.map((char) => (
          <div
            key={char.id}
            style={cardStyle(char.id)}
            onMouseEnter={() => handleMouseEnter(char.id)}
            onMouseLeave={handleMouseLeave}
          >
            <h3>{char.name}</h3>
            <img src={char.image} alt={char.name} style={imageStyle} />
            <div style={descriptionStyle}>
              <p><strong>Raça:</strong> {char.race || 'Desconhecida'}</p>
              <p><strong>Ki:</strong> {char.ki || 'Não informado'}</p>
              <p><strong>Afiliação:</strong> {char.affiliation || 'Nenhuma'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragonBallCharacters;
