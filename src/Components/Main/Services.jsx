import { AllInOne } from "./Cards/AllInOne";
import { ServicesCard } from "./Cards/ServiceCard";
import { DataSvg, DataSvgBackground } from "../SVGs/DataSvg";
import { MobileAppBg } from "../SVGs/MobileAppBg";
import { MobileApp } from "./Cards/MobileApp";
import { AlertCenterPreview } from "./Cards/AlertCenterPreview";
import { AlertCenterBg } from "./Cards/AlertCenterBg";
import { IntegrationsHub } from "./Cards/IntegrationsHub";

export const Services = () => {
  return (
    <section className="w-10/12 py-16 flex flex-col gap-10">
      <AllInOne />
      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:items-stretch gap-5">
        <ServicesCard
          background={<DataSvgBackground />}
          preview={<DataSvg />}
          title={"Insights at your fingertips"}
          description={
            "All your data and finances in one place to provide quick answers and make decisions instantly."
          }
        />
        <ServicesCard
          background={<MobileAppBg />}
          preview={<MobileApp />}
          title="Manage in real time"
          description="Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023."
        />
        <ServicesCard
          preview={<AlertCenterPreview />}
          background={<AlertCenterBg />}
          title="Important business alerts"
          description="Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click."
        />
        <div className="lg:col-start-1 lg:col-end-3">
          <IntegrationsHub
            title="Connect all your apps"
            description="Bring your data with our built-in integrations for accounting, revenue tools and banking."
          />
        </div>
      </div>
    </section>
  );
};
