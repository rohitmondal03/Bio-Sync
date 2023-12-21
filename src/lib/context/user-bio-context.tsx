import React, { createContext, useState } from 'react';

import type { TUserBio, ILayout } from 'types';
import { initialData, demoData } from '@/lib/constants/context-data';


interface IDataContextType {
  data: TUserBio,
  showDemo: () => void,
  addProjectLink: (projectLink: string) => void,
  reset: () => void,
  toggleProfileImage: () => void,
  handleInputChange: (input: string, id: keyof TUserBio) => void,
  removeProject: (idx: number) => void,
}


export const DataContext = createContext<IDataContextType | undefined>(undefined);


export const DataProvider = ({ children }: ILayout) => {
  const [data, setData] = useState<TUserBio>(initialData);

  // for showing demo data
  const showDemo = () => {
    setData(demoData);
  }

  // add project
  function addProjectLink(projectLink: string) {
    setData((prev) => ({
      ...prev,
      projectLinks: [...prev.projectLinks, projectLink],
    }))
  }

  // reset whole form
  function reset() {
    setData(initialData);
  }

  // include profile image or not
  function toggleProfileImage() {
    setData((prev) => ({ ...prev, displayProfile: !prev.displayProfile }))
  }

  // changing events inputs
  function handleInputChange(input: string, id: keyof TUserBio) {
    if (id === "name") {
      setData((prev) => ({ ...prev, name: input.trim() }))
    } else if (id === "bio") {
      setData((prev) => ({ ...prev, bio: input.trim() }))
    } else if (id === "email") {
      setData((prev) => ({ ...prev, email: input.trim() }))
    } else if (id === "githubLink") {
      setData((prev) => ({ ...prev, githubLink: input.trim() }))
    } else if (id === "linkedinLink") {
      setData((prev) => ({ ...prev, linkedinLink: input.trim() }))
    } else if (id === "twitterLink") {
      setData((prev) => ({ ...prev, twitterLink: input.trim() }))
    } else if (id === "portfolioLink") {
      setData((prev) => ({ ...prev, portfolioLink: input.trim() }))
    } else if (id === "youtubeLink") {
      setData((prev) => ({ ...prev, youtubeLink: input }))
    } else if (id === "discordLink") {
      setData((prev) => ({ ...prev, discordLink: input }))
    } else if (id === "devdotToLink") {
      setData((prev) => ({ ...prev, devdotToLink: input }))
    } else if (id === "hashnodeLink") {
      setData((prev) => ({ ...prev, hashnodeLink: input }))
    } else if (id === "mediumLink") {
      setData((prev) => ({ ...prev, mediumLink: input }))
    }
  }


  // delete project from array
  function removeProject(idx: number) {
    setData((prev) => ({
      ...prev,
      projectLinks: prev.projectLinks.filter((_, i) => i !== idx),
    }))
  }


  return (
    <DataContext.Provider value={{
      data,
      showDemo,
      addProjectLink,
      reset,
      toggleProfileImage,
      handleInputChange,
      removeProject,
    }}>
      {children}
    </DataContext.Provider>
  );
};