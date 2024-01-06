import React, { createContext, useState } from 'react';

import type { TUserBio, ILayout } from 'types';
import { INITIAL_DATA, DEMO_DATA } from '@/lib/constants/context-data';


interface IDataContextType {
  data: TUserBio,
  showDemo: () => void,
  addProjectLink: (projectLink: string) => void,
  addSkills: (skill: string) => void,
  reset: () => void,
  toggleProfileImage: () => void,
  handleInputChange: (input: string, id: keyof TUserBio) => void,
  removeProject: (idx: number) => void,
  removeSkill: (idx: number) => void,
}


export const DataContext = createContext<IDataContextType | undefined>(undefined);


export const DataProvider = ({ children }: ILayout) => {
  const [data, setData] = useState<TUserBio>(INITIAL_DATA);

  // for showing demo data
  const showDemo = () => {
    setData(DEMO_DATA);
  }


  // add project
  function addProjectLink(projectLink: string) {
    setData((prev) => ({
      ...prev,
      projectLinks: [...prev.projectLinks, projectLink],
    }))
  }


  // add skills
  function addSkills(skill: string) {
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill]
    }))
  }


  // resetting whole form to
  function reset() {
    setData(INITIAL_DATA);
  }


  // include profile image or not
  function toggleProfileImage() {
    setData((prev) => ({ ...prev, displayProfile: !prev.displayProfile }))
  }


  // changing events inputs
  function handleInputChange(input: string, id: keyof TUserBio) {
    if (id === "name") {
      setData((prev) => ({ ...prev, name: input }))
    } else if (id === "bio") {
      setData((prev) => ({ ...prev, bio: input }))
    } else if (id === "portfolioLink") {
      setData((prev) => ({ ...prev, portfolioLink: input }))
    } else if (id === "email") {
      setData((prev) => ({ ...prev, email: input }))
    } else if (id === "githubUsername") {
      setData((prev) => ({ ...prev, githubUsername: input }))
    } else if (id === "linkedinUsername") {
      setData((prev) => ({ ...prev, linkedinUsername: input }))
    } else if (id === "twitterUsername") {
      setData((prev) => ({ ...prev, twitterUsername: input }))
    } else if (id === "youtubeUsername") {
      setData((prev) => ({ ...prev, youtubeUsername: input }))
    } else if (id === "discordUsername") {
      setData((prev) => ({ ...prev, discordUsername: input }))
    } else if (id === "devdotToUsername") {
      setData((prev) => ({ ...prev, devdotToUsername: input }))
    } else if (id === "hashnodeUsername") {
      setData((prev) => ({ ...prev, hashnodeUsername: input }))
    } else if (id === "mediumUsername") {
      setData((prev) => ({ ...prev, mediumUsername: input }))
    } else if (id === "whatsAppNumber") {
      setData((prev) => ({ ...prev, whatsAppNumber: input }))
    }
  }


  // delete project from array
  function removeProject(idx: number) {
    setData((prev) => ({
      ...prev,
      projectLinks: prev.projectLinks.filter((_, i) => i !== idx),
    }))
  }


  // for deleting skills from array
  function removeSkill(idx: number) {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== idx)
    }))
  }


  return (
    <DataContext.Provider value={{
      data,
      showDemo,
      addProjectLink,
      addSkills,
      reset,
      toggleProfileImage,
      handleInputChange,
      removeProject,
      removeSkill,
    }}>
      {children}
    </DataContext.Provider>
  );
};