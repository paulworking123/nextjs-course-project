"use client"

import { useRouter } from "next/navigation";
import React from "react"

export default function Dashboard() {
    const router = useRouter();
    const [authorized, setAuthorized] = React.useState(false);

    React.useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.replace('/login');
        } else {
            setAuthorized(true);
        }
    }, []);

    if (!authorized) return null;

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        router.push("/login");
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
            <h1 className="text-red-500 border border-red-500">Dashboard (Only for logged in users can stay here!)</h1>
            <br />
            <button className="rounded border border-purple-300 p-2" onClick={handleLogout}>Logout</button>
        </div>
    )
}
