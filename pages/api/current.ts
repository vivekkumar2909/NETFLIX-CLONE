import { NextApiRequest,NextApiResponse } from "next";

import ServerAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        return res.status(450).end();
    }
    try{
        const {Curr_user} = await ServerAuth(req);
        return res.status(200).json(Curr_user);
    }catch(error){
        console.log(error);
        return res.status(400).end();
    }
}