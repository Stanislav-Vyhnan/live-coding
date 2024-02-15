import Image, { StaticImageData } from 'next/image';

import locationIcon from '@/icons/location-icon.svg';
import maleAvatar from '@/icons/male-avatar.png';
import femaleAvatar from '@/icons/female-avatar.png';

type Props = {
  fullName: string;
  location: string;
  yearsExperience: number;
};

const femaleNames = ['Alice Johnson', 'Eva Brown'];

const getAvatarUrl = (fullName: string): StaticImageData => {
  return femaleNames.includes(fullName) ? femaleAvatar : maleAvatar;
};

const CandidateHeader = ({ yearsExperience, fullName, location }: Props) => {
  return (
    <div className="flex items-center mt-3 px-4">
      <Image src={getAvatarUrl(fullName)} alt="Avatar" />
      <div className="ml-2.5 text-left">
        <p className="font-bold text-[22px]">{fullName}</p>
        <p className="flex font-medium text-grey-600">
          <Image src={locationIcon} alt="Location icon" className="mr-1" />
          {location}
        </p>
      </div>
      <div className="ml-auto border border-grey-300 rounded bg-experience-gradient py-2 px-7">
        <p className="text-[12px] text-grey-900 font-semibold">Experience</p>
        <p className="text-[12px]">
          <span className="text-[22px] font-bold">{yearsExperience}</span> years
        </p>
      </div>
    </div>
  );
};

export default CandidateHeader;
