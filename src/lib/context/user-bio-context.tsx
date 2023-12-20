import React, { createContext, useState } from 'react';

interface IDataContextType {
  data: TUserBio,
  showDemo: () => void,
}

const initialData: TUserBio = {
  bio: "",
  email: "",
  githubLink: "",
  includeProfilePicOrNot: false,
  linkedinLink: "",
  name: "",
  projectLinks: [],
  portfolioLink: "",
  profilePic: "",
  twitterLink: "",
};

const demoData: TUserBio = {
  bio: "I'm a frontend developer having expertise in making user-friendly websites and cross-platform websites using ReactJS. I've expertise in NextJS, TypeScript, Prisma and other popular frameworks and libraries including Tailwind CSS",
  email: "rohitmondall8000@gmail.com",
  githubLink: "https://www.github.com/rohitmondal03",
  includeProfilePicOrNot: true,
  linkedinLink: "",
  name: "Rohit Mondal",
  projectLinks: ["", ""],
  portfolioLink: "",
  profilePic: "",
  twitterLink: "",
}

export const DataContext = createContext<IDataContextType | undefined>(undefined);

export const DataProvider = ({ children }: ILayout) => {
  const [data, setData] = useState<TUserBio>(initialData);

  const showDemo= () => {
    setData(demoData);
  }

  return (
    <DataContext.Provider
      value={{
        data,
        showDemo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};