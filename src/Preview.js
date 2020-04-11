import React from 'react'
import renderHTML from 'react-render-html';
import './Preview.css'


const Preview = ({html}) => {
    return (
        <div className="border border-dark preview px-4">
            <h4 className="border-bottom my-3">Preview your Markdown here: </h4>
            {renderHTML(html)}
        </div>
    )
}

export default Preview