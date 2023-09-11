async function getTracksByArtist() {
    
    const url = 'https://spotify23.p.rapidapi.com/search/?q=Dirk%20massen&type=tracks&offset=0&limit=10&numberOfTopResults=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '94966e9234mshd5e4add561deb57p1bcfb8jsnaa4bf4e91290',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let tracksArray = result.tracks.items;
        let trackID;
        for (let i = 0; i < tracksArray.length; i++) {
            trackID= result.tracks.items[i].data.id;
            getTrackByID(trackID);
        }
       // getTrackByID(trackID);
        
    } catch (error) {
        console.error(error);
    }
}
async function getTrackByID(trackID) {
    const url = 'https://spotify23.p.rapidapi.com/tracks/?ids='+ trackID;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '94966e9234mshd5e4add561deb57p1bcfb8jsnaa4bf4e91290',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        var song=document.createElement("AUDIO");
        song.setAttribute("src", result.tracks[0].preview_url );
        song.setAttribute("controls", "controls");
        song.setAttribute("title", result.tracks[0].name);
        document.body.appendChild(song);
    } catch (error) {
        console.error(error);
    }
}
getTracksByArtist();