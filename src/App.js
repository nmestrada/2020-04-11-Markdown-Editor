import React, {useState, useEffect} from 'react';

import * as Showdown from "showdown";
import './App.css';
import AceEditor from "react-ace";
import Preview from './Preview';
//not sure why I need this import, but it removes some errors
import "ace-builds/webpack-resolver";

require("ace-builds/src-noconflict/mode-markdown");
require("ace-builds/src-noconflict/theme-github");


const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });
   
function App() {
    const [code, setCode] = useState("**Hello world!!!**");
    const [html, setHtml] = useState("");
    const onChange = (value) => {
        setCode(value)
        setHtml(converter.makeHtml(value))
    }
    //useEffect is to prepopulate preview
    useEffect(()=> {
        setHtml(converter.makeHtml(code))
    }, [code])

  return (
    <div className="App">
        <h1>Live Markdown Editor</h1>
        <div className="container">
            <div className= "editor">
                <AceEditor
                    mode="markdown"
                    width="100%"
                    height="100%"
                    value={code}
                    theme="github"
                    showPrintMargin={false}
                    onChange={onChange}
                    name="ace-editor"
                    setOptions={{ showLineNumbers: true }}
                    editorProps={{ $blockScrolling: false }}
                />
            </div>
           <Preview html={html}/>
       </div>
    </div>
  );
}

export default App;
