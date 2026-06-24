import { STAGES } from '../data'

export default function SearchPage({ q, nav }) {
  const query = q.toLowerCase().trim()

  const results = []
  STAGES.forEach(st => {
    const m = st.scenarios.filter(sc => {
      const helpsText = Array.isArray(sc.helps)
        ? sc.helps.flat().filter(x => typeof x === 'string').join(' ')
        : sc.helps || ''
      return (
        sc.title.toLowerCase().includes(query) ||
        sc.situation.toLowerCase().includes(query) ||
        helpsText.toLowerCase().includes(query) ||
        (sc.outcome || '').toLowerCase().includes(query) ||
        sc.features.some(f => f.toLowerCase().includes(query))
      )
    })
    if (m.length) results.push({ st, m })
  })

  if (!results.length) {
    return (
      <div className="no-res">
        <h3>No results for "{q}"</h3>
        <p>Try a different term, or browse by case stage below.</p>
      </div>
    )
  }

  const total = results.reduce((s, r) => s + r.m.length, 0)

  return (
    <div className="srch-page">
      <div className="srch-hdr">
        <h2>{total} result{total !== 1 ? 's' : ''} for "{q}"</h2>
        <p>Matching scenarios across all case stages.</p>
      </div>
      {results.map(({ st, m }) => (
        <div key={st.id} className="srch-grp">
          <div className="srch-grp-t">Stage {st.id}: {st.title}</div>
          {m.map(sc => (
            <div key={sc.id} className="sr-item" onClick={() => nav('scenario', st.id, sc.id)}>
              <div className="sr-t">{sc.title}</div>
              <div className="sr-p">{sc.situation}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
