import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
      <div className="container-editorial text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.24em] text-neutral-400 font-sans font-semibold">
          Error 404
        </p>
        <h1 className="text-page-heading font-serif text-neutral-950 font-normal">
          Page Not Found
        </h1>
        <p className="text-body-editorial text-neutral-600 font-sans max-w-md mx-auto">
          The requested luxury editorial page does not exist or has been relocated.
        </p>
        <div className="pt-4">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

