import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
    providers :[
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
              email: {
                label: 'Email',
                type: 'text',
              },
              password: {
                label: 'Password',
                type: 'passord'
              }
            },
        }) 
    ]
})
