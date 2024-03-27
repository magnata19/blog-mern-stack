import { TextInput, Button } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl font-mono">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="profile picture"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput type="text" id='username' placeholder="Username" defaultValue={currentUser.username}/>
        <TextInput type="email" id='email' placeholder="Email" defaultValue={currentUser.email}/>
        <TextInput type="password" id='password' placeholder="********"/>
        <Button type="submit" gradientDuoTone={'purpleToBlue'} outline>Update</Button>
      </form>
      <div className="text-red-500 flex justify-between">
        <span className="cursor-pointer mt-5">Delete account</span>
        <span className="cursor-pointer mt-5">Sign out</span>
      </div>
    </div>
  );
};

export default DashProfile;
