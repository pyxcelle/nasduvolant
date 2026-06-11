import { createFileRoute } from "@tanstack/react-router";
import { Star, ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Avis Google — N'as du Volant Bron" },
      { name: "description", content: "Ils ont eu leur permis chez N'as du Volant à Bron. Lisez les avis de nos élèves et laissez le vôtre sur Google." },
    ],
  }),
  component: Avis,
});

const temoignages = [
  { n: "Léa M.", note: 5, date: "Mars 2025", t: "Super auto-école, moniteurs à l'écoute et très patients. Permis obtenu du premier coup ! Je recommande vivement." },
  { n: "Karim B.", note: 5, date: "Février 2025", t: "Planning flexible, ce qui m'a permis de jongler avec mes études. Très bonne ambiance, équipe professionnelle." },
  { n: "Inès T.", note: 5, date: "Janvier 2025", t: "Conduite accompagnée parfaitement encadrée. Les rendez-vous pédagogiques sont très utiles. On se sent vraiment en confiance." },
  { n: "Mathieu R.", note: 5, date: "Décembre 2024", t: "Moniteur au top, pédagogue et bienveillant. Les cours de code sont bien organisés. Permis réussi !" },
  { n: "Sofia D.", note: 5, date: "Novembre 2024", t: "Très bonne expérience, je recommande à 100%. Moniteurs diplômés et véhicules récents. Formule boîte automatique parfaite pour moi." },
  { n: "Théo V.", note: 5, date: "Octobre 2024", t: "Agence au top du début à la fin. Inscription simple, suivi régulier et examen passé sereinement. Merci !" },
];

function Avis() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Avis Google</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl">
            Ils ont eu <span className="italic text-primary">leur permis.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            La satisfaction de nos élèves est notre meilleure récompense. Retrouvez leurs témoignages directement sur Google.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/search/N'as+du+Volant+Bron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all"
            >
              Voir tous nos avis Google <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.google.com/maps/search/N'as+du+Volant+Bron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Laisser un avis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {temoignages.map((t) => (
              <figure key={t.n} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex gap-1 text-primary">
                  {[...Array(t.note)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 font-display text-lg italic text-balance">"{t.t}"</blockquote>
                <figcaption className="mt-6 flex justify-between items-center text-sm text-muted-foreground">
                  <span>— {t.n}</span>
                  <span className="text-xs">{t.date}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-10 text-center">
            <div className="font-display text-5xl text-primary">5 / 5</div>
            <div className="mt-2 text-sm text-muted-foreground">Note moyenne sur Google</div>
            <p className="mt-6 max-w-lg mx-auto text-muted-foreground leading-relaxed text-sm">
              Vous avez obtenu votre permis chez N'as du Volant ? Partagez votre expérience sur Google et aidez les futurs élèves à faire leur choix.
            </p>
            <a
              href="https://www.google.com/maps/search/N'as+du+Volant+Bron"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all"
            >
              Laisser mon avis Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
