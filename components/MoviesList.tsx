import React from 'react';
import {isEmpty} from 'lodash'

interface MoviesListProps {
    data : Record<string, any>,
    title: string,
}

const MoviesList:React.FC<MoviesListProps> = ({data,title}) =>{

    if(isEmpty(data)){
        return null;
    }

    return (
        <div className=" px-4 md:px14 mt-4 space-y-8">
            <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
                {title}
            </p>
        </div>
    )
}

export default MoviesList;