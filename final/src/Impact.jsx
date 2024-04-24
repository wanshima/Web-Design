import { useState } from 'react';
import Form from './Form'; 
import './Impact.css';

function Impact() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    console.log('Button clicked!');
    setButtonClicked(true); 
  };

  return (
    <div className="about">
      <h1>The Inspirational Sources Behind Vincent van Gogh</h1>
      <p>Vincent van Gogh, a monumental figure in the history of art, was profoundly influenced by a variety 
        of artists and styles that preceded and surrounded him. His work, renowned for its bold and emotive 
        qualities, was shaped by the rich artistic heritage he admired and studied. Van Gogh's journey through 
        art was a continual quest for inspiration, drawing from both past masters and his contemporaries.</p>
      <p>Throughout his career, Van Gogh was deeply inspired by the color theories of the Impressionists and the 
        raw expressivity of the Post-Impressionists. He also admired the work of Japanese printmakers, whose 
        attention to detail and perspective profoundly influenced his approach to composition and color. </p> 
      <h1>Engage with the Artistic Roots of Van Gogh</h1>
      <p>If you are fascinated by the artists and movements that inspired Van Gogh, we invite you to explore this 
        rich historical tapestry with us. Please fill out the form below to indicate which of these pioneering 
        artists or styles you are most interested in learning more about. This information will help us provide 
        more focused and relevant content that aligns with your interests.</p>
      <div>
            <h2>Which artist that influenced Van Gogh are you most interested in?</h2>
            <Form />
      </div>
      {buttonClicked && <p>Thank you for clicking the button!</p>}
    </div>
  );
}

export default Impact;
