import classNames from "classnames";


export default async function OpenSourcePromotionSection() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-600">
        Proudly Open-Source
      </h1>

      <div className={classNames({
        "mx-auto space-y-1": true,
      })}>
        <p className={classNames({
          "text-base xs:text-lg font-medium text-gray-700": true,
          "w-[90vw] sm:w-[30rem]": true,
          "mx-auto": true,
        })}>
          Bio Sync is an open source project hosted on GitHub. Feel free to explore and contribute to this project!
        </p>

        <p className="font-bold">#build_in_public</p>
      </div>
    </section>
  )
}
