
export function Movie(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>Year:{props.year}</p>
            <p>Rating:{props.rating}</p>
        </div>
    );
}
//set a default value for the 'rating' property
Movie.defaultProps={rating:' Not Rated'};
