var films = [
    {
        img: "https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_.jpg",
        name: "The Wailing",
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg",
        name: "Warcraft",
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BNjYzODU1OTkwN15BMl5BanBnXkFtZTgwMDA3MTMwMDI@._V1_.jpg",
        name: "Space Between",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png",
        name: "The Witch",
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BMjA1MTA4MzU4Ml5BMl5BanBnXkFtZTgwNjUxNjczODE@._V1_.jpg",
        name: "The Shallows",
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_.jpg",
        name: "X-Men: Apocalypse",
    },

    {
        img: "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg",
        name: "Me Before You ",
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        name: "Now You See Me 2 ",
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BMTk4OTY4MDg4Nl5BMl5BanBnXkFtZTgwMTE1MTU3ODE@._V1_.jpg",
        name: "The Fits",
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BMTgzMjU1NDUwMl5BMl5BanBnXkFtZTgwODg1NjY0ODE@._V1_.jpg",
        name: "Money Monster",
    }
]
for (var i = 0; i < films.length; i++) {
    area.innerHTML += `<div class="imgs">
    <img src="${films[i].img}">
    <div class="title"><p>${films[i].name}</p></div>  
</div> 
 `

}