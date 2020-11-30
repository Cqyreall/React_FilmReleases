import React from 'react';

const Film = ({name, url}) => {

    return(
        <div className="film">
            <ul>
                <li>
                    <h3><a href={url}>{name}</a></h3>
                </li>
            </ul>
            
        </div>
      
    )
}

export default Film;
