import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function AboutUsPage() {
  return (
    <main className="min-h-screen w-full bg-[rgb(200,200,200)] px-10 py-28 lg:px-40">
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="mb-12 text-5xl font-bold text-[#111111] lg:text-6xl">About Us</h1>

        <div className={`${ibmPlexMono.className} space-y-6 text-[#666666]`}>
          <p className="text-base leading-relaxed">
            We are a robotics club that competes in VEX and FTC. Around 15 years old now, our club takes pride in teamwork and problem solving. We have competed in VEX for over 5 years and have made it to states and worlds. We recently expanded to FTC and included many new members. We are looking to expand to FRC in the future.
          </p>
          <p className="text-base leading-relaxed">
            Apart from competitive robotics, we also have many outreach programs. We teach SPIKE lego robotics to john sinnot elementery school students. We have also founded the M.A.R.S. program, which is robotics workshop for elementary school students across MUSD. We also enhance our school spirit by participating in school events and activities. We recently created a ferris wheel for the school's homecoming event. For more details, visit our blog!
          </p>
        </div>
      </section>
    </main>
  );
}
