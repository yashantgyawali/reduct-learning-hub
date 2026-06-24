import { STAGES } from '../data'

function ChevIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default function Home({ nav }) {
  return (
    <>
      <div className="home-hero">
        <h1>Where are you in the case?</h1>
        <p>Pick a stage to see how Reduct fits into your workflow. We've organized it by different real-case scenarios that fall across all these stages.</p>
      </div>
      <div className="home-body">
        <div className="sec-label">Case Stages</div>
        <div className="stage-grid">
          {STAGES.map(st => (
            <div key={st.id} className="s-card" onClick={() => nav('stage', st.id)}>
              <div className="s-card-head">
                <div className="s-badge">{st.id}</div>
                <h3>{st.title}</h3>
              </div>
              <p>{st.desc}</p>
              <div className="s-card-foot">
                <span className="sc-count">{st.scenarios.length} scenario{st.scenarios.length !== 1 ? 's' : ''}</span>
                <span className="c-arrow"><ChevIcon /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
