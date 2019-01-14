const libs = `${process.cwd()}/libs`;

const Movie = require(`${libs}/models/movie`);

const moviesData = require(`${libs}/data/movies`);

function populate() {
    moviesData.movies.forEach((m) => {
        let movie = new Movie({
            title: m.title,
            genre: m.genre,
            release_date: m.release_date,
            actors: m.actors,
            plot: m.plot,
            trailer: m.trailer,
        });
    
        movie.save((err, movie) => {
            if(err) {
                return log.error(err);
            }
            console.log('Inserted movie ' + movie.title);
        });
    });
}
module.exports = populate;