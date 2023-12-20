import { getServerAuthSession } from "@/server/auth";
import InputForm from "./user-input-form";
import MobilePreview from "./mobile-preview";

export default async function UploaderWidget() {
  const sessionDetails = await getServerAuthSession();

  const userDetails = sessionDetails?.user;
  const userName = userDetails?.name;
  const userEmail = userDetails?.email;
  const userProfilePic = userDetails?.image;


  return (
    <div className="flex flex-row items-start justify-around my-2">
      <InputForm />

      {/* Mobile preview screen */}
      <div className="hidden items-center justify-end lg:flex">
        <MobilePreview />
      </div>
    </div>
  )
}