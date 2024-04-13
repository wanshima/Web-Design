import Card from './Card';
import './Card.css';

function CardsPage({ setPage }) {
    return (
      <div className="cards-page">
        <Card
          title="silver tabby cat on brown wooden fence"
          image="images/3.jpg"
          text="During domestication, cats have undergone only minor 
          changes in anatomy and behavior, and they are still capable of 
          surviving in the wild. "
          onReadMore={() => setPage('about')}
        />
        <Card
          title="silver tabby cat on brown wooden fence"
          image="images/3.jpg"
          text="Several natural behaviors and characteristics of wildcats 
          may have pre-adapted them for domestication as pets."
          onReadMore={() => console.log("Card 2 clicked")}  
        />
        <Card
          title="silver tabby cat on brown wooden fence"
          image="images/3.jpg"
          text="These traits include their small size, social nature, 
          obvious body language, love of play, and high intelligence."
          onReadMore={() => console.log("Card 3 clicked")}  
        />
      </div>
    );
  }
  
  export default CardsPage;