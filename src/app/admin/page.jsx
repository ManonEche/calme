"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Power, Search, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import "moment/locale/fr";

export default function Admin() {
  // Variable
  const { data: session } = useSession();

  // States
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/quiz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            quizzes
          })
        });
        const data = await response.json();
        setQuizzes(data.quizzes);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getUserInfo = (userId) => {
    const selectedUser = users.find((user) => user._id === userId);
    return selectedUser ? selectedUser : {};
  }

  const selectedUserInfo = getUserInfo(selectedUserId);

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

        <div className="lg:px-52 h-screen">
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
            {displayUsers
              .sort((a, b) => {
                const nameA = `${a.firstname} ${a.firstname}`.toLowerCase();
                const nameB = `${b.firstname} ${b.firstname}`.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
              })
              .map(user => (
              <li key={user._id}>
                <div
                  className="text-2xl pb-3 px-16 capitalize"
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedUserId(user._id)
                  }}
                >
                  {user.firstname}
                  {` ${user.lastname}`}
                </div>

                {/* Modal */}
                {openModal && (
                  <div className="fixed inset-0 bg-calme-dark bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-calme-light py-5 px-8 rounded-2xl w-4/5 h-4/5 overflow-y-scroll border-calme-light border-8">
                      <div className="pb-3 sm:pb-0 sm:absolute sm:w-4/5 flex justify-end sm:pe-20">
                        <button onClick={() => setOpenModal(false)}>
                          <X />
                        </button>
                      </div>
                      <div className="text-start whitespace-pre-line">
                        <div>
                          {quizzes.filter((quiz) => quiz.userId === selectedUserId).map((quiz) => (
                            <div key={quiz._id}>
                              <div className="flex justify-center">
                                <div className="md:w-3/5">
                                  <h3 className="text-2xl font-semibold text-start pb-5 ps-2">Informations personnelles</h3>

                                  <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                                    <div>
                                      <h4 className="font-bold pb-1">Nom</h4>
                                      <p className="capitalize pb-4">{selectedUserInfo.lastname}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Prénom</h4>
                                      <p className="capitalize pb-4">{selectedUserInfo.firstname}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Email</h4>
                                      <p className="lowercase pb-4">{selectedUserInfo.email}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Numéro de téléphone</h4>
                                      <p className="pb-4">{quiz.phoneNumber}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Date de naissance</h4>
                                      <p className="pb-4">
                                        {moment
                                          .utc(quiz.birth, "YYYY-MM-DD")
                                          .tz("Europe/Paris")
                                          .format("DD-MM-YYYY")
                                        }
                                      </p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Genre</h4>
                                      <p className="capitalize pb-4">{quiz.gender}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Type de peau</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.skin)}</p>
                                    </div>
                                  </div>

                                  <h3 className="text-2xl font-semibold text-start py-5 ps-2">Hydratation</h3>

                                  <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                                    <div>
                                      <h4 className="font-bold pb-1">Visage</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.facialHydration)}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Mains</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.handHydration)}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Corps</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.bodyHydration)}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Produit(s) utilisé(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.products)}</p>
                                    </div>
                                  </div>

                                  <h3 className="text-2xl font-semibold text-start py-5 ps-2">Attentes</h3>

                                  <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                                    <div>
                                      <h4 className="font-bold pb-1">Résultat(s) souhaité(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.results)}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Zone(s) à cibler</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.areas)}</p>
                                    </div>
                                  </div>

                                  <h3 className="text-2xl font-semibold text-start py-5 ps-2">Préférences et Allergies</h3>

                                  <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                                    <div>
                                      <h4 className="font-bold pb-1">Parfum(s)/ingrédient(s) souhaité(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.preferences)}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Allergie(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.allergies)}</p>
                                    </div>
                                  </div>

                                  <h3 className="text-2xl font-semibold text-start py-5 ps-2">Expériences</h3>

                                  <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                                    <div>
                                      <h4 className="font-bold pb-1">Déjà visité un institut</h4>
                                      <p className="capitalize pb-4">{quiz.choice}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Type de service(s) utilisé(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.experience)}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Service(s) apprécié(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.experiences)}</p>
                                    </div>

                                    <div>
                                      <h4 className="font-bold pb-1">Service(s) moins apprécié(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.improvements)}</p>
                                    </div>
                                  </div>

                                  <h3 className="text-2xl font-semibold text-start py-5 ps-2">Autres commentaires</h3>

                                  <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                                    <div>
                                      <h4 className="font-bold pb-1">Commentaire(s)</h4>
                                      <p className="pb-4">{capitalizeFirstLetter(quiz.remarks)}</p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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