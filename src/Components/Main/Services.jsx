import { AllInOne } from "./AllInOne";
import { ServicesCard } from "./Cards/ServiceCard";
import { DataSvg, DataSvgBackground } from "../SVGs/DataSvg";
import { MobileAppBg } from "../SVGs/MobileAppBg";
import { MobileApp } from "./Cards/MobileApp";
import { AlertCenterPreview } from "./Cards/AlertCenterPreview";
import { AlertCenterBg } from "./Cards/AlertCenterBg";
import { IntegrationsHub } from "./Cards/IntegrationsHub";
import { Options } from "../SVGs/Options";
import { OptionsBg } from "./Cards/OptionsBg";

export const Services = () => {
  return (
    <section className="w-10/12 py-16 flex flex-col gap-10">
      <AllInOne />
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center md:items-stretch gap-5">
        <ServicesCard
          position="relative"
          background={<DataSvgBackground />}
          preview={<DataSvg />}
          title={"Insights at your fingertips"}
          description={
            "All your data and finances in one place to provide quick answers and make decisions instantly."
          }
        />
        <ServicesCard
          position="relative"
          background={<MobileAppBg />}
          preview={<MobileApp />}
          title="Manage in real time"
          description="Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023."
        />
        <ServicesCard
          position="relative"
          preview={<AlertCenterPreview />}
          background={<AlertCenterBg />}
          title="Important business alerts"
          description="Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click."
        />
        <ServicesCard
          preview={<Options />}
          background={<OptionsBg />}
          title="You’re in control"
          description="Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode."
          additionalStyle=""
        />
        <div className="">
          <IntegrationsHub
            title="Connect all your apps"
            description="Bring your data with our built-in integrations for accounting, revenue tools and banking."
          />
        </div>
        
      </div>
    </section>
  );
};