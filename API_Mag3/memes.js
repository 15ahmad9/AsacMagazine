function img() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
        const memes = data.data.memes;
        const img = Math.floor(Math.random() * memes.length);
        const meme_img = memes[img];

        document.getElementById("meme").src = meme_img.url;
    });
}

img();
