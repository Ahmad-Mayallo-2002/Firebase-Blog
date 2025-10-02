import GridSystem from "../components/profile/GridSystem";
import ProfileHero from "../components/profile/hero";
import ProfileCounts from "../components/profile/profileCounts";

export default function Profile() {
  return (
    <>
      <ProfileHero />
      <ProfileCounts />
      <GridSystem />
    </>
  );
}
