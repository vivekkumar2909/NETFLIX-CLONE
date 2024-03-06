import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const MoviesList = () =>{
    const {data , error ,isLoading} = useSWR('/api/Movies',fetcher,{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnReconnectFail: false,
        // revalidateOnReconnectSuccess: false
    });

    return {data, error,isLoading};
}

export default MoviesList;