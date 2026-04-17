interface ContactLink {
  href: string;
  emoji: string;
  label: string;
  sub: string;
}

const contacts: ContactLink[] = [
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=lingaraj01052002@gmail.com",
    emoji: "📧",
    label: "Email",
    sub: "lingaraj01052002@gmail.com",
  },
  {
    href: "https://github.com/lingaraj2002",
    emoji: "🐙",
    label: "GitHub",
    sub: "@lingaraj2002",
  },
  {
    href: "https://www.linkedin.com/in/lingaraj-padalingam-658080253/",
    emoji: "💼",
    label: "LinkedIn",
    sub: "View Profile",
  },
  {
    href: "https://itch.io/profile/lingaraj2002",
    emoji: "🎮",
    label: "Itch.io",
    sub: "Play My Games",
  },
];

export default function Contact() {
  return (
    <section className="px-8 py-8 text-center text-gray-200" id="contact">
      <div className="max-w-[1366px] mx-auto">
        <h2 className="font-pixel text-xl md:text-3xl my-8">GET IN TOUCH</h2>
        <p className="font-pixel text-slate-400 leading-relaxed my-8 text-sm md:text-base">
          Available for freelance, collaborations, and game projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-dark-700 border-4 border-primary px-8 py-12
                text-white no-underline
                transition-transform duration-200
                hover:-translate-y-1.5 hover:shadow-primary
                flex flex-col items-center
              "
            >
              <span className="text-3xl">{c.emoji}</span>
              <span className="block my-4 font-pixel text-sm md:text-base">{c.label}</span>
              <small className="block mt-1.5 text-indigo-200 font-pixel text-[8px] md:text-xs">
                {c.sub}
              </small>
            </a>
          ))}
        </div>

        <div className="mt-10 text-green-500 font-pixel text-sm">
          🟢 <strong>Currently Available</strong> for Projects
        </div>

        <p className="font-pixel text-slate-400 leading-relaxed my-8 text-xs md:text-sm">
          Frontend &amp; Backend Solutions | HTML5 &amp; Phaser Games | Pixel
          Art &amp; 2D Game Asset Design | UI Design for Games &amp; Web Apps
        </p>
      </div>
    </section>
  );
}
