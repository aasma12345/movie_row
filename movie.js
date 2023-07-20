import Row from './Row.js'
import Row2 from './Row2.js'
import Action from './Action.js'
const Grid=({ movie,onDelete})=>{
	return(
    <>
        <div class="col9">
            <div class="col6">
                <img class="col10" src={movie.poster}/>
            </div>
            <div class="col11">
                <h1>{movie.Movie_name}</h1>
                <p>{movie. Y_H_M}</p>
                <p>{movie. Type}</p>
                <h4>{movie.description}</h4>
                <p>{movie.Description}</p>
                <Action  onDelete={ onDelete}/>
                

            </div>
       </div>
    
	</>
);
}
export default Grid;

