import React from 'react'

export default function Contact() {
  const [state, setState] = React.useState({ name: '', email: '', message: '' })
  const [sent, setSent] = React.useState(false)

  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <div className="container-xl space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">Contact</h2>
        {!sent ? (
          <form onSubmit={submit} className="glass rounded-3xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted mb-1">Name</label>
                <input required value={state.name} onChange={e => setState({ ...state, name: e.target.value })}
                  className="w-full rounded-xl bg-foreground/5 border border-border px-3 py-2" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-sm text-muted mb-1">Email</label>
                <input required type="email" value={state.email} onChange={e => setState({ ...state, email: e.target.value })}
                  className="w-full rounded-xl bg-foreground/5 border border-border px-3 py-2" placeholder="ada@lovelace.dev" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted mb-1">Message</label>
              <textarea required rows="6" value={state.message} onChange={e => setState({ ...state, message: e.target.value })}
                className="w-full rounded-xl bg-foreground/5 border border-border px-3 py-2" placeholder="Let's build something cosmic..." />
            </div>
            <button className="btn-primary rounded-2xl">Send</button>
          </form>
        ) : (
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Message sent!</h3>
            <p className="text-foreground/80 mt-1">This is a demo form. Hook it up to your backend later.</p>
          </div>
        )}
      </section>
    </div>
  )
}
