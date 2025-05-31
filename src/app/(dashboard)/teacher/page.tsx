import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";


const TeacherPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
    <div className="w-full lg:w-2/3">
      <div className="bg-white h-full p-4 rounded-md">
          <h1 className="font-semibold text-xl">Schedule</h1>
          <BigCalendar/>
      </div>
    </div>

    <div className="w-full lg:w-1/3 flex flex-col gap-8">
    <EventCalendar/>
    <Announcements/>
    </div>
  </div>
  );
};


///

export default TeacherPage;