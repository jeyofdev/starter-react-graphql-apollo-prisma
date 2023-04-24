import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type AddMovieMutationResponse = {
	__typename?: 'AddMovieMutationResponse';
	code: Scalars['String'];
	message: Scalars['String'];
	movie?: Maybe<Movie>;
	success: Scalars['Boolean'];
};

export type Movie = {
	__typename?: 'Movie';
	duration: Scalars['Int'];
	id?: Maybe<Scalars['String']>;
	title: Scalars['String'];
};

export type Mutation = {
	__typename?: 'Mutation';
	addMovie?: Maybe<AddMovieMutationResponse>;
};

export type MutationAddMovieArgs = {
	duration?: InputMaybe<Scalars['Int']>;
	title?: InputMaybe<Scalars['String']>;
};

export type Query = {
	__typename?: 'Query';
	movies?: Maybe<Array<Maybe<Movie>>>;
};

export type AddMovieMutationVariables = Exact<{
	title?: InputMaybe<Scalars['String']>;
	duration?: InputMaybe<Scalars['Int']>;
}>;

export type AddMovieMutation = {
	__typename?: 'Mutation';
	addMovie?: {
		__typename?: 'AddMovieMutationResponse';
		code: string;
		message: string;
		success: boolean;
		movie?: {
			__typename?: 'Movie';
			title: string;
			id?: string | null;
			duration: number;
		} | null;
	} | null;
};

export type MoviesQueryVariables = Exact<{ [key: string]: never }>;

export type MoviesQuery = {
	__typename?: 'Query';
	movies?: Array<{
		__typename?: 'Movie';
		duration: number;
		id?: string | null;
		title: string;
	} | null> | null;
};

export const AddMovieDocument = gql`
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
export type AddMovieMutationFn = Apollo.MutationFunction<
	AddMovieMutation,
	AddMovieMutationVariables
>;

/**
 * __useAddMovieMutation__
 *
 * To run a mutation, you first call `useAddMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMovieMutation, { data, loading, error }] = useAddMovieMutation({
 *   variables: {
 *      title: // value for 'title'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useAddMovieMutation(
	baseOptions?: Apollo.MutationHookOptions<
		AddMovieMutation,
		AddMovieMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddMovieMutation, AddMovieMutationVariables>(
		AddMovieDocument,
		options,
	);
}
export type AddMovieMutationHookResult = ReturnType<typeof useAddMovieMutation>;
export type AddMovieMutationResult = Apollo.MutationResult<AddMovieMutation>;
export type AddMovieMutationOptions = Apollo.BaseMutationOptions<
	AddMovieMutation,
	AddMovieMutationVariables
>;
export const MoviesDocument = gql`
	query Movies {
		movies {
			duration
			id
			title
		}
	}
`;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(
		MoviesDocument,
		options,
	);
}
export function useMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(
		MoviesDocument,
		options,
	);
}
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<
	MoviesQuery,
	MoviesQueryVariables
>;
