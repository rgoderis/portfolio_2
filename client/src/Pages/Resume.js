import React from 'react';
import resume from "../images/Resume.pdf"

function Resume(){
    return(
        <div>
            <embed src={resume} width="100%" height="800px" title="Resume"/>
        </div>
    )
}

export default Resume