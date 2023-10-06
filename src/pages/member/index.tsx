import { useUser } from "@clerk/nextjs";
import Error from "next/error";
import React, { useState } from "react";

import ClubMemberCard from "~/components/allClubs/clubMemberCard";
import LoadingPage from "~/components/loadingPage";
import { Input } from "~/components/shadcn_ui/input";
import UserLayout from "~/layouts/userLayout";
import { api } from "~/utils/api";
import { NextPageWithLayout } from "../_app";

const MemberClubs: NextPageWithLayout = () => {
  const [query, setQuery] = useState("");

  const { isLoaded, isSignedIn, user } = useUser();

  const {
    data: memberClubs,
    isLoading: memberClubsIsLoading,
    error: memberClubsError,
  } = api.clubRouter.getMemberClubs.useQuery();

  //TODO: Fetch all clubs that you are a member of
  //NOTE: If you are not a member of any clubs return a message saying that you are not a member of any clubs amd then a link to the clubs page

  if (memberClubsIsLoading) {
    return <LoadingPage />;
  } else if (memberClubsError) {
    return <Error statusCode={memberClubsError?.data?.httpStatus || 500} />;
  } else {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center ">
        <section className="mb-14 mt-20">
          <h1 className="tracking-none text-center text-4xl font-black uppercase text-black">
            My Clubs
          </h1>
        </section>

        <section className="w-full max-w-2xl px-4">
          <Input
            className="rounded-none border-x-0 border-b-2 border-t-0 border-secondary bg-transparent focus-visible:ring-0"
            placeholder={"Search"}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </section>

        <div className="m-10 flex w-full flex-wrap items-center justify-center">
          {memberClubs.map((club, index) => (
            <ClubMemberCard clubId={club.id} name={club.name} key={index} />
          ))}
        </div>
      </div>
    );
  }
};

MemberClubs.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default MemberClubs;
