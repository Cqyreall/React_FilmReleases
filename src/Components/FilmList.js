import React from 'react';
import Film from './Film.js'

const FilmList = ({films}) => {

   const filmNodes = films.map((film) => {
       return(
        <Film name={film.name} url={film.url}></Film>
       )
   })

        return(
            <div className="film-list">
                <h1>Upcoming Film Releases For the UK </h1>
                {filmNodes}
            </div>
        )
}

export default FilmList
