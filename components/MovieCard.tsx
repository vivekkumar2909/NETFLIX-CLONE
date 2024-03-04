import React from "react";

interface MovieCardProps{
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    return (
        <div>
            Movies
        </div>
    )
}

export default MovieCard;