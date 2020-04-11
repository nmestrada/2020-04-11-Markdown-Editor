import React, {useState, useEffect} from 'react';
import * as Showdown from "showdown";
import './App.css';
import Preview from './Preview';
import Editor from './Editor';

//markdown converter
const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });
   
const App = () => {
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
        <h1 className="m-auto py-3">Live Markdown Editor</h1>
        <div className="container ">
           <Editor code={code} onChange={onChange}/>
           <Preview html={html}/>
       </div>
    </div>
  );
}

export default App;
