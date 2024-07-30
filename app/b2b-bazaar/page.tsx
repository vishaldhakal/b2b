import { EventTabs } from "../../@/components/sections/@b2b-bazar/EventsTab";
import { EventList } from "../../@/components/sections/@b2b-bazar/EventList";
import { CreateEventButton } from "../../@/components/sections/@b2b-bazar/CreateEventButton";
import SearchFilter from "../../@/components/sections/@b2b-bazar/SearchFilter";

const B2BBazaarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <SearchFilter />
        <EventTabs />
        <EventList />
        <CreateEventButton />
      </main>
    </div>
  );
};

export default B2BBazaarPage;
