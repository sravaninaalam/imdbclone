
const RAPID_API_KEY=process.env.RAPID_API_KEY
export const url = 'https://imdb-top-100-movies.p.rapidapi.com/';;
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': RAPID_API_KEY,
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
  
	}
};

