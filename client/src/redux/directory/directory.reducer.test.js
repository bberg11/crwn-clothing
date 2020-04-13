import DirectoryReducer, { INITIAL_STATE } from './directory.reducer';

describe('DirectoryReducer', () => {
  it('should return initial state', () => {
    expect(DirectoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
