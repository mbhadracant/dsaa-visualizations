import { highlightEditorCode } from '../state/action';
import store from '../state/store';

const highlight = (node) => {
  const { end, start } = node.loc;

  const startRow = start.line - 1;
  const endRow = end.line - 1;
  const startCol = start.column;
  const endCol = end.column;

  console.log(node.loc);
  store.dispatch(highlightEditorCode({
    startRow, startCol, endRow, endCol, type: 'text',
  }));
};

export default highlight;
