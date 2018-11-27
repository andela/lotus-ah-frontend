// action types
import {
  GET_POPULAR_TAGS,
  GET_POPULAR_TAGS_SUCCESS,
  GGET_POPULAR_TAGS_FAILURE
}
  from '../../../actionTypes/landingPage';

// store
import initialState from '../../../store/initialState';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const listArticle = (state = initialState.listArticle, action) => {
  switch (action.type) {
    case GET_POPULAR_TAGS:
      return {
        ...state,
      };
    case GET_POPULAR_TAGS_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles
      };
    case GGET_POPULAR_TAGS_FAILURE:
      return {
        ...state,
        articles: action.message
      };
    default:
      return state;
  }
};

export default listArticle;
