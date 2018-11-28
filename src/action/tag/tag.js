// Third party modules
import http from 'axios';

// Import action types
import {
  CREATE_TAG_FAILURE,
  CREATE_TAG_SUCCESS,
  CREATE_TAG_REQUEST,
  FETCH_TAG_FAILURE,
  FETCH_TAG_REQUEST,
  FETCH_TAG_SUCCESS

} from '../../actionTypes/tag';


const createTagRequest = payload => ({
  type: CREATE_TAG_REQUEST,
});
const createTagFailure = error => ({
  type: CREATE_TAG_FAILURE,
  payload: error
});
const createTagSuccess = payload => ({
  type: CREATE_TAG_SUCCESS,
  payload
});

const fetchTagRequest = () => ({
  type: FETCH_TAG_REQUEST,
});
const fetchTagFailure = error => ({
  type: FETCH_TAG_FAILURE,
  payload: error
});
const fetchTagSuccess = payload => ({
  type: FETCH_TAG_SUCCESS,
  payload
});

const verficationToken = localStorage.getItem('authorsHavenAuthToken');

/**
 * @returns { object } data
 * @param {object} tags
 * @desc {method}to find or create a new tag
 */
export const findOrCreateTag = tags => (dispatch) => {
  dispatch(createTagRequest);
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const url = process.env.SERVER_URL || '';
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  const collectedtags = tags;
  return http.post(
    `${url}/api/v1/tagsbyId`,
    {
      collectedtags,
    },
    options
  ).then((response) => {
    dispatch(createTagSuccess(response.data));
    return response.data;
  })
    .catch((err) => {
      dispatch(createTagFailure(err.response));
    });
};

/**
 * @returns { object } data
 * @param {object} tagName
 * @desc {method} get single tag
 */
export const fetchSingleTag = tagName => (dispatch) => {
  dispatch(fetchTagRequest);
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verficationToken}`,
    },
  };

  return http.get(`http://localhost:5000/api/v1/search/tag/${tagName}`, options).then((response) => {
    dispatch(fetchTagSuccess(response.data))
  })
    .catch((err) => {
      dispatch(fetchTagFailure(err.response));
    });
};

/**
 * @returns { object } data
 * @param {object} tagobject
 * @desc {method} get all tags
 */
export const getAllTags = () => (dispatch) => {
  dispatch(fetchTagRequest);
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verficationToken}`,
    },
  };

  return http.post(`${BASE_URL}/alltags`, options).then((response) => {
    dispatch(fetchTagSuccess(response.data));
  })
    .catch((err) => {
      dispatch(fetchTagFailure(err.response));
    });
};
