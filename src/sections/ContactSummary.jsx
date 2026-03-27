import { learningJourney } from "../constants";

const ContactSummary = () => {
  return (
    <section id="journey" className="mx-auto mt-10 w-full max-w-7xl px-4 pb-6 md:px-10">
      <div className="rounded-[2.5rem] border border-[#08111f]/8 bg-[linear-gradient(180deg,#ffffff_0%,#eef3ff_100%)] p-6 shadow-[0_25px_80px_rgba(18,29,54,0.06)] md:p-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.35rem] text-slate-500">
            Training & Credentials
          </p>
          <h2 className="text-4xl font-black uppercase text-[#08111f] md:text-5xl">
            Journey
          </h2>
          <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            A focused progression through DSA training, cloud fundamentals,
            scientific computing, and practical web development.
          </p>
        </div>
        <div className="mt-10 grid gap-4">
          {learningJourney.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="grid gap-4 rounded-[1.5rem] border border-[#08111f]/8 bg-white/80 p-5 md:grid-cols-[0.25fr_0.75fr] md:p-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3rem] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2rem] text-[#2947a9]">
                  {item.type}
                </p>
              </div>
              <div>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-[#08111f]">{item.title}</h3>
                  <p className="text-sm uppercase tracking-[0.18rem] text-slate-500">
                    {item.period}
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-500">{item.org}</p>
                {item.details?.length ? (
                  <div className="mt-4 space-y-3">
                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="rounded-[1rem] bg-[#f6f8fc] px-4 py-3 text-sm leading-7 text-slate-600"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSummary;
