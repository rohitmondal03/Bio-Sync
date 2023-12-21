import { useUser } from '@/hooks/useUser';
import React, { createContext, useState } from 'react';

interface IDataContextType {
  data: TUserBio,
  showDemo: () => void,
  addProjectLink: (projectLink: string) => void,
  reset: () => void,
  toggleProfileImage: () => void,
  handleInputChange: (input: string, id: string) => void,
  removeProject: (idx: number) => void,
}

const initialData: TUserBio = {
  bio: "",
  email: "",
  githubLink: "",
  displayProfile: false,
  linkedinLink: "",
  name: "",
  projectLinks: [],
  portfolioLink: "",
  twitterLink: "",
};

const demoData: TUserBio = {
  name: "Rohit Mondal",
  bio: "I'm a frontend developer having expertise in making user-friendly websites and cross-platform websites using ReactJS. I've expertise in NextJS, TypeScript, Prisma and other popular frameworks and libraries including Tailwind CSS",
  email: "rohitmondall8000@gmail.com",
  linkedinLink: "https://www.linkedin.com/in/rohit-mondal-61662a16b/",
  githubLink: "https://github.com/rohitmondal03",
  portfolioLink: "https://portfolio-ten-virid-46.vercel.app/",
  twitterLink: "https://twitter.com/RohitMo62534745",
  projectLinks: ["https://opentyped-nextjs.vercel.app/", "https://imagewall.vercel.app/"],
  displayProfile: true,
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
  function handleInputChange(input: string, id: string) {
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