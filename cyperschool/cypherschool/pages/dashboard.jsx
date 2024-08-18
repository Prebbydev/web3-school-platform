import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import { base_url_grp, subgraph_id } from '../helpers/constaant'; 
import Sidebar from "./../components/SideBar/sidebar"
import Profile from './../components/UserProfile/userpProfile'
import Notification from './../components/Notification/notification'
import UserDash from "./../components/Dashboard/dashboard"
import Courses from "./../components/Courses/courses"
import Community from "./../components/Community/community"
import AuthMiddleware from "../middlewares/AuthMiddleware"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { gql, request } from 'graphql-request'

const Home = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const query = gql`{
        createCourses(first: 5) {
          reward
          submitLink
          title
          transactionHash
          courseId
          courseURL
          credit
        }
      }`



    // {base_url}/api/{api_key}/subgraphs/id/{subgraph_id}
    const api_key = process.env.NEXT_PUBLIC_GRP;

    const url = `https://gateway-testnet-arbitrum.network.thegraph.com/api/${api_key}/subgraphs/id/${subgraph_id}`
    console.log(url)

  // const queryClient = new QueryClient()
  // await queryClient.prefetchQuery({
  //   queryKey: ['data'],
  //   async queryFn() {
  //     return await request(url, query)
  //   }
  // })
  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };
  return (
    // <AuthMiddleware>


    <div className="dashboard-container">
      <Sidebar onSectionChange={handleSectionChange} />

      <div className="main-content">
        {currentSection === 'dashboard' && <UserDash />}
        {currentSection === 'profile' && <Profile />}
        {currentSection === 'community' && <Community />}
    {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
        {currentSection === 'courses' && <Courses />}
    {/* </HydrationBoundary> */}
        {currentSection === 'notification' && <Notification />}

      </div>
    </div>
  //  </AuthMiddleware>
  );
};

export default Home;
