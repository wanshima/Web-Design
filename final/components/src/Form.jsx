import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [country, setCountry] = useState('');
    const [artist, setArtist] = useState('');
    const [customArtist, setCustomArtist] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const artistOptions = {
        France: ['Jean-François Millet', 'Paul Cézanne', 'Henri Matisse', 'Other'],
        Japan: ['Andō Hiroshige', 'Katsushika Hokusai', 'Katagawa Utamaro', 'Other']
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        setArtist(''); 
        setCustomArtist(''); 
    };

    const handleArtistChange = (event) => {
        setArtist(event.target.value);
        if (event.target.value !== 'Other') {
            setCustomArtist(''); 
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const finalArtist = artist === 'Other' ? customArtist : artist;
        console.log('Submitted:', { country, artist: finalArtist });
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Country:
                    <select value={country} onChange={handleCountryChange}>
                        <option value="">Select a country</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Artist Name:
                    <select value={artist} onChange={handleArtistChange} disabled={!country}>
                        <option value="">Select an artist</option>
                        {country && artistOptions[country].map((name) => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </label>
                {artist === 'Other' && (
                    <input 
                        type="text" 
                        value={customArtist} 
                        onChange={e => setCustomArtist(e.target.value)}
                        placeholder="Specify other artist"
                    />
                )}
            </div>
            <button className="formButton" type="submit">Submit</button>
            {submitted && (
                <p>Thank you for submitting the form! You've indicated that you are interested in artist {artist === 'Other' ? customArtist : artist} from {country}.</p>
            )}
        </form>
    );
}

export default Form;
