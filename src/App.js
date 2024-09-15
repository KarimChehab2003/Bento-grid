import './style.css'
import CreatePost from './Components/CreatePost';
import SocialMediaAi from './Components/SocialMediaAI';
import ScheduleMedia from './Components/ScheduleMedia';
import ContentAi from './Components/ContentAi';
import ManageAccounts from './Components/ManageAccounts';
import ConsistentSchedule from './Components/ConsistentSchedule';
import AudienceGrowth from './Components/AudienceGrowth';
import GrowFollowers from './Components/GrowFollowers';

function App() {
  return (
    <div className='w-full bg-gray-100'>
      <div className='max-w-screen-lg max-h-screen h-full mx-auto grid grid-cols-1 md:grid-cols-8 md:grid-rows-10 gap-8 md:gap-4 p-5' style={{ fontFamily: "DMSans-Medium" }}>
        <CreatePost />
        <SocialMediaAi />
        <ScheduleMedia />
        <ManageAccounts />
        <ConsistentSchedule />
        <ContentAi />
        <AudienceGrowth />
        <GrowFollowers />
      </div>
    </div>
  );
}

export default App;
