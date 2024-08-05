import { EventList } from "../../@/components/sections/@b2b-bazar/EventList";
// import { EventTabs } from "../../@/components/sections/@b2b-bazar/EventsTab";
// import SearchFilter from "../../@/components/sections/@b2b-bazar/SearchFilter";

const B2BBazaarPage: React.FC = () => {
  return (
    <div className="pt-10 pb-14">
      <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <SearchFilter /> */}
        <EventList />
      </main>
    </div>
  );
};

export default B2BBazaarPage;
