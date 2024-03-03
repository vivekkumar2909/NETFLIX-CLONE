import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const MoviesList = () =>{
    const {data , error ,isLoading, mutate} = useSWR('/api/current',fetcher,{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnReconnectFail: false,
        // revalidateOnReconnectSuccess: false
    });

    return {data, error,isLoading, mutate};
}

export default MoviesList;