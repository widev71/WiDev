// Import yang diperlukan
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiDiscord } from "react-icons/si";
import getUserData, { ApiResponse } from "@/app/api/discordUser"; // Mengimport fungsi getUserData dan ApiResponse
import { PROFILE_PICTURE_URL } from "@/constants";

export default function Callsign({ display }: { display: string }) {
  const [userData, setUserData] = useState<ApiResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData("882265698372558878"); // Mengganti dengan Discord user ID yang diinginkan
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      // Ganti dengan profil Discord yang sesuai
      href={`https://discord.com/users/882265698372558878`}
      className={`cursor-pointer relative w-fit max-w-xs m-auto p-4 items-center gap-4 border__color rounded-md lg:w-52 ${display}`}
    >
      <div className="w-16 flex-shrink-0">
        {isLoading ? (
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div> // Placeholder untuk gambar avatar saat loading
        ) : (
          <Image
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            src={userData?.data?.discord_user ? `https://cdn.discordapp.com/avatars/${userData.data.discord_user.id}/${userData.data.discord_user.avatar}.webp?size=128` : PROFILE_PICTURE_URL}
            alt="DISCORD_PROFILE"
            width={64}
            height={64}
            priority
          />
        )}
      </div>

      <div className="flex-1">
        <div className="font-medium leading-tight">
          {isLoading ? (
            <div className="w-20 h-4 bg-gray-200 rounded"></div> // Placeholder untuk username saat loading
          ) : (
            `@${userData?.data.discord_user.username}`
          )}
        </div>
        {isLoading ? (
            <div className="mt-1 w-16 h-3 bg-gray-200 rounded"></div>
        ) : userData?.data?.activities && userData.data.activities.length > 0 ? (
          <div className="mt-1 text-xs max-w-full truncate">
            <div className="truncate w-full block">
              <span className="text-gray-400">Activity: </span>
              <span className="font-semibold text-primary-gradient">{userData.data.activities[0].name}</span>
            </div>
            {userData.data.activities[0].details && (
              <span className="block mt-0.5 truncate text-gray-500">
                {userData.data.activities[0].details}
              </span>
            )}
            {userData.data.activities[0].state && (
              <span className="block truncate text-gray-500">
                {userData.data.activities[0].state}
              </span>
            )}
          </div>
        ) : (
            <div className="mt-1 text-xs text-gray-400 capitalize">
                Status: {userData?.data.discord_status ?? 'Unknown'}
            </div>
        )}
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiDiscord size={20} color={"#5865F2"} />
      </div>
    </a>
  );
}
