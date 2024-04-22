import './Home.css';
import Accordion from './Accordion';
import Card from './Card';
import UserForm from './UserForm';

function Home({ setPage }) {

    const handleFormSubmit = (formData) => {
        console.log("Form Data:", formData);
        
    };

  return (
    <div className="home">
        <div className='accordion'>
            <h2>Vincent van Gogh (1853–1890)</h2>
            <Accordion title="Van Gogh's Self Portrait">
                <img src="image/3.jpg" alt="Self Portrait" />
            </Accordion>
        </div>
      <div className="panel">
            <div className="cards-container">
                <Card
                    image="image/4.jpg"
                    imageAlt="zoom in of Van Gogh's eye on big screen"
                    title="Van Gogh's Life"
                    text="Vincent van Gogh decided to become an artist at the age of 27. 
                    That decision would change his life and art history forever."
                    onReadMore={() => setPage('biography')}
                />
                <Card
                    image="image/2.jpg"
                    imageAlt="painting of an old lady in Van Gogh Museum"
                    title="Van Gogh's Achievement"
                    text="He produced more than 2,000 artworks, consisting of around 900 
                    paintings and 1,100 drawings and sketches."
                    onReadMore={() => setPage('gallery')}
                />
                <Card
                    image="image/1.jpg"
                    imageAlt="Van Gogh self portrait with bandaged ear"
                    title="Van Gogh’s Illness"
                    text="Van Gogh and his friend Gauguin had different ideas about art.
                    After a furious discussion, Van Gogh got very confused. In a fit of madness, 
                    he cut off his ear. He ended up in hospital."
                    onReadMore={() => setPage('biography')}
                />
                <Card
                    image="image/5.jpg"
                    imageAlt="Van Gogh famous sunflower painting"
                    title="Van Gogh’s Final Months"
                    text="Vincent spent the final months of his life in Auvers-sur-Oise: 
                    an artists' village near Paris. Yet after a visit to Theo, 
                    Vincent grew very concerned about his financial future. 
                    Vincent ended his life in July 1890."
                    onReadMore={() => setPage('legacy')}
                />
            </div>
            <div className="form-container">
                <h3>Sign up for our newsletter</h3>
                <UserForm onFormSubmit={handleFormSubmit} />
            </div>
        </div>
    </div>
  );
}

export default Home;
