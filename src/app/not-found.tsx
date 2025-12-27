import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-soft-gray">
      <section className="max-w-2xl text-center">
        <h1 className="font-fredoka text-4xl md:text-5xl font-semibold text-dark-charcoal mb-4">
          404 — Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-dark-charcoal/80 mb-8">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-carrot-orange text-light-gray px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-dark-charcoal/20 text-dark-charcoal px-6 py-3 font-medium hover:bg-dark-charcoal/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
