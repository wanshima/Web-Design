import { useRef, useState } from 'react';
import Button from './Button';
import './Home.css';

function Home() {
  const dialogRef = useRef();
  const isOpenRef = useRef(false);
  const [name, setName] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const openModal = () => {
    dialogRef.current.showModal();
    isOpenRef.current = true;
    setIsModalOpened(true); 
  };

  const closeModal = () => {
    dialogRef.current.close();
    isOpenRef.current = false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name submitted: ${name}`);
    setIsFormSubmitted(true); 
    closeModal();
  };

  return (
    <div className="home">
      <div className="main">
              <Button onClick={openModal} type="button" visual="link">
                Sign Up to Our Newsletter
              </Button>
              {isModalOpened && <p>Thank you for clicking the button!</p>} 
              <dialog ref={dialogRef} onClose={closeModal}>
                <form onSubmit={handleSubmit}>
                    <label>
                      Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <Button type="submit" visual="link">
                      Submit
                    </Button>
                    {isFormSubmitted && <p>You have submitted the form!</p>} 
                </form>
              </dialog>
      </div>
      <div className="panel">
          <img src="images/2.jpg" alt="brown tabby cat on white wooden window" className="panel-image" />
          <div className="panel-text">
              <h2>Evolution</h2>
              <p>Results of phylogenetic research shows that the wild members of this genus evolved through 
                  sympatric or parapatric speciation, whereas the domestic cat evolved through artificial 
                  selection. The domestic cat and its closest wild ancestor are diploid and both possess 
                  38 chromosomes and roughly 20,000 genes.</p>
          </div>
      </div>
      <div className="panel">
          <img src="images/2.jpg" alt="brown tabby cat on white wooden window" className="panel-image" />
          <div className="panel-text">
              <h2>Domestication</h2>
              <p>It was long thought that the domestication of the cat began in ancient Egypt, where cats 
                  were venerated from around 3100 BC, However, the earliest known indication for the taming 
                  of an African wildcat was excavated close by a human Neolithic grave in Shillourokambos, 
                  southern Cyprus, dating to about 7500–7200 BC.</p>
          </div>
      </div>
    </div>
  );
}

export default Home;
