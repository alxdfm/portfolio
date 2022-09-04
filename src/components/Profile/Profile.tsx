import React from "react";
import { ContainerProfile, Description, Name, Picture, } from "./styles";

export type Props = {
	name: string,
	description: string,
	url: string
}

const Profile = (profileData: Props) => {
  return (
		<ContainerProfile>
			<Picture url={profileData.url}/>
			<Name>
				{profileData.name}
			</Name>
			<Description>
				{profileData.description}
			</Description>
		</ContainerProfile>
	)
}

export default Profile;
