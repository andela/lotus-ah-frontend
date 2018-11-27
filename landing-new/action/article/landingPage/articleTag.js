// third party libraries
import http from 'axios';

// action type
import {
  GET_POPULAR_TAGS,
  GET_POPULAR_TAGS_SUCCESS,
  GET_HERO_ARTICLE_FAILURE
} from '../../../actionTypes/landingPage';

const fetchAllTagsSuccess = articleData => ({
  type: GET_POPULAR_TAGS_SUCCESS,
  payload: articleData
});

const fetchAllTagsFailure = errorMessage => ({
  type: GET_HERO_ARTICLE_FAILURE,
  payload: errorMessage
});

const fetchAllTags = () => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch({
    type: GET_POPULAR_TAGS
  });
  return http
    .get(`${url}/api/v1/alltags`)
    .then((response) => {
      dispatch(fetchAllTagsSuccess(response.data));
    })
    .catch(({ response }) => {
      dispatch(fetchAllTagsFailure(response.data.message));
    });
};

export default fetchAllTags;
