import classNames from "classnames";


export default function AboutTexts() {
  return (
    <section>
      <p className={classNames({
        "text-lg sm:text-xl md:text-2xl font-semibold leading-normal text-zinc-600": true,
        "space-y-5 mx-auto p-2 sm:p-5 md:p-10": true,
        "w-[90vw] lg:w-[60vw]": true,
        "border-2 border-zinc-500 rounded-2xl shadow-xl": true,
      })}>
        Modern-day, single-link digital portfolio and resume for letting you discover to the community you prefer. Head to `New BioSync` section to make a new BioSync and share the link with anyone....
      </p>
    </section>
  )
}