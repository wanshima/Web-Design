import { useState } from 'react';
import './Form.css';

function Form() {
    const [country, setCountry] = useState('');
    const [artist, setArtist] = useState('');
    const [customArtist, setCustomArtist] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({}); 

    const artistOptions = {
        France: ['Jean-François Millet', 'Paul Cézanne', 'Henri Matisse', 'Other'],
        Japan: ['Andō Hiroshige', 'Katsushika Hokusai', 'Katagawa Utamaro', 'Other']
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        setArtist(''); 
        setCustomArtist(''); 
        setErrors({}); 
    };

    const handleArtistChange = (event) => {
        setArtist(event.target.value);
        if (event.target.value !== 'Other') {
            setCustomArtist('');
        }
        setErrors({}); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};

        if (!country) {
            errors.country = 'Country is required';
        }

        if (!artist) {
            errors.artist = 'Artist is required';
        } else if (artist === 'Other' && !customArtist) {
            errors.customArtist = 'Please specify the artist';
        }

        if (Object.keys(errors).length === 0) {
            const finalArtist = artist === 'Other' ? customArtist : artist;
            console.log('Submitted:', { country, artist: finalArtist });
            setSubmitted(true);
            setErrors({}); 
        } else {
            setErrors(errors);
            setSubmitted(false); t
        }
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
                    {errors.country && <p className="error">{errors.country}</p>}
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
                    {errors.artist && <p className="error">{errors.artist}</p>}
                </label>
                {artist === 'Other' && (
                    <input 
                        type="text" 
                        value={customArtist} 
                        onChange={e => setCustomArtist(e.target.value)}
                        placeholder="Specify other artist"
                    />
                )}
                {errors.customArtist && <p className="error">{errors.customArtist}</p>}
            </div>
            <button type="submit" aria-label="Submit registration form">Submit</button>
            {submitted && !Object.keys(errors).length && (
                <p>Thank you for submitting the form! You've indicated that you are interested in artist {artist === 'Other' ? customArtist : artist} from {country}.</p>
            )}
        </form>
    );
}

export default Form;
