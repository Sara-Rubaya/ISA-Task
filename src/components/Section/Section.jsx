import React from 'react'


export default function Section({ title, content = [] }) {
return (
<section id={title?.toLowerCase().replace(/\s+/g, '-') } className=" rounded-lg p-6 shadow-sm">
<h2 className="text-2xl font-semibold mb-4">{title}</h2>
<div className="space-y-3 text-slate-700">
{content.map((c, i) => (
<p key={i}>{c}</p>
))}
</div>
</section>
)
}