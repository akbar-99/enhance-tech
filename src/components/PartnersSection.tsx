const partners = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Cisco",
  "Dell",
  "HP",
  "VMware",
  "Fortinet",
  "Sophos",
  "Veeam"
];

const PartnersSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground">
          We're proud to be certified by and partnered with industry leaders
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex gap-16 partner-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 px-8 py-4 glass-card flex items-center justify-center min-w-[180px]"
            >
              <span className="text-foreground font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
