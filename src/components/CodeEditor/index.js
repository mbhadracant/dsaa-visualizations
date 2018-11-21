import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/dracula';
import traverse from 'ast-traverse';
import { parse } from 'esprima';
import Button from '@material-ui/core/Button';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    const initialCode = 'const x = 5 * 6;';
    this.state = {
      value: initialCode,
    };
    this.parse = this.parse.bind(this);
  }

  parse() {
    const { value } = this.state;

    const ast = parse(value);
    let indent = 0;
    traverse(ast, {
      pre: (node) => {
        console.log(Array(indent + 1).join(' ') + node.type);
        indent += 4;
      },
      post: () => {
        indent -= 4;
      },
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="dracula"
          name="editor"
          fontSize={14}
          showPrintMargin="true"
          showGutter="false"
          highlightActiveLine="true"
          value={value}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <Button variant="contained" color="secondary" onClick={() => { this.parse(); }}>
          Parse
        </Button>
      </div>
    );
  }
}

export default CodeEditor;
