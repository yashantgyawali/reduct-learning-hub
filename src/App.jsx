import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import StagePage from './components/StagePage'
import ScenarioPage from './components/ScenarioPage'
import SearchPage from './components/SearchPage'

function parseHash() {
  const hsh = window.location.hash.slice(1) || '/'
  const pts = hsh.split('/').filter(Boolean)
  if (!pts.length || pts[0] === '') return { view: 'home', sid: null, scid: null }
  if (pts[0] === 'stage' && pts[1]) return { view: 'stage', sid: +pts[1], scid: null }
  if (pts[0] === 'scenario' && pts[1] && pts[2]) return { view: 'scenario', sid: +pts[1], scid: +pts[2] }
  return { view: 'home', sid: null, scid: null }
}

export default function App() {
  const [state, setState] = useState(() => ({ ...parseHash(), q: '' }))

  function nav(view, sid = null, scid = null) {
    const hash = view === 'home' ? '/' : `/${view}${sid ? '/' + sid : ''}${scid ? '/' + scid : ''}`
    history.pushState(null, '', '#' + hash)
    setState({ view, sid, scid, q: '' })
    window.scrollTo(0, 0)
  }

  function search(q) {
    setState(prev => ({
      ...prev,
      q,
      view: q.trim() ? 'search' : 'home',
      sid: q.trim() ? prev.sid : null,
      scid: q.trim() ? prev.scid : null,
    }))
  }

  useEffect(() => {
    function onPop() {
      setState({ ...parseHash(), q: '' })
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const hasSb = state.view === 'stage' || state.view === 'scenario'

  return (
    <>
      <Header q={state.q} onSearch={search} onHome={() => nav('home')} />
      <div id="body">
        {hasSb && <Sidebar state={state} nav={nav} />}
        <main id="main" className={hasSb ? 'sb' : ''}>
          {state.view === 'home' && <Home nav={nav} />}
          {state.view === 'stage' && <StagePage sid={state.sid} nav={nav} />}
          {state.view === 'scenario' && <ScenarioPage sid={state.sid} scid={state.scid} nav={nav} />}
          {state.view === 'search' && <SearchPage q={state.q} nav={nav} />}
        </main>
      </div>
    </>
  )
}
