import { type ClubContactInfo } from "@prisma/client";

import ContactCard from "./contactCard";
import ContactOutline from "./contactOutline";
import ContactsEditor from "./contactsEditor";

type PropType = {
  contactInfos: ClubContactInfo[];
  clubProfileId: string;
  edit: boolean;
};

const Contact = (props: PropType) => {
  const { contactInfos, clubProfileId, edit } = props;

  return (
    <>
      <ContactOutline>
        <>
          {contactInfos.map(
            (clubContactInfo: ClubContactInfo, index: number) => (
              <ContactCard
                clubContactInfo={clubContactInfo}
                edit={edit}
                key={`clubContact${index}`}
              />
            ),
          )}
          {edit && <ContactsEditor clubProfileId={clubProfileId} />}
        </>
      </ContactOutline>
    </>
  );
};

export default Contact;