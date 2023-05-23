import React from "react";
import { Box } from "@chakra-ui/react";
import ProfileCard from "../component/Profile/ProfileCard";
import SecondProfileCard from "../component/Profile/SecondProfileCard";
import NotificationCard from "../component/Profile/NotificationCard";
import Layout from "@/component/RoootLayout/Layout";

function Profile() {
  return (
    <div>
      <Layout>
        <Box>
          <ProfileCard />
          <SecondProfileCard />
          <NotificationCard />
        </Box>
      </Layout>
    </div>
  );
}

export default Profile;
