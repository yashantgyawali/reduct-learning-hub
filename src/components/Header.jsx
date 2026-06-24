export default function Header({ q, onSearch, onHome }) {
  return (
    <header id="hdr">
      <div className="logo" onClick={onHome}>
        <span className="logo-brand">Reduct</span>
        <span className="logo-sep" />
        <span className="logo-sub">Scenario Guide</span>
      </div>
      <div className="hsearch">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          id="sinput"
          type="text"
          placeholder="Find a scenario…"
          value={q}
          onChange={e => onSearch(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </header>
  )
}
