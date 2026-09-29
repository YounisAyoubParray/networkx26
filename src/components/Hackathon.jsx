import { useEffect, useRef, useState } from 'react'
import { hackathonData } from '../data/hackathonData.js'
import './Hackathon.css'

const iconPaths = {
  network: <><circle cx="5" cy="7" r="2" /><circle cx="19" cy="7" r="2" /><circle cx="12" cy="18" r="2" /><path d="m7 8 3.5 7m6.5-7-3.5 7M7 7h10" /></>,
  shield: <><path d="M12 3 20 6v5.5c0 4.8-3.4 8-8 9.5-4.6-1.5-8-4.7-8-9.5V6l8-3Z" /><path d="m8.5 12 2.3 2.3 4.8-5" /></>,
  cloud: <><path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 8.8 4.6 4.6 0 0 0 7 18Z" /><path d="M12 12v7m-3-3 3 3 3-3" /></>,
  automation: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><path d="M10 7h3a2 2 0 0 1 2 2v5m-5 3H7a2 2 0 0 1-2-2v-5" /></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4m-5-9 3-3 3 3 4-5" /></>,
  trophy: <><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4" /></>,
  arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  terminal: <><path d="m4 7 5 5-5 5m8 0h8" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7a4 4 0 0 1 0 7m2 4a4 4 0 0 1 3 4v2" /></>,
  laptop: <><rect x="4" y="4" width="16" height="12" rx="1.5" /><path d="M2 20h20l-2-4H4l-2 4Z" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
}

function Icon({ name, className = '' }) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>
}

function Intro() {
  return (
    <section className="hackathon-intro" aria-labelledby="hackathon-title">
      <div className="hackathon-hero-glow" aria-hidden="true" />
      <div className="hackathon-hero-grid" aria-hidden="true" />
      <div className="hackathon-network-art" aria-hidden="true">
        <div className="hackathon-network-edges">
          <i className="edge-1" /><i className="edge-2" /><i className="edge-3" /><i className="edge-4" />
          <i className="edge-5" /><i className="edge-6" /><i className="edge-7" /><i className="edge-8" />
          <i className="edge-9" /><i className="edge-10" /><i className="edge-11" /><i className="edge-12" />
        </div>
        <div className="hackathon-network-nodes">
          <i className="node-1" /><i className="node-2" /><i className="node-3" /><i className="node-4" />
          <i className="node-5" /><i className="node-6" /><i className="node-7" /><i className="node-8" />
          <i className="node-9" /><i className="node-10" /><i className="node-11" /><i className="node-12" />
          <b>NX</b>
        </div>
      </div>
      <div className="hackathon-container hackathon-intro-layout">
        <div className="hackathon-intro-copy hackathon-reveal">
          <p className="hackathon-day">{hackathonData.day}</p>
          <h1 id="hackathon-title">{hackathonData.eventName}</h1>
          <p className="hackathon-theme">{hackathonData.theme}</p>
          <p className="hackathon-description">{hackathonData.description}</p>
          <p className="hackathon-static-command">{hackathonData.terminalDescription}</p>
          <div className="hackathon-intro-actions">
            <a className="hackathon-button" href="#register">{hackathonData.registerButtonLabel}<Icon name="arrow" /></a>
            <a className="hackathon-button-ghost" href="#prizes">{hackathonData.prizesLinkLabel}<Icon name="arrow" /></a>
          </div>
        </div>
        <ul className="hackathon-facts hackathon-reveal" aria-label={hackathonData.factsLabel}>
          {hackathonData.facts.map((fact) => <li key={fact.label}><i aria-hidden="true" /><span>{fact.label}</span><strong>{fact.value}</strong></li>)}
        </ul>
      </div>
    </section>
  )
}

function Domains() {
  return (
    <section className="hackathon-domains" aria-labelledby="domains-title">
      <div className="hackathon-container">
        <h2 className="hackathon-reveal" id="domains-title">{hackathonData.domainsHeading}</h2>
        <ul className="hackathon-domain-grid">
          {hackathonData.domains.map((domain) => (
            <li className="hackathon-domain-card hackathon-reveal" key={domain.title}>
              <Icon name={domain.icon} className="hackathon-domain-icon" />
              <h3>{domain.title}</h3><p>{domain.description}</p>
              <span className="hackathon-domain-detail">{hackathonData.domainPrompt}</span>
            </li>
          ))}
        </ul>
        <p className="hackathon-domains-note hackathon-reveal">{hackathonData.domainsNote}</p>
      </div>
    </section>
  )
}

function Rules() {
  const configRules = hackathonData.rules.filter((rule) => rule.config)
  const policyRules = hackathonData.rules.filter((rule) => !rule.config)

  return (
    <section className="hackathon-rules" aria-labelledby="rules-title">
      <div className="hackathon-container hackathon-rules-layout">
        <div className="hackathon-rules-intro hackathon-reveal">
          <h2 id="rules-title">{hackathonData.rulesHeading}</h2>
          <div className="hackathon-duration-mark" aria-label={`Duration: ${hackathonData.duration}`}><strong>{hackathonData.durationNumber}</strong><span>hours</span></div>
          <p className="hackathon-organizer">{hackathonData.organizerPrefix} {hackathonData.organizer}.</p>
        </div>
        <div className="hackathon-rules-content">
          <div className="hackathon-config-panel hackathon-reveal">
            <div className="hackathon-config-head"><span /><span /><span /><b>{hackathonData.configTitle}</b></div>
            <dl className="hackathon-rule-list">
              {configRules.map((rule) => <div className="hackathon-rule" key={rule.label}><dt>{rule.configKey}</dt><dd>{rule.value}</dd></div>)}
            </dl>
          </div>
          <div className="hackathon-policy-grid">
            {policyRules.map((rule) => <article className="hackathon-policy-card hackathon-reveal" key={rule.label}><Icon name={rule.icon} /><div><h3>{rule.label}</h3><p>{rule.value}</p></div></article>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function PrizeCounter() {
  const sectionRef = useRef(null)
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const target = hackathonData.prizePoolAmount
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setCount(target)
      setIsVisible(true)
      return undefined
    }

    let observer
    let countTimer
    let initialCheckFrame
    let started = false
    const startCount = () => {
      if (started) return
      started = true
      setIsVisible(true)
      observer?.disconnect()
      const startTime = performance.now()
      countTimer = window.setInterval(() => {
        const progress = Math.min((performance.now() - startTime) / 1800, 1)
        setCount(Math.round(target * (1 - (1 - progress) ** 3)))
        if (progress >= 1) {
          window.clearInterval(countTimer)
          setCount(target)
        }
      }, 16)
    }
    const checkViewport = () => {
      const bounds = section.getBoundingClientRect()
      if (bounds.top < window.innerHeight && bounds.bottom > 0) startCount()
    }

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startCount()
    }, { threshold: 0.1 })

    observer.observe(section)
    initialCheckFrame = requestAnimationFrame(checkViewport)
    window.addEventListener('scroll', checkViewport, { passive: true })
    window.addEventListener('resize', checkViewport)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkViewport)
      window.removeEventListener('resize', checkViewport)
      if (initialCheckFrame) cancelAnimationFrame(initialCheckFrame)
      if (countTimer) window.clearInterval(countTimer)
    }
  }, [])

  return (
    <section ref={sectionRef} className={`hackathon-prizes${isVisible ? ' is-visible' : ''}`} id="prizes" aria-labelledby="prizes-title">
      <div className="hackathon-prize-atmosphere" aria-hidden="true">
        {[8, 19, 30, 42, 54, 66, 78, 90].map((position, index) => <i key={position} style={{ '--particle-x': `${position}%`, '--particle-delay': `${index * -0.72}s` }} />)}
      </div>
      <div className="hackathon-container">
        <h2 id="prizes-title">{hackathonData.prizeHeading}<span aria-hidden="true">₹{count.toLocaleString('en-IN')}</span><span className="hackathon-sr-only">{hackathonData.prizePool}</span></h2>
        <div className="hackathon-podium" aria-label={hackathonData.prizePodiumLabel}>
          <article className="hackathon-prize-card hackathon-prize-second"><h3>{hackathonData.secondPrize.label}</h3><p>{hackathonData.secondPrize.amount}</p></article>
          <article className="hackathon-prize-card hackathon-prize-first"><Icon name="trophy" className="hackathon-trophy-icon" /><h3>{hackathonData.firstPrize.label}</h3><p>{hackathonData.firstPrize.amount}</p></article>
          <article className="hackathon-prize-card hackathon-prize-third"><h3>{hackathonData.thirdPrize.label}</h3><p>{hackathonData.thirdPrize.amount}</p></article>
        </div>
      </div>
    </section>
  )
}

function Field({ name, label, type = 'text', required = true, error, autoComplete = 'off', accept, onChange }) {
  const id = `hackathon-${name}`
  return (
    <div className="hackathon-field">
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} accept={accept} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} onChange={onChange} />
      {error && <span className="hackathon-field-error" id={`${id}-error`} role="alert">{error}</span>}
    </div>
  )
}

function MemberCard({ number, leader = false, optional = false, errors, clearError }) {
  const labels = hackathonData.formLabels
  return (
    <fieldset className={`hackathon-member-card${optional ? ' is-optional' : ''}`}>
      <legend><span>{labels.member} {number}{leader ? ` / ${labels.teamLeader}` : ''}</span>{optional && <span className="hackathon-optional-badge">{labels.optional}</span>}</legend>
      <div className="hackathon-member-fields">
        <Field name={`member${number}Name`} label={labels.name} required={!optional} error={errors[`member${number}Name`]} onChange={() => clearError(`member${number}Name`)} autoComplete={leader ? 'name' : 'off'} />
        {leader && <Field name="leaderEmail" label={labels.leaderEmail} type="email" error={errors.leaderEmail} onChange={() => clearError('leaderEmail')} autoComplete="email" />}
        <Field name={`member${number}IdCard`} label={labels.idCard} type="file" required={!optional} accept="image/*,.pdf" error={errors[`member${number}IdCard`]} onChange={() => clearError(`member${number}IdCard`)} />
        {leader && <Field name="leaderPhone" label={labels.phone} type="tel" error={errors.leaderPhone} onChange={() => clearError('leaderPhone')} autoComplete="tel" />}
      </div>
    </fieldset>
  )
}

function Registration() {
  const labels = hackathonData.formLabels
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function clearError(name) {
    setErrors((current) => ({ ...current, [name]: undefined }))
    setSubmitted(false)
  }

  function validate(formData) {
    const nextErrors = {}
    const required = ['teamName', 'college', 'member1Name', 'leaderEmail', 'leaderPhone', 'member2Name', 'member3Name']
    required.forEach((name) => { if (!String(formData.get(name) ?? '').trim()) nextErrors[name] = hackathonData.requiredError })
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = String(formData.get('leaderEmail') ?? '').trim()
    if (email && !emailPattern.test(email)) nextErrors.leaderEmail = hackathonData.emailError
    for (const member of [1, 2, 3]) {
      const idCard = formData.get(`member${member}IdCard`)
      if (!(idCard instanceof File) || !idCard.size) nextErrors[`member${member}IdCard`] = hackathonData.idCardError
    }
    const optionalName = String(formData.get('member4Name') ?? '').trim()
    const optionalIdCard = formData.get('member4IdCard')
    if (optionalName && (!(optionalIdCard instanceof File) || !optionalIdCard.size)) nextErrors.member4IdCard = hackathonData.idCardError
    if (!optionalName && optionalIdCard instanceof File && optionalIdCard.size) nextErrors.member4Name = hackathonData.requiredError
    const phone = String(formData.get('leaderPhone') ?? '').replace(/\D/g, '')
    if (phone.length !== 10) nextErrors.leaderPhone = hackathonData.phoneError
    if (!formData.has('consent')) nextErrors.consent = hackathonData.consentError
    if (!formData.has('leaderResponsibility')) nextErrors.leaderResponsibility = hackathonData.leaderResponsibilityError
    return nextErrors
  }

  // TODO: connect to Google Form / backend API
  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return
    const form = event.currentTarget
    const formData = new FormData(form)
    const nextErrors = validate(formData)
    setErrors(nextErrors)
    setSubmitted(false)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      form.querySelector(`[name="${firstError}"]`)?.focus()
      return
    }

    setIsSubmitting(true)
    const submission = Object.fromEntries(formData.entries())
    submission.teamLeaderEmail = submission.leaderEmail
    submission.members = [1, 2, 3, 4].map((number) => ({
      name: submission[`member${number}Name`],
      idCard: submission[`member${number}IdCard`],
      ...(number === 1 ? { phone: String(submission.leaderPhone).replace(/\D/g, '') } : {}),
    })).filter((member) => member.name || member.idCard?.size)
    console.log('NETWORKX Hackathon registration:', submission)
    await new Promise((resolve) => window.setTimeout(resolve, 650))
    setIsSubmitting(false)
    setSubmitted(true)
    form.reset()
  }

  return (
    <section className="hackathon-registration" id="register" aria-labelledby="registration-title">
      <div className="hackathon-container hackathon-registration-layout">
        <div className="hackathon-registration-intro hackathon-reveal">
          <p className="hackathon-eyebrow">{hackathonData.registrationIntroEyebrow}</p>
          <h2 id="registration-title">{hackathonData.registrationIntroHeading[0]}<br />{hackathonData.registrationIntroHeading[1]}</h2>
          <p>{hackathonData.registrationIntroCopy}</p>
          <p className="hackathon-organizer">{hackathonData.organizerPrefix} {hackathonData.organizer}.</p>
        </div>
        <form className="hackathon-form hackathon-reveal" noValidate onSubmit={handleSubmit}>
          <div className="hackathon-form-heading"><h3>{labels.formTitle}</h3><p><span aria-hidden="true">*</span> {labels.required}</p></div>
          <div className="hackathon-form-section">
            <h4>{labels.teamDetails}</h4>
            <div className="hackathon-form-grid">
              <Field name="teamName" label={labels.teamName} error={errors.teamName} onChange={() => clearError('teamName')} />
              <Field name="college" label={labels.college} error={errors.college} onChange={() => clearError('college')} autoComplete="organization" />
            </div>
          </div>
          <div className="hackathon-form-section">
            <h4>{labels.teamMembers} <small>{hackathonData.teamSize}</small></h4>
            <div className="hackathon-members-grid">
              {[1, 2, 3, 4].map((number) => <MemberCard key={number} number={number} leader={number === 1} optional={number === 4} errors={errors} clearError={clearError} />)}
            </div>
          </div>
          <div className="hackathon-form-section">
            <h4>{labels.eventConfirmation}</h4>
            <div className="hackathon-consent">
              <label htmlFor="hackathon-consent"><input id="hackathon-consent" name="consent" type="checkbox" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'hackathon-consent-error' : undefined} onChange={() => clearError('consent')} /><span>{labels.consent}<b aria-hidden="true"> *</b></span></label>
              {errors.consent && <span className="hackathon-field-error" id="hackathon-consent-error" role="alert">{errors.consent}</span>}
              <label htmlFor="hackathon-leader-responsibility"><input id="hackathon-leader-responsibility" name="leaderResponsibility" type="checkbox" aria-invalid={Boolean(errors.leaderResponsibility)} aria-describedby={errors.leaderResponsibility ? 'hackathon-leader-responsibility-error' : undefined} onChange={() => clearError('leaderResponsibility')} /><span>{labels.leaderResponsibility}<b aria-hidden="true"> *</b></span></label>
              {errors.leaderResponsibility && <span className="hackathon-field-error" id="hackathon-leader-responsibility-error" role="alert">{errors.leaderResponsibility}</span>}
            </div>
          </div>
          {submitted && <div className="hackathon-success" role="status"><span><Icon name="check" /></span><div><b>{labels.success}</b><p>{labels.successDetail}</p></div></div>}
          <button className="hackathon-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? <><i className="hackathon-submit-spinner" />{labels.submitting}</> : <>{labels.submit}<Icon name="arrow" /></>}</button>
          <p className="hackathon-form-note">{hackathonData.registrationNote}</p>
        </form>
      </div>
    </section>
  )
}

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.hackathon .hackathon-reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }), { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

export default function Hackathon() {
  useScrollReveal()
  return <main className="hackathon" id="hackathon"><Intro /><Domains /><Rules /><PrizeCounter /><Registration /></main>
}