import Following from "./following";
import RecentActivities from "./recentActivities";
import Skills from "./skills";

export default function Sidebar() {
  return (
    <>
      <Skills />
      <RecentActivities />
      <Following />
    </>
  );
}
