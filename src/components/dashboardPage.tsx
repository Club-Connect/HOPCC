import "@prisma/client";

import { Toaster } from "react-hot-toast";

import Applications from "./dashboard/applications/applications";
import Events from "./dashboard/clubEvents/events";
import Contact from "./dashboard/contact/contact";
import Description from "./dashboard/description/description";
import Header from "./dashboard/header/header";
import Members from "./dashboard/members/members";
import SocialMedia from "./dashboard/socialMedia/socialMedia";
import Tab from "./tab/tab";
import TabContent from "./tab/tabContent";
import TabHeader from "./tab/tabHeader";
import TabList from "./tab/tabList";

import type {
  ClubApplication,
  ClubContactInfo,
  ClubEvent,
  ClubMember,
  ClubProfile,
  ClubSocialMedia,
  User,
} from "@prisma/client";

type PropType = {
  name: string;
  clubId: string;
  description: string;
  events: ClubEvent[];
  contactInfos: ClubContactInfo[];
  applications: ClubApplication[];
  socialMedias: ClubSocialMedia[];
  members: (ClubMember & {
    user: User;
  })[];
};

const DashboardPage = (props: PropType) => {
  const {
    name,
    clubId,
    clubProfile,
    events,
    contactInfos,
    applications,
    socialMedias,
    members,
  } = props;
  
  isAdminPage: boolean;
};

const DashboardPage = (props: PropType) => {
  const { name, clubId, description, events, contactInfos, applications, isAdminPage } =
    props;

  return (
    <>
      <Toaster />
      <Header name={name} editable={isAdminPage} />

      <main className="relative flex justify-center">
        <Tab>
          <TabList>
            <TabHeader>About Us</TabHeader>
            <TabHeader>Applications</TabHeader>
            <TabHeader>Members</TabHeader>
          </TabList>
          <TabContent>
            <div className="mx-10 flex flex-col gap-10">
              <Description
                clubId={clubProfile.id}
                clubDescription={clubProfile.description}
                edit={true}
              />
              <Contact
                contactInfos={contactInfos}
                clubProfileId={clubProfile.id}
                edit={true}
              />
              <SocialMedia
                socialMedias={socialMedias}
                clubId={clubId}
                edit={true}
              />
            </div>
          </TabContent>
          <TabContent>
            <Applications
              applications={applications}
              clubId={clubId}
              editable={isAdminPage}
            />
          </TabContent>
          <TabContent>
            <Members clubId={clubId} members={members} />
          </TabContent>
        </Tab>
      </main>

      <Events events={events} clubId={clubId} editable={isAdminPage} />
    </>
  );
};

export default DashboardPage;
