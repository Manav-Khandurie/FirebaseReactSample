
import { Auth } from './components/auth'
import './App.css'
import { db } from './config/firebase-config';
import { useEffect, useState } from 'react';
import { getDocs,collection } from 'firebase/firestore';

function App() {
  const [movieList , setMovieList] = useState([]);

  const movieCollectionRef=collection(db,"movies"); //Our Collection Name 

  useEffect(()=>{
    const getMovieList = async ()=>
    {
      try{
        const data=await getDocs(movieCollectionRef);

        //to get filteredData

        const filteredData=data.docs.map((doc)=> ({
          ...doc.data(),
          id : doc.id ,
        }));
        console.log(filteredData);
        setMovieList(filteredData);
      }catch(error){
        console.error(error);
      }
    }
    getMovieList();
  } , [] );
  return <div className='Auth'> 
    <Auth />
    <div>
      {
        movieList.map((movie)=>{
          <div>
            <h1 style={
              { color : movie.recievedAnOscar ? "green":"red"} 
              }
            > 
              movie.title 
            </h1>
            <p> Date: {movie.releaseDate} </p>
          </div>
        })
      }
      </div> 
  </div>;
}

export default App
