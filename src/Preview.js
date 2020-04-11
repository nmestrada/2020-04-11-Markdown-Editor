import React from 'react'
import renderHTML from 'react-render-html';
import './Preview.css'


const Preview = ({html}) => {
    return (
        <div className="preview border border-dark p-2">
            <h4 className="my-3">Preview your Markdown here: </h4>
            <div className="content m-4">
                {renderHTML(html)}
            </div>
        </div>
    )
}

export default Preview