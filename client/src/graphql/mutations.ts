import { gql } from '@apollo/client';

const ADD_NEW_MOVIE = gql`
	mutation AddMovie($title: String, $duration: Int) {
		addMovie(title: $title, duration: $duration) {
			code
			message
			movie {
				title
				id
				duration
			}
			success
		}
	}
`;

export default {
	addMovie: ADD_NEW_MOVIE,
};
