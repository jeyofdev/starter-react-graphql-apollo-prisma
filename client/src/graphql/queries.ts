import { gql } from '@apollo/client';

const GET_ALL_MOVIES = gql`
	query Movies {
		movies {
			duration
			id
			title
		}
	}
`;

export default {
	movies: GET_ALL_MOVIES,
};
