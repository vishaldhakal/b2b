import B2BNetworkingEvents from "../../@/components/sections/@b2b-bazar/b2b-events-list";
import B2BHero from "../../@/components/sections/@b2b-bazar/b2b-hero";
import { EventList } from "../../@/components/sections/@b2b-bazar/EventList";
import { DistrictSection } from "../../@/components/sections/@landing";
// import { EventTabs } from "../../@/components/sections/@b2b-bazar/EventsTab";
// import SearchFilter from "../../@/components/sections/@b2b-bazar/SearchFilter";

const B2BBazaarPage: React.FC = () => {
  return (
    <>
      <B2BHero />
      <div className="pt-10">
        <main className="">
          {/* <SearchFilter /> */}
          <B2BNetworkingEvents />
          <DistrictSection />
        </main>
      </div>
    </>
  );
};

export default B2BBazaarPage;
