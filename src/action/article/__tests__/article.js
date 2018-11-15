
// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Import Action types
import {
  PUBLISH_ARTICLE_FAILURE,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_REQUEST

} from '../../../actionTypes/article';

// action
import
createNewArticle
  from '../createNewArticle.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const verificationToken = 'authorshaven';
const fetchedArticle = { title: 'First Article', body: ' It has been a long time i want to create', description: 'This is the description' };
const options = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${verificationToken}`
  }
};


describe('Actions related with Articles', () => {
  afterEach(() => {
    mock.reset();
  });


  it('Article is created succefully', () => {
    mock.onPost(`${process.env.SERVER_URL}/api/v1/articles`, fetchedArticle, options)
      .reply(201, {
        fetchedArticle,
        status: 'success',
      });

    const mockedActions = [
      {
        type: PUBLISH_ARTICLE_REQUEST,
        payload: fetchedArticle,
      },
      {
        type: PUBLISH_ARTICLE_SUCCESS,
        payload: fetchedArticle
      },
      {
        type: PUBLISH_ARTICLE_FAILURE,
      },
    ];

    const store = mockStore({ publishedArticle: {} });
    return store.dispatch(createNewArticle(fetchedArticle))
      .then(() => {
        expect(store.getActions()[0]).toEqual(mockedActions[0]);
      });
  });
});
