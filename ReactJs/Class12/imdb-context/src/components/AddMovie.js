import { useState, useRef } from 'react';
import withPageWrapperHOC from '../HOC/PageWrapper.hoc';

// const AddMovie = () => {

//     const [movieName, setMovieName] = useState('');
//     const [movieRating, setMovieRating] = useState(0);

//     console.log("Rerendered");
//     const handleMovieNameChange = (e) => {
//         setMovieName(e.target.value);
//     }

//     const handleMovieRatingChange = (e) => {
//         setMovieRating(e.target.value);
//     }

//     const handleSubmit = () => {
//         // Print form data on console
//         console.log(movieName, movieRating);
//     }
//     return (
//         <div className="add-movie-form">
//             <h1>Add Movie</h1>
//             <div>
//                 <input placeholder="Add new movie name" onChange={handleMovieNameChange}/>
//             </div>
//             <div>
//                 <input type="number" placeholder="Enter rating" onChange={handleMovieRatingChange}/>
//             </div>
            
//             <button onClick={handleSubmit}>Add</button>
//         </div>
//     )
// }


const AddMovie = (props) => {
    console.log(props);
    const nameRef = useRef();
    const ratingRef = useRef();
    const validationRef = useRef();

    console.log("Rerendered");
    const handleSubmit = () => {
        // Print form data on console
        console.log(nameRef.current.value);
        console.log(ratingRef.current.value);
        if (nameRef.current.value.length < 3) {
            nameRef.current.style.border = "1px solid red";
            validationRef.current.innerText = "Please enter min 3 char";
            validationRef.current.style.fontSize = "11px";
            validationRef.current.style.color = "red";
        }
        
    }
    return (
        <div className="add-movie-form">
            <h1>Add Movie</h1>
            <div>
                <input ref={nameRef} placeholder="Add new movie name" />
            </div>
            <div>
                <input ref={ratingRef} type="number" placeholder="Enter rating" />
            </div>
            
            <button onClick={handleSubmit}>Add</button>
            <div ref={validationRef}></div>
        </div>
    )
}

const AddMovieWithHoc =  withPageWrapperHOC(AddMovie);
// console.log(AddMovieWithHoc);

export default AddMovieWithHoc;