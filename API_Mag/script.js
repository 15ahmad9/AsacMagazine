//window.addEventListener("load", fetchSong);

function fetchSong() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '94966e9234mshd5e4add561deb57p1bcfb8jsnaa4bf4e91290',
			'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
		}
	};
	
	fetch('https://spotify23.p.rapidapi.com/tracks/?ids=0icJXGequFzOB37jNOLaeU', options)
		.then(response => response.json())
		.then(response => PlayTrack(response))
		.catch(err => console.error(err));	
}

function PlayTrack(response) {
	document.getElementById("name").innerHTML=response.tracks[0].name;
    document.getElementById("song").src=response.tracks[0].preview_url;
	
}
