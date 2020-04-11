import React from 'react'
import renderHTML from 'react-render-html';
 


const Preview = ({html}) => {
    return (
        <div>
            {renderHTML(html)}
        </div>
    )
}

export default Preview