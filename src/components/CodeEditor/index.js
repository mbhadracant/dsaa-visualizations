import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/dracula';
import { connect } from 'react-redux';
import changeEditorCode from '../../state/action';

const CodeEditor = ({ editorCode, change }) => (
  <div>
    <AceEditor
      mode="javascript"
      theme="dracula"
      name="editor"
      fontSize={14}
      showPrintMargin="true"
      showGutter="false"
      highlightActiveLine="true"
      value={editorCode}
      onChange={(code) => {
        change(code);
      }}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  editorCode: state.editorCode,
});

const mapDispatchToProps = {
  change: changeEditorCode,
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
