import { ShopActionTypes } from './shop.types';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsError,
  fetchCollectionsStartAsync,
} from './shop.actions';

describe('fetchCollectionsStart action', () => {
  it('should create the fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_START
    );
  });
});

describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1,
      },
    };

    const action = fetchCollectionsSuccess(mockCollectionsMap);

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsError action', () => {
  it('should create the fetchCollectionsError action', () => {
    const action = fetchCollectionsError('errored');

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});

describe('fetchCollectionsStartAsync action', () => {
  it('should create the fetchCollectionsStartAsync action', () => {
    const mockActionCreator = fetchCollectionsStartAsync();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});
