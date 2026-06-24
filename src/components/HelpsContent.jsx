import { useState } from 'react'

const iconStyle = { pointerEvents: 'none', position: 'absolute', inset: 0, transition: 'opacity .15s' }

function QuestionList({ items }) {
  const [copied, setCopied] = useState(false)

  function copyList() {
    navigator.clipboard.writeText(items.join('\n')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="q-list-wrap">
      <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={copyList} title="Copy questions">
        <span style={{ position: 'relative', width: 14, height: 14, display: 'flex' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconStyle, opacity: copied ? 0 : 1 }}>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...iconStyle, opacity: copied ? 1 : 0 }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </button>
      <ul className="sc-bullets sc-q-list">
        {items.map((li, i) => <li key={i}>{li}</li>)}
      </ul>
    </div>
  )
}

export default function HelpsContent({ helps }) {
  if (typeof helps === 'string') {
    return helps.split('\n\n').map((p, i) => <p key={i}>{p}</p>)
  }

  let stepN = 0
  return helps.map((item, i) => {
    if (Array.isArray(item)) {
      return <QuestionList key={i} items={item} />
    }
    if (item && typeof item === 'object' && item.head) {
      stepN++
      const n = stepN
      return (
        <div key={i} className="helps-head">
          <div className="helps-step-num">{n}</div>
          <div className="helps-step-title">{item.head}</div>
        </div>
      )
    }
    return <p key={i}>{item}</p>
  })
}
