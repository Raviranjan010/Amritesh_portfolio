import Marquee from "../components/Marquee";
import { highlights } from "../constants";

const ServiceSummary = () => {
  return (
    <section className="pb-14 pt-4 md:pb-20">
      <Marquee
        items={[...highlights, ...highlights]}
        className="border-y border-[#08111f]/10 bg-transparent py-1 text-[#08111f]"
        iconClassName="text-[#4f69ff]"
        icon="mdi:sparkles"
      />
    </section>
  );
};

export default ServiceSummary;
