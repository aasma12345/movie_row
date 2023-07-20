"use client";
import Grid from './movie';
import Header from './Row.js';
import Row2 from './Row2.js';
import Action from './Action.js';
import  {movie_list} from './data';
import { useState } from "react";
function Mom(){
    const [data,setData]=useState(movie_list);

  const handleDelete=(id) => {
    const updatedRows=data.filter((datas)=>datas.id!==id);
    setData(updatedRows);
    };
    

	return(
	<>
	    <Header/>
	    <Row2/>
	   {data.map((movie) => (
	          <Grid
	          key={movie.id}
	          movie={movie}
	          onDelete={() => handleDelete(movie.id)}
	         />
	          

	       ))};

	    
	</>
	);
}
export default Mom;



