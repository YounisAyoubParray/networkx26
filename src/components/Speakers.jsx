import { useState } from "react";
import { EVENT } from "../data/eventInfo";

const TALKS_DAY = EVENT.days.find((d) => d.title.includes("Talks")) ?? EVENT.days[1];

const speakers = [
  {
    name: "Speaker Name",
    designation: "Designation / Organization",
    talk: "Talk Title Goes Here",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    bio: "Add the speaker's short professional biography here. Mention their expertise, experience, research interests, and relevant work.",
  },
  {
    name: "Speaker Name",
    designation: "Designation / Organization",
    talk: "Talk Title Goes Here",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    bio: "Add the speaker's short professional biography here. Mention their expertise, experience, research interests, and relevant work.",
  },
  {
    name: "Speaker Name",
    designation: "Designation / Organization",
    talk: "Talk Title Goes Here",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    bio: "Add the speaker's short professional biography here. Mention their expertise, experience, research interests, and relevant work.",
  },
];

const organizers = [
  {
    name: "Team Member",
    role: "Event Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Technical Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Design Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Operations Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
    linkedin: "#",
  },
];

const faculty = [
  {
    name: "Faculty Name",
    role: "Faculty Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
  },
  {
    name: "Faculty Name",
    role: "Faculty Coordinator",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
  },
  {
    name: "Faculty Name",
    role: "Patron",
    image: "", // add a photo path, e.g. "/speakers/name.jpg"
  },
];

// Shows the photo when one is set, otherwise a branded placeholder with initials.
function Photo({ src, alt, className = "" }) {
  if (src) return <img src={src} alt={alt} className={className} />;
  const initials = alt
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-linear-to-br from-primary to-dark text-4xl font-extrabold text-white/80 ${className}`}
    >
      {initials}
    </div>
  );
}

function SpeakerCard({ speaker, onReadMore }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-light">
        <Photo
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-sm font-medium text-accent">
            {speaker.designation}
          </p>

          <h3 className="mt-1 text-xl font-bold">
            {speaker.name}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {TALKS_DAY.label} · Talk
        </p>

        <h3 className="mt-2 min-h-[3.5rem] text-lg font-bold text-text">
          {speaker.talk}
        </h3>

        <button
          onClick={() => onReadMore(speaker)}
          className="mt-5 inline-flex items-center font-semibold text-primary transition hover:text-accent"
        >
          Read Bio
          <span className="ml-2 transition group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

function PersonCard({ person, showLinkedIn = false }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-light">
        <Photo
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-lg font-bold text-text">
        {person.name}
      </h3>

      <p className="mt-1 text-sm font-medium text-primary">
        {person.role}
      </p>

      {showLinkedIn && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center rounded-lg bg-light px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <div className="bg-white text-text">

      {/* ==================== SPEAKERS ==================== */}
      <section id="talks" className="bg-light px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="font-semibold uppercase tracking-wider text-primary">
              {TALKS_DAY.label} · {TALKS_DAY.date}
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-text md:text-4xl">
              Talks & Speakers
            </h2>

            <p className="mt-4 text-slate-600">
              Explore the speakers and discover the topics they will
              be discussing on the talks day of NetworkX.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                speaker={speaker}
                onReadMore={setSelectedSpeaker}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ==================== BIO MODAL ==================== */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-7 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-light text-xl font-bold text-text transition hover:bg-primary hover:text-white"
              aria-label="Close biography"
            >
              ×
            </button>

            <div className="pr-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Speaker
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-text">
                {selectedSpeaker.name}
              </h2>

              <p className="mt-1 font-medium text-slate-500">
                {selectedSpeaker.designation}
              </p>
            </div>

            <Photo
              src={selectedSpeaker.image}
              alt={selectedSpeaker.name}
              className="mt-6 h-56 w-full rounded-xl object-cover"
            />

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Talk
              </p>

              <h3 className="mt-2 text-xl font-bold text-text">
                {selectedSpeaker.talk}
              </h3>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Biography
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                {selectedSpeaker.bio}
              </p>
            </div>

            <button
              onClick={() => setSelectedSpeaker(null)}
              className="mt-7 w-full rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-dark"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

// Faculty and organizing team, rendered further down the page (after Sponsors).
export function Team() {
  return (
    <div id="team" className="bg-white text-text">
      {/* ==================== FACULTY ==================== */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">
              Guidance & Support
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-text md:text-4xl">
              Faculty Coordinators & Patrons
            </h2>

            <p className="mt-4 text-slate-600">
              Faculty members supporting and guiding the NetworkX
              event.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((person, index) => (
              <PersonCard
                key={index}
                person={person}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ==================== ORGANIZING TEAM ==================== */}
      <section className="bg-light px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-primary">
              The Team
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-text md:text-4xl">
              Organizing Team
            </h2>

            <p className="mt-4 text-slate-600">
              The student team working behind the scenes to bring
              NetworkX to life.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {organizers.map((person, index) => (
              <PersonCard
                key={index}
                person={person}
                showLinkedIn
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
