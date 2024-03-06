import BillBoard from '@/components/BillBoard';
import MoviesList from '@/components/MoviesList';
import Navbar from '@/components/Navbar';
import useCurrentUser from '@/hooks/useCurrentUser';
import useMoviesList from '@/hooks/useMoviesList'; 
import useFavorites from '@/hooks/useFavorites'; 
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {

  // const { data: user } = useCurrentUser();
  const {data:movies = []} = useMoviesList()
  const {data:favorites = []} = useFavorites()
  // console.log("len",movies.length)

  return (
    

    <>
      <Navbar />
      <BillBoard />
      <div className='pb-40'>
        <MoviesList data={movies} title='Trending Now'  />
        <MoviesList data={favorites} title='My List'  />
      </div>
    </>
  );
}
