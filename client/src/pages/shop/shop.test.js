import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Shop from './shop.component';

export const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null,
    },
  };
};

describe('Shop Page', () => {
  let wrapper;
  let mockFetchCollectionsStart;

  beforeEach(() => {
    mockFetchCollectionsStart = jest.fn();

    const mockMatch = {
      path: '',
    };

    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionsStart,
    };

    // wrapper = mount(
    //   <BrowserRouter>
    //     <Shop {...mockProps} />
    //   </BrowserRouter>
    // );
  });

  it('should render Shop Page component', () => {
    // expect(wrapper).toMatchSnapshot();
  });

  // it('should fire fetchCollectionsStart', () => {
  //   expect(mockFetchCollectionsStart).toHaveBeenCalled();
  // });
});
