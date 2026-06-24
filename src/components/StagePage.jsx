import { STAGES } from '../data'

export default function StagePage({ sid, nav }) {
  const st = STAGES.find(s => s.id === sid)
  if (!st) return <div className="empty">Stage not found.</div>

  return (
    <>
      <div className="phdr">
        <div className="bc">
          <span className="lnk" onClick={() => nav('home')}>All stages</span>
          <span className="sep">›</span>
          <span>Stage {st.id}</span>
        </div>
        <h1>{st.title}</h1>
        <p className="sub">{st.scenarios.length} scenario{st.scenarios.length !== 1 ? 's' : ''}</p>
      </div>
      <div className="sc-list">
        {st.scenarios.map(sc => (
          <div key={sc.id} className="sc-card" onClick={() => nav('scenario', st.id, sc.id)}>
            <h3>{sc.title}</h3>
            <div className="sc-prev">{sc.situation}</div>
            <div className="tags">
              {sc.features.map(f => (
                <span key={f} className="tag">{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
