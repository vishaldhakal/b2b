import { EventTabs } from "../../@/components/sections/@b2b-bazar/EventsTab";
import SearchFilter from "../../@/components/sections/@b2b-bazar/SearchFilter";

const B2BBazaarPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-10 pb-40">
      <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SearchFilter />
        <EventTabs />
      </main>
    </div>
  );
};

export default B2BBazaarPage;
