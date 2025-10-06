import { Navigation } from "@/components/navigation"
import { Download, Mail, Github, Linkedin, Globe, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-4">
                    <span className="text-neon-pink neon-text-strong">TRISTAN GLOTIN</span>
                  </h1>
                  <p className="text-xl text-gray-400 font-mono">Développeur C# .NET</p>
                </div>
                <Button className="bg-neon-blue hover:bg-neon-blue/80 text-black font-mono font-bold neon-border-strong border-2 border-neon-blue hover:scale-105 transition-transform">
                  <Download className="h-4 w-4 mr-2" />
                  DOWNLOAD_PDF
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm font-mono">
                <div className="flex items-center gap-2 text-neon-cyan">
                  <MapPin className="h-4 w-4" />
                  Toulouse, France
                </div>
                <a
                  href="mailto:tristan.glotin@gmail.com"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:animate-pulse" />
                  tristan.glotin@gmail.com
                </a>
                <a
                  href="tel:0662832451"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:animate-pulse" />
                  0662832451
                </a>
                <a
                  href="https://github.com/cafenombre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors group"
                >
                  <Github className="h-4 w-4 group-hover:animate-pulse" />
                  github.com/cafenombre
                </a>
                <a
                  href="https://linkedin.com/in/tristan-glotin-248296108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors group"
                >
                  <Linkedin className="h-4 w-4 group-hover:animate-pulse" />
                  LinkedIn
                </a>
                <a
                  href="https://bbprojet.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors group"
                >
                  <Globe className="h-4 w-4 group-hover:animate-pulse" />
                  bbprojet.dev
                </a>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">PROFIL</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Développeur .NET bilingue français–anglais, passionné et polyvalent, avec une forte expertise dans le
                développement backend et la création d'outils métiers sur mesure. Curieux et toujours en veille
                technologique, j'aime concevoir des solutions fiables, élégantes et pérennes — en équipe comme en
                autonomie.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">COMPÉTENCES</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-pink neon-text">TECHNOLOGIES</h3>
                  <div className="flex flex-wrap gap-2">
                    {["C#", "VB.NET", "TypeScript", ".NET (4-8)", "Angular", "Node.js"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-mono border-2 border-neon-blue/60 text-neon-blue bg-neon-blue/10 hover:bg-neon-blue/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-pink neon-text">OUTILS & MÉTHODES</h3>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "MongoDB", "Revit API", "Git", "Azure DevOps", "Clean Architecture"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-mono border-2 border-neon-blue/60 text-neon-blue bg-neon-blue/10 hover:bg-neon-blue/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">LANGUES</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-2 border-neon-pink/50 bg-black/50 font-mono text-sm hover:border-neon-cyan/70 hover:bg-neon-pink/5 transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  <div className="relative z-10">
                    <span className="text-neon-pink font-bold">Français</span>
                    <span className="text-gray-400"> — Natif</span>
                  </div>
                </div>
                <div className="p-4 border-2 border-neon-pink/50 bg-black/50 font-mono text-sm hover:border-neon-cyan/70 hover:bg-neon-pink/5 transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  <div className="relative z-10">
                    <span className="text-neon-pink font-bold">Anglais</span>
                    <span className="text-gray-400"> — Bilingue</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">
                EXPÉRIENCES_PROFESSIONNELLES
              </h2>
              <div className="space-y-12">
                <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text">.NET Developer</h3>
                    <span className="text-sm font-mono text-gray-500 font-bold">FÉV. 2024 – PRÉSENT</span>
                  </div>
                  <div className="text-lg text-neon-blue mb-4 font-mono">Stonal · Toulouse</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>
                        Conception et développement d'add-ins Revit en C# (.NET 8) pour la numérisation et le contrôle
                        qualité de maquettes BIM
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Recueil des besoins, définition d'architectures logicielles et mise en production</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Collaboration avec des équipes internationales (anglais quotidien)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Mise en place de bonnes pratiques de code et documentation technique</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text">Lead Développeur .NET</h3>
                    <span className="text-sm font-mono text-gray-500 font-bold">FÉV. 2020 – MARS 2024</span>
                  </div>
                  <div className="text-lg text-neon-blue mb-4 font-mono">Techform · Toulouse</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Création d'API de modélisation 2D pour configurateurs sur mesure</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>
                        Développement et maintenance de configurateurs métiers (fenêtres, portails, garde-corps…)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Intégration ERP via Web Services (API REST)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Structuration d'architectures de données et optimisation multi-projets</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Gestion d'équipe et pilotage via Azure DevOps</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text">Junior Web Developer</h3>
                    <span className="text-sm font-mono text-gray-500 font-bold">SEPT. 2018 – AOÛT 2019</span>
                  </div>
                  <div className="text-lg text-neon-blue mb-4 font-mono">Institut Vajra Yogini · Toulouse</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Développement en autonomie d'une application calendrier en PHP Symfony</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>
                        Gestion des réservations d'hébergements, réunions et conférences via un planning interactif
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text">Développeur Junior C#</h3>
                    <span className="text-sm font-mono text-gray-500 font-bold">OCT. 2017 – JUIL. 2018</span>
                  </div>
                  <div className="text-lg text-neon-blue mb-4 font-mono">EB-Trans IT · Luxembourg</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Maintenance et évolution d'une application interne (transport)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Gestion de fichiers automatisée et modules complémentaires</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Expérience en AngularJS, MicroServices, .NET</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text">
                      Développeur PHP Junior
                    </h3>
                    <span className="text-sm font-mono text-gray-500 font-bold">AVR. 2017 – SEPT. 2017</span>
                  </div>
                  <div className="text-lg text-neon-blue mb-4 font-mono">Goeres Group · Luxembourg</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Développement d'intranet (gestion RH, réservations, inventaire)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text">
                      Développeur Junior ASP.Net
                    </h3>
                    <span className="text-sm font-mono text-gray-500 font-bold">AVR. 2016 – JUIL. 2016</span>
                  </div>
                  <div className="text-lg text-neon-blue mb-4 font-mono">Creative Spread · Leeds (UK)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-neon-pink mt-1 font-bold">▹</span>
                      <span>Développement d'une application web de gestion de projets en C# .NET</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">PROJETS</h2>
              <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text mb-2">WatchPact</h3>
                <div className="text-lg text-neon-blue mb-2 font-mono">bbprojet.dev</div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Conception d'une plateforme web et mobile de partage de listes de visionnage.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[".NET 8 API", "MongoDB", "Angular", "Google OAuth2"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono border-2 border-neon-cyan/60 text-neon-cyan bg-neon-cyan/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">FORMATION</h2>
              <div className="border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors">
                <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text mb-2">
                  Licence & Master 1 ICONE
                </h3>
                <div className="text-lg text-neon-blue mb-2 font-mono">Université de La Rochelle</div>
                <div className="text-sm font-mono text-gray-500">SEPT. 2013 – AVR. 2017</div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">CENTRES_D'INTÉRÊT</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "🎬 Cinéma et storytelling",
                  "🧗 Escalade (intérieure et extérieure)",
                  "✍️ Bande dessinée",
                  "☕ Café & culture numérique",
                ].map((interest) => (
                  <div
                    key={interest}
                    className="p-4 border-2 border-neon-pink/50 bg-black/50 font-mono text-sm text-gray-400 hover:border-neon-cyan/70 hover:bg-neon-pink/5 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="relative z-10">{interest}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
