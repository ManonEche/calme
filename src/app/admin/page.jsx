"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Power, Search } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Admin() {
  // Variable
  const { data: session } = useSession();

  // States
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Functions
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
    const filtered = users.filter(user => {
      const fullName = `${user.firstname} ${user.lastname}`.toLowerCase();
      return fullName.includes(value.toLowerCase());
    });
    setFilteredUsers(filtered);
  } 

  const displayUsers = filteredUsers.length > 0 ? filteredUsers : users;

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

        <div className="px-52">
          <div className="flex justify-center items-center gap-2 rounded-3xl bg-white px-5 py-3 mx-14 my-8">
            <Search />
            <input
              type="search"
              name="search"
              className="w-full outline-none text-xl"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <ul>
            {displayUsers.map(user => (
              <li key={user._id}>
                <div className="text-2xl pb-3 px-16 capitalize">
                  {user.firstname}
                  {` ${user.lastname}`}
                </div>
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