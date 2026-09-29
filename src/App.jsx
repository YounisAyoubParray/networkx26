import { useState } from "react";

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is NetworX?",
      answer:
        "NetworX is a student-focused event that brings together speakers, participants, innovators and developers to learn, collaborate and build together.",
    },
    {
      question: "What is the 1st Edition of NetworX?",
      answer:
        "The 1st Edition marks the beginning of NetworX, bringing together talks, networking and a hands-on hackathon experience.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students and technology enthusiasts interested in learning, networking and building innovative solutions can participate.",
    },
    {
      question: "Where will the event take place?",
      answer:
        "Venue to be decided. The venue details will be announced soon.",
    },
    {
      question: "When will the event schedule be announced?",
      answer:
        "The detailed Day 2 schedule is to be decided and will be announced once finalized.",
    },
    {
      question: "How long is the hackathon?",
      answer:
        "The Day 1 hackathon will run for 8 hours, starting at 11:00 AM.",
    },
  ];

  return (
    <main className="min-h-screen bg-dark text-white">
      {/* HERO / INTRO */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            NetworX • 1st Edition
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            Connect.
            <span className="text-accent"> Learn.</span>
            <br />
            Build the future.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            NetworX is a platform for students, developers and technology
            enthusiasts to connect, exchange ideas and turn innovative
            concepts into reality.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#schedule"
              className="rounded-full bg-primary px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-blue-600"
            >
              Explore Schedule
            </a>

            <a
              href="#venue"
              className="rounded-full border border-accent/60 px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-dark"
            >
              View Venue
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-light px-6 py-20 text-text sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              About NetworX
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              The beginning of something bigger.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              The 1st Edition of NetworX brings together a community of
              curious minds, creators and technology enthusiasts. The event is
              designed around learning, collaboration, networking and
              hands-on problem solving.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From engaging sessions to an intensive hackathon, NetworX
              provides participants with an opportunity to learn new ideas,
              meet like-minded people and build meaningful solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-dark p-6 text-white shadow-xl">
              <p className="text-4xl font-extrabold text-accent">01</p>
              <p className="mt-3 font-semibold">1st Edition</p>
              <p className="mt-2 text-sm text-slate-300">
                The beginning of the NetworX journey.
              </p>
            </div>

            <div className="rounded-3xl bg-primary p-6 text-white shadow-xl">
              <p className="text-4xl font-extrabold">08</p>
              <p className="mt-3 font-semibold">Hours</p>
              <p className="mt-2 text-sm text-blue-100">
                Of hands-on hackathon activity.
              </p>
            </div>

            <div className="col-span-2 rounded-3xl border border-primary/20 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                What to expect
              </p>
              <p className="mt-3 text-lg font-semibold">
                Ideas • Collaboration • Technology • Innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Event Schedule
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Two days. One experience.
            </h2>

            <p className="mt-4 text-slate-300">
              The detailed schedule will be updated as the event plans are
              finalized.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* DAY 1 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-accent/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">
                    Day 1
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    8-Hour Hackathon
                  </h3>
                </div>

                <div className="rounded-2xl bg-primary/20 px-4 py-2 text-sm font-semibold text-accent">
                  11:00 AM
                </div>
              </div>

              <div className="mt-8 border-l-2 border-accent/40 pl-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent" />

                  <p className="text-sm font-semibold text-accent">
                    11:00 AM
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Hackathon Begins
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Participants begin an intensive 8-hour hackathon focused on
                    creativity, collaboration and problem solving.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-accent">
                    7:00 PM
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Hackathon Ends
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Eight hours of building, testing and refining come to an
                    end.
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                Day 2
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Schedule to be decided
              </h3>

              <div className="mt-8 flex min-h-52 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-8 text-center">
                <div>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-2xl">
                    📅
                  </div>

                  <p className="mt-4 font-semibold text-slate-200">
                    Schedule coming soon
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    The Day 2 timeline will be announced once finalized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section id="venue" className="bg-light px-6 py-20 text-text sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Venue
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Where it happens
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
                📍
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Venue to be decided
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The official venue and address will be announced soon.
                Stay tuned for updates.
              </p>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="flex min-h-72 items-center justify-center rounded-3xl bg-slate-200 p-8">
              <div className="text-center">
                <div className="text-5xl">🗺️</div>

                <h3 className="mt-4 text-xl font-bold text-slate-700">
                  Google Map
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Map will be added once the venue is finalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Everything you need to know about the 1st Edition of NetworX.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold transition hover:bg-white/5"
                  >
                    <span>{faq.question}</span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xl transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;