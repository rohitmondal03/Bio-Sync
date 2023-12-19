import React, { createContext, useState } from 'react';

interface DataContextType {
  data: TUserBio;
}

const initialData: TUserBio = {
  bio: "",
  email: "",
  githubLink: "",
  includeProfilePicOrNot: false,
  linkedinLink: "",
  name: "",
  otherLinks: [],
  portfolioLink: "",
  profilePic: "",
  twitterLink: "",
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: ILayout) => {
  const [data, setData] = useState<TUserBio>(initialData);

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};