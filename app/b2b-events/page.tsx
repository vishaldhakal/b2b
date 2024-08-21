import { EventList } from "../../@/components/sections/@b2b-bazar/EventList";
import { DistrictSection } from "../../@/components/sections/@landing";
// import { EventTabs } from "../../@/components/sections/@b2b-bazar/EventsTab";
// import SearchFilter from "../../@/components/sections/@b2b-bazar/SearchFilter";

const B2BBazaarPage: React.FC = () => {
  return (
    <div className="pt-10">
      <main className="">
        {/* <SearchFilter /> */}
        <EventList />
        <DistrictSection />
      </main>
    </div>
  );
};

export default B2BBazaarPage;
