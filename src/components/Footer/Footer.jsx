import React from 'react'


export default function Footer() {
return (
<footer className="footer-horizontal footer-center bg-slate-900 text-slate-300 p-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
<div>
<div className="text-white font-semibold mb-2">Integrated Systems AI</div>
<div className="text-sm">Integrating industries with the power of AI</div>
</div>


<div className="text-sm">
<div>Contact</div>
<a className="text-sky-300" href="mailto:buildwith@intergratedsystems.ai">buildwith@intergratedsystems.ai</a>
</div>


<div className="text-sm text-slate-500">© {new Date().getFullYear()} Integrated Systems AI. All rights reserved.</div>
</div>
</footer>
)
}