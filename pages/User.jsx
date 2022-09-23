import { getSession, signOut } from "next-auth/react"

// gets a prop from getServerSideProps
function User({ user }) {
    return (
        <div>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => signOut({ redirect: "/signin" })}
            >
                Sign out
            </button>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    return {
        props: { user: session.user },
    }
}

export default User
