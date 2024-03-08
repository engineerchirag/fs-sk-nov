import FavouriteMovieProvider from "../context/FavouriteMovie";
import PageWrapper from "../layout/PageWrapper";
import AddMovie from "./AddMovie";
import Counter from "./Counter";
import Header from "./Header";
import Heading from "./Heading";
import MovieDetail from "./MovieDetail";
import MovieFavourites from "./MovieFavourites";
import MovieList from "./MovieList";
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//             <Header />
//             <MovieList />
//         </>
//       ),
//     },
//     {
//         path: "/movie-detail/:movieId",
//         element: (
//           <>
//               <Header />
//               <MovieDetail />
//           </>
//         ),
//       },
//       {
//           path: "/add-movie",
//           element: (
//             <>
//                 <Header />
//                 <AddMovie />
//             </>
//           ),
//         }
//   ]);

// const MovieApp = () => {
//     return (
//         <RouterProvider router={router} />
//     );
// }

const MovieApp = () => {
    return (
        <FavouriteMovieProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
                    <Route path="/favourites" element={<MovieFavourites />} />
                    <Route path="/add-movie" element={
                        <PageWrapper>
                            <AddMovie />
                        </PageWrapper>
                    } />
                    <Route path="/counter" element={
                        <PageWrapper>
                            <Counter />
                        </PageWrapper>
                    } />
                </Routes>
            </BrowserRouter>
        </FavouriteMovieProvider>
    )
}



export default MovieApp;