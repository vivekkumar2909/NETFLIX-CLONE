import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from '@/lib/prismadb';

const ServerAuth = async (req: NextApiRequest) =>
{
    const session = await getSession({ req });
    if (!session?.user?.email) {
        throw new Error('Not signed In');
    }

    const Curr_user = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!Curr_user) {
        throw new Error('Not signed In');
    }

    return {Curr_user}
};

export default ServerAuth;
