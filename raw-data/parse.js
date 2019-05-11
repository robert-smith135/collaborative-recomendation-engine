
var fs = require('fs');
let Papa = require('papaparse')

var userData = fs.readFileSync('./users.csv');
var genreData = fs.readFileSync('./genre.csv');
var movieData = fs.readFileSync('./movies.csv');
var ratingData = fs.readFileSync('./ratings.csv');

//first
let parsed = Papa.parse(userData.toString(), {
    header: true
});

let cleaned = parsed.data.map((item) => {
    return { 
        _id: parseInt(item._id),
        age: parseInt(item.age),
        sex: item.sex,
        occupation: item.occupation,
        zipcode: item.zipcode
    }
});

fs.writeFile("../parsed-data/users.json", JSON.stringify(cleaned), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

//second
parsed = Papa.parse(genreData.toString(), {
    header: true
});

cleaned = parsed.data.map((item) => {
    return { 
        id: parseInt(item.id),
        name: item.name
    }
});

fs.writeFile("../parsed-data/genres.json", JSON.stringify(cleaned), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

//third
parsed = Papa.parse(movieData.toString(), {
    header: true
});

cleaned = parsed.data.map((item) => {
    return { 
        _id: parseInt(item.id),
        movie_title: item.movie_title,
        release_date: item.release_date,
        video_release_date: item.video_release_date,
        IMDb_URL: item.IMDb_URL,
        unknown: Boolean(Number(item.unknown)),
        Action: Boolean(Number(item.Action)),
        Adventure: Boolean(Number(item.Adventure)),
        Animation: Boolean(Number(item.Animation)),
        Childrens: Boolean(Number(item.Childrens)),
        Comedy: Boolean(Number(item.Comedy)),
        Crime: Boolean(Number(item.Crime)),
        Documentary: Boolean(Number(item.Documentary)),
        Drama: Boolean(Number(item.Drama)),
        Fantasy: Boolean(Number(item.Fantasy)),
        Film_Noir: Boolean(Number(item.Film_Noir)),
        Horror: Boolean(Number(item.Horror)),
        Musical: Boolean(Number(item.Musical)),
        Mystery: Boolean(Number(item.Mystery)),
        Romance: Boolean(Number(item.Romance)),
        Sci_Fi: Boolean(Number(item.Sci_Fi)),
        Thriller: Boolean(Number(item.Thriller)),
        War: Boolean(Number(item.War)),
        Western: Boolean(Number(item.Western))
    }
});

fs.writeFile("../parsed-data/movies.json", JSON.stringify(cleaned), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

//fourth
parsed = Papa.parse(ratingData.toString(), {
    header: true
});


cleaned = parsed.data.map((item) => {
    return { 
        user_id: parseInt(item.user_id),
        item_id: parseInt(item.item_id),
        rating: parseInt(item.rating),
        timestamp: item.timestamp
    }
});

fs.writeFile("../parsed-data/ratings.json", JSON.stringify(cleaned), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});





