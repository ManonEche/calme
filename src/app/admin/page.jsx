"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Power } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Admin() {
  // Variable
  const { data: session } = useSession();

  // State
  const [users, setUsers] = useState([]);

  // Function
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            users
          })
        });
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    }
      fetchUsers();
  }, [session]);

  return (
    <div className="min-h-screen w-screen">
      <Header />
      <div className="min-h-screen">
        {session?.user?.email && (
          <div className="flex justify-end my-4 mx-8">
            <Link href="/home">
              <Power onClick={() => signOut()} />
            </Link>
          </div>
        )}

        <h1 className="text-5xl text-center mt-11 mb-12">Mes clients</h1>

        <div>
          <ul>
            {users.map(user => (
              <li key={user._id}>
                {user.firstname}
                {user.lastname}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-5">
          <Footer />
        </div>
      </div>
    </div>
  )
}