import BillBoard from '@/components/BillBoard';
import MoviesList from '@/components/MoviesList';
import Navbar from '@/components/Navbar';
import useCurrentUser from '@/hooks/useCurrentUser';
import useMoviesList from '@/hooks/useMoviesList'; 
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

  return (
    

    <>
      <Navbar />
      <BillBoard />
      <div className='pb-40'>
        <MoviesList data={movies} title='Trending Movies'  />
      </div>
    </>
  );
}
