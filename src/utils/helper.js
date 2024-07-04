
const RAPID_API_KEY=process.env.RAPID_API_KEY
export const url = 'https://imdb-top-100-movies.p.rapidapi.com/';;
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': RAPID_API_KEY,
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
  
	}
};
export const Series_Url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';



export const Recommendations_url = 'https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/recommendations/19995';
export const Recommendations_options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8a633538c6mshcc1613e624a52e5p13a50ajsn51268c1a0b70',
		'x-rapidapi-host': 'advance-movie-api.p.rapidapi.com'
	}
};

