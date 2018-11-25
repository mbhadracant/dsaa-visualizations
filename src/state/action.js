export function changeEditorCode(code) {
  return {
    type: 'CHANGE_EDITOR_CODE',
    code,
  };
}

export function highlightEditorCode(markers) {
  return {
    type: 'HIGHLIGHT_EDITOR_CODE',
    markers,
  };
}
