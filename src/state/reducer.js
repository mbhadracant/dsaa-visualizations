const initialState = {
  editorCode: 'const x = 5 * 6 * 7 * 8;',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_EDITOR_CODE':
      return { ...state, editorCode: action.code };
    default:
      return initialState;
  }
};
