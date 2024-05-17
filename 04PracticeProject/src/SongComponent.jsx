import React, { useState } from 'react'

function SongComponent() {
    const [songs, setSongs] = useState([]);
    const [songName, setSongName] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");

    const addSongs = () => {
        const newSong = {name: songName, album: album, year: year};
        setSongs(s => [...s, newSong]);

        setSongName("");
        setAlbum("");
        setYear("");
    };
    const removeSongs = (idx) => {
        setSongs(s => s.filter((_, i) => i !== idx));
    };
    const handleNameChange = (e) => {setSongName(e.target.value)};
    const handleAlbumChange = (e) => {setAlbum(e.target.value)};
    const handleYearChange = (e) => {setYear(e.target.value)};
  return (
    <div className='container'>
        <ul>
                {songs.map((song, idx) => 
                <li key={idx} onClick={() => removeSongs(idx)}>{song.name} | {song.album} | {song.year}</li>)}
        </ul>

        <input type='text' value={songName} onChange={handleNameChange} placeholder='Enter song name'/> <br/>
        <input type='text' value={album} onChange={handleAlbumChange} placeholder='Enter the album name'/> <br/>
        <input type='number' value={year} onChange={handleYearChange} placeholder='Enter song release year'/> <br/>
        <button onClick={addSongs}>Add Song</button>
    </div>
  )
}

export default SongComponent