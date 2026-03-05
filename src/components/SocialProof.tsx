const STATS = [
  { number: "+25", label: "años de experiencia" },
  { number: "+200", label: "empresas asesoradas" },
  { number: "+15", label: "sectores diferentes" },
  { number: "100%", label: "enfoque práctico" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-primary-800 bg-primary-950 px-6 py-14">
      <div className="container-narrow">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-extrabold text-accent-400 md:text-4xl">
                {stat.number}
              </p>
              <p className="mt-1 text-sm font-medium text-primary-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
