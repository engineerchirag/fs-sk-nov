import FavouriteMovieProvider from "../context/FavouriteMovie";
import PageWrapper from "../layout/PageWrapper";
import AddMovieWithHoc from "./AddMovie";
// import Counter from "./Counter";
import Header from "./Header";
// import Heading from "./Heading";
// import MovieDetail from "./MovieDetail";
// import MovieFavourites from "./MovieFavourites";
import MovieList from "./MovieList";
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
  import { Suspense, lazy } from 'react';
  import LoginUnControlled from './LoginUnControlled';

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

const LazyCounterComponent = lazy(() => import('./Counter'));
const LazyMovieDetailComponent = lazy(() => import('./MovieDetail'));
const LazyMovieFavouritesComponent = lazy(() => import('./MovieFavourites'));

const MovieApp = () => {
    return (
        <FavouriteMovieProvider>
            <BrowserRouter>
                <Header />
                <LoginUnControlled />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie-detail/:movieId" element={
                        <Suspense  fallback={"Loading ..."}>
                            <LazyMovieDetailComponent />
                        </Suspense>
                    } />
                    <Route path="/favourites" element={
                        <Suspense  fallback={"Loading ..."}>
                            <LazyMovieFavouritesComponent />
                        </Suspense>
                    } />
                    <Route path="/add-movie" element={<AddMovieWithHoc />} />
                    <Route path="/counter" element={
                        <PageWrapper>
                            <Suspense fallback={"Loading ..."}>
                                <LazyCounterComponent />
                            </Suspense>
                            {/* <Counter /> */}
                        </PageWrapper>
                    } />
                </Routes>
            </BrowserRouter>
        </FavouriteMovieProvider>
    )
}



export default MovieApp;