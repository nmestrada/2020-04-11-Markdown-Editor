import React from 'react'
import './Editor.css';
import AceEditor from "react-ace";
//not sure why I need this import, but it removes some errors
import "ace-builds/webpack-resolver";

require("ace-builds/src-noconflict/mode-markdown");
require("ace-builds/src-noconflict/theme-github");

const Editor = ({code, onChange}) => {
    return (
        <div className= "border border-dark px-4" id="editor">
            <h4 className="my-4">Markdown Editor </h4>
            <p>Enter your code below!</p>
                <AceEditor
                    mode="markdown"
                    width="100%"
                    height="80%"
                    value={code}
                    theme="github"
                    showPrintMargin={false}
                    onChange={onChange}
                    name="ace-editor"
                    setOptions={{ showLineNumbers: true }}
                    editorProps={{ $blockScrolling: false }}
                />
            </div>
    )
}
export default Editor