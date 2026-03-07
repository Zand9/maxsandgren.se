import { Mail, Code, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-display text-xs tracking-wider text-secondary-foreground uppercase">
            Under uppbyggnad
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Max
          <span className="text-primary">.</span>
          Sandgren
        </h1>

        {/* Role */}
        <p className="mt-4 font-display text-sm tracking-widest text-muted-foreground uppercase sm:text-base">
          <Code className="mb-0.5 mr-2 inline-block h-4 w-4 text-primary" />
          Webbutvecklare
        </p>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-secondary-foreground sm:text-lg">
          Ny hemsida är på gång. Under tiden går det utmärkt att nå mig via mail.
        </p>

        {/* CTA */}
        <a
          href="mailto:insert@mail.com"
          className="group mt-10 inline-flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3.5 font-display text-sm text-primary transition-all hover:border-primary/60 hover:bg-primary/20 hover:shadow-[var(--glow-primary)] sm:text-base"
        >
          <Mail className="h-4 w-4" />
          insert@mail.com
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Domain */}
        <p className="mt-16 font-display text-xs tracking-widest text-muted-foreground">
          maxsandgren.se
        </p>
      </div>
    </div>
  );
};

export default Index;
