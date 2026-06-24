import { STAGES } from '../data'

export default function Sidebar({ state, nav }) {
  return (
    <nav id="sbar">
      {STAGES.map(st => {
        const active = state.view !== 'scenario' && state.sid === st.id
        const expand = state.view === 'scenario' && state.sid === st.id
        return (
          <div key={st.id}>
            <div
              className={`sb-item${active ? ' on' : ''}`}
              onClick={() => nav('stage', st.id)}
            >
              <span className="sb-num">{st.id}</span>
              <span>{st.title}</span>
            </div>
            {expand && (
              <div className="sb-subs">
                {st.scenarios.map(sc => (
                  <div
                    key={sc.id}
                    className={`sb-sub${state.scid === sc.id ? ' on' : ''}`}
                    onClick={() => nav('scenario', st.id, sc.id)}
                  >
                    {sc.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
