import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/dracula';
import { connect } from 'react-redux';
import { changeEditorCode } from '../../state/action';
import styles from './CodeEditor.css';

const CodeEditor = ({ editorCode, markers, change }) => (
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
      markers={[{ ...markers, className: styles.replacement_marker }]}
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
  markers: state.markers,
});

const mapDispatchToProps = {
  change: changeEditorCode,
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
