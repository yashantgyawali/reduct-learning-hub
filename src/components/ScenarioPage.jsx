import { useEffect } from 'react'
import { STAGES, FEATURE_LINKS, _D } from '../data'
import HelpsContent from './HelpsContent'

const ArrIcon = () => (
  <svg className="tag-arr" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)

const BackIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
)

function TagLink({ feature }) {
  const url = FEATURE_LINKS[feature] || _D
  return (
    <a href={url} target="_blank" rel="noopener" className="tag">
      {feature}<ArrIcon />
    </a>
  )
}

function Toc({ items }) {
  function scrollToSection(id, e) {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 76
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="sc-toc">
      <div className="toc-h">In this scenario</div>
      {items.map(([href, label]) => (
        <a key={href} className="toc-a" href={href} onClick={e => scrollToSection(href, e)}>
          {label}
        </a>
      ))}
    </div>
  )
}

function Paras({ text }) {
  return text.split('\n\n').map((p, i) => <p key={i}>{p}</p>)
}

export default function ScenarioPage({ sid, scid, nav }) {
  const st = STAGES.find(s => s.id === sid)
  const sc = st && st.scenarios.find(x => x.id === scid)

  useEffect(() => {
    function updateToc() {
      const links = document.querySelectorAll('.toc-a')
      const ids = Array.from(links).map(a => a.getAttribute('href'))
      let cur = ids[0]
      ids.forEach(id => {
        const el = document.querySelector(id)
        if (el && el.getBoundingClientRect().top <= 90) cur = id
      })
      links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === cur))
    }
    window.addEventListener('scroll', updateToc, { passive: true })
    updateToc()
    return () => window.removeEventListener('scroll', updateToc)
  }, [sid, scid])

  if (!st || !sc) return <div className="empty">Scenario not found.</div>

  const tocItems = [['#sit', 'The Situation']]
  if (sc.feeling?.length) tocItems.push(['#feeling', 'What attorneys are feeling'])
  if (sc.todayMethod?.length) tocItems.push(['#today', "How it's done today"])
  if (sc.whatGood?.length) tocItems.push(['#good', 'What good looks like'])
  if (sc.problem) tocItems.push(['#prob', 'The Problem'])
  if (sc.outcome) tocItems.push(['#out', 'Outcome'])
  tocItems.push(['#helps', 'How Reduct Helps'])
  tocItems.push(['#feat', 'Features Used'])
  if (sc.faqs?.length) tocItems.push(['#faq', 'FAQs'])

  return (
    <div className="sc-layout">
      <article className="sc-art">
        <div className="sc-meta">
          <div className="stage-tag" onClick={() => nav('stage', st.id)}>
            <BackIcon /> Stage {st.id}: {st.title}
          </div>
          <h1>{sc.title}</h1>
        </div>

        <div className="sc-sec" id="sit">
          <div className="sec-h">The Situation</div>
          <div className="sec-body"><Paras text={sc.situation} /></div>
        </div>

        {sc.feeling?.length > 0 && (
          <div className="sc-sec" id="feeling">
            <div className="sec-h">What attorneys are feeling</div>
            <div className="feeling-tags">
              {sc.feeling.map(f => <span key={f} className="feeling-tag">{f}</span>)}
            </div>
          </div>
        )}

        {sc.todayMethod?.length > 0 && (
          <div className="sc-sec" id="today">
            <div className="sec-h">How it's done today</div>
            <ul className="sc-bullets">
              {sc.todayMethod.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}

        {sc.whatGood?.length > 0 && (
          <div className="sc-sec" id="good">
            <div className="sec-h">What good looks like</div>
            <ul className="sc-bullets">
              {sc.whatGood.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}

        {sc.problem && (
          <div className="sc-sec" id="prob">
            <div className="sec-h">The Problem</div>
            <div className="sec-body"><Paras text={sc.problem} /></div>
          </div>
        )}

        {sc.outcome && (
          <div className="sc-sec" id="out">
            <div className="sec-body"><Paras text={sc.outcome} /></div>
          </div>
        )}

        <div className="sc-sec" id="helps">
          <div className="sec-h-lg">How Reduct Helps</div>
          <div className="sec-body">
            <HelpsContent helps={sc.helps} />
          </div>
        </div>

        <div className="sc-sec" id="feat">
          <div className="sec-h">Features Used</div>
          <div className="tags">
            {sc.features.map(f => <TagLink key={f} feature={f} />)}
          </div>
        </div>

        {sc.faqs?.length > 0 && (
          <div className="sc-sec" id="faq">
            <div className="sec-h">FAQs</div>
            <div className="faq-list">
              {sc.faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
      <Toc items={tocItems} />
    </div>
  )
}
