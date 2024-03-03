import { NextApiRequest,NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import ServerAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        return res.status(450).end();
    }
    try{
        await ServerAuth(req);
        const Movies = prismadb.movie.findMany();
        return res.status(200).json(Movies);
    }catch(error){
        return res.status(500).json(error);
    }
}