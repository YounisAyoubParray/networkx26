import { useEffect, useRef, useState } from "react";
import "./SpeakersTeam.css";

const SPEAKERS = [];

const PATRONS = [
  { name: "Prof. Name Surname", role: "Patron", photo: "", linkedin: "" },
  { name: "Prof. Name Surname", role: "Patron", photo: "", linkedin: "" },
];

const FACULTY_COORDINATORS = [
  { name: "Dr. Name Surname", role: "Faculty Coordinator", photo: "", linkedin: "" },
  { name: "Dr. Name Surname", role: "Faculty Coordinator", photo: "", linkedin: "" },
];

const TEAM = [
  { name: "Name Surname", role: "Lead Organizer", photo: "", linkedin: "" },
  { name: "Name Surname", role: "Technical Lead", photo: "", linkedin: "" },
  { name: "Name Surname", role: "Design Lead", photo: "", linkedin: "" },
  { name: "Name Surname", role: "Outreach Lead", photo: "", linkedin: "" },
  { name: "Name Surname", role: "Operations Lead", photo: "", linkedin: "" },
  { name: "Name Surname", role: "Content Lead", photo: "", linkedin: "" },
];

const PLACEHOLDER_COUNT = 3;

/* ---------------------------- Helpers ---------------------------- */

const initials = (name) =>
  name
    .replace(/^(Prof|Dr)\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

function Avatar({ name, src, className }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  return (
    <span className={`sx-avatar ${className}`}>
      {showImage ? (
        <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span className="sx-avatar__initials" aria-hidden="true">
          {initials(name)}
        </span>
      )}
    </span>
  );
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

///this is the section where the speakers will be added --- made by aliza 

function SpeakerCard({ speaker, onOpen }) {
  return (
    <button type="button" className="sx-speaker" onClick={(e) => onOpen(speaker, e.currentTarget)}>
      <Avatar name={speaker.name} src={speaker.photo} className="sx-speaker__photo" />
      <span className="sx-speaker__body">
        <span className="sx-speaker__name">{speaker.name}</span>
        <span className="sx-speaker__role">
          {speaker.designation}, {speaker.organization}
        </span>
        <span className="sx-speaker__talk">{speaker.talkTitle}</span>
        <span className="sx-speaker__more">Read bio</span>
      </span>
    </button>
  );
}

function PlaceholderCard() {
  return (
    <div className="sx-speaker sx-speaker--soon" aria-hidden="true">
      <span className="sx-avatar sx-speaker__photo">
        <svg viewBox="0 0 64 80" className="sx-silhouette">
          <circle cx="32" cy="28" r="13" />
          <path d="M6 80c0-18 11-28 26-28s26 10 26 28z" />
        </svg>
      </span>
      <span className="sx-speaker__body">
        <span className="sx-speaker__name">Speaker to be announced</span>
        <span className="sx-speaker__talk">Talk title coming soon</span>
      </span>
    </div>
  );
}

function BioModal({ speaker, onClose, returnFocusTo }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const focusable = dialogRef.current.querySelectorAll("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusTo?.focus();
    };
  }, [onClose, returnFocusTo]);

  return (
    <div className="sx-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={dialogRef}
        className="sx-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sx-modal-title"
      >
        <button ref={closeRef} type="button" className="sx-modal__close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <Avatar name={speaker.name} src={speaker.photo} className="sx-modal__photo" />
        <div className="sx-modal__content">
          <h3 id="sx-modal-title">{speaker.name}</h3>
          <p className="sx-modal__role">
            {speaker.designation}, {speaker.organization}
          </p>
          <p className="sx-modal__talk">{speaker.talkTitle}</p>
          <p className="sx-modal__bio">{speaker.bio}</p>
          {speaker.linkedin && (
            <a className="sx-btn" href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> View LinkedIn profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Team ------------------------------ */

function MemberCard({ member, featured = false }) {
  return (
    <li className={`sx-member${featured ? " sx-member--featured" : ""}`}>
      <Avatar name={member.name} src={member.photo} className="sx-member__photo" />
      <div className="sx-member__info">
        <h4 className="sx-member__name">{member.name}</h4>
        <p className="sx-member__role">{member.role}</p>
      </div>
      {member.linkedin && (
        <a
          className="sx-member__link"
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
        >
          <LinkedInIcon />
        </a>
      )}
    </li>
  );
}

function TeamGroup({ title, members, featured }) {
  return (
    <div className="sx-group">
      <h3 className="sx-group__title">{title}</h3>
      <ul className={`sx-grid${featured ? " sx-grid--featured" : ""}`}>
        {members.map((m, i) => (
          <MemberCard key={`${m.name}-${i}`} member={m} featured={featured} />
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------- Section ----------------------------- */

export default function SpeakersTeam() {
  const [active, setActive] = useState(null);
  const hasSpeakers = SPEAKERS.length > 0;

  const openBio = (speaker, trigger) => setActive({ speaker, trigger });
  const closeBio = () => setActive(null);

  return (
    <div className="sx">
      <section id="speakers" className="sx-section" aria-labelledby="sx-speakers-title">
        <svg className="sx-graph" viewBox="0 0 320 200" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="1" opacity="0.35">
            <line x1="40" y1="150" x2="120" y2="70" />
            <line x1="120" y1="70" x2="210" y2="110" />
            <line x1="210" y1="110" x2="280" y2="30" />
            <line x1="120" y1="70" x2="170" y2="20" />
            <line x1="210" y1="110" x2="250" y2="170" />
          </g>
          <g fill="currentColor">
            <circle cx="40" cy="150" r="5" />
            <circle cx="120" cy="70" r="7" />
            <circle cx="210" cy="110" r="5" />
            <circle cx="280" cy="30" r="4" />
            <circle cx="170" cy="20" r="3" />
            <circle cx="250" cy="170" r="4" />
          </g>
        </svg>

        <header className="sx-head">
          <h2 id="sx-speakers-title">Speakers</h2>
          <p>
            {hasSpeakers
              ? "Practitioners and researchers sharing what they know."
              : "We are finalising the lineup. Speaker announcements are coming soon."}
          </p>
          {!hasSpeakers && <span className="sx-chip">Coming soon</span>}
        </header>

        <div className="sx-speakers">
          {hasSpeakers
            ? SPEAKERS.map((s) => <SpeakerCard key={s.name} speaker={s} onOpen={openBio} />)
            : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => <PlaceholderCard key={i} />)}
        </div>
      </section>

      <section id="team" className="sx-section" aria-labelledby="sx-team-title">
        <header className="sx-head">
          <h2 id="sx-team-title">The people behind NetworkX</h2>
          <p>A collaboration between students and faculty.</p>
        </header>

        <TeamGroup title="Patrons" members={PATRONS} featured />
        <TeamGroup title="Faculty coordinators" members={FACULTY_COORDINATORS} featured />
        <TeamGroup title="Organizing team" members={TEAM} />
      </section>

      {active && <BioModal speaker={active.speaker} onClose={closeBio} returnFocusTo={active.trigger} />}
    </div>
  );
}
