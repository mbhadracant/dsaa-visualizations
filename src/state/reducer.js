const initialState = {
  editorCode: 'const x = 5 * 6 * 7 * 8;',
  markers: {
    startRow: 0,
    startCol: 0,
    endRow: 0,
    endCol: 5,
    type: 'text',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_EDITOR_CODE':
      return { ...state, editorCode: action.code };
    case 'HIGHLIGHT_EDITOR_CODE':
      return { ...state, markers: action.markers };
    default:
      return initialState;
  }
};
