interface Movie {
    "backdrop_path": String,
    "id": number,
    "title": String,
    "original_title": String,
    "overview": String,
    "poster_path": String,
    "media_type": String,
    "adult": Boolean,
    "original_language": String,
    "genre_ids": Array<number>,
    "popularity":   number,
    "release_date": String,
    "video": Boolean,
    "vote_average": number,
    "vote_count": number
}


interface Movies {
    "page": number,
    "results": Array<Movie>,
    "total_pages": number,
    "total_results": number
}

export { Movie, Movies };