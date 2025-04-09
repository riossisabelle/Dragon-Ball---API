const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px',
    },
    card: {
      border: '1px solid #ccc',
      padding: '15px',
      width: '250px', // Tamanho fixo para o card
      height: 'auto', // Deixa a altura flexível para acomodar a imagem e a descrição
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Organiza o conteúdo dentro do card
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // A transição para os efeitos de hover
      overflow: 'hidden', // Evita que qualquer conteúdo saia do card
    },
    image: {
      width: '100%',
      height: 'auto',
      maxHeight: '200px', // Limita a altura da imagem
      objectFit: 'contain', // Ajusta a imagem sem cortá-la ou distorcê-la
      borderRadius: '5px',
      marginBottom: '15px',
    },
    description: {
      fontSize: '14px',
      lineHeight: '1.5',
      textAlign: 'left',
      marginTop: '10px',
      color: '#333', // Cor do texto para maior contraste
    },
    // Efeito de hover no card
    cardHover: {
      '&:hover': {
        transform: 'scale(1.05)', // Amplia o card quando passar o mouse
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)', // Adiciona uma sombra maior para o efeito
      },
    },
  };
  
  export default styles;
  