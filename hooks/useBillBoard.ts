import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBillBoard = () =>{
    const {data, error,isLoading} = useSWR('/api/random',fetcher,{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnReconnectFail: false,
        // revalidateOnReconnectSuccess: false
    });

    return {
        data,
        error,
        isLoading,
    };
}

export default useBillBoard;