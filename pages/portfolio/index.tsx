import Project from '../../components/Project'

type Project = {
  title: string
  url: string
  sourceCodeUrl: string
  description: string
}

const projects: Project[] = [
  {
    title: 'aBURL - A Better URL',
    url: 'https://www.npmjs.com/package/a-better-url',
    sourceCodeUrl: 'https://github.com/JannisK89/a-better-url',
    description:
      'A npm package for a simpler way to manage URLs in your project without the mess of string concatenation instead treating URLs as objects. Created using Typescript with Bun.',
  },
  {
    title: 'Job Planner',
    url: 'https://jobplanner.janniskaranikis.dev',
    sourceCodeUrl: 'https://github.com/JannisK89/jobplanner',
    description: ` (Site is in Swedish) 
    Full stack proof of concept for a job planner app that allows users to create plans to help with job search with the help of an AI assistant.
    Uses OpenAI APIs because everybody gotta have an LLM project right? ;D
    Created using NextJS 14, Typescript, Drizzle, Vercel Postgres, OpenAI, TailwindCSS and a bunch of other fun stuff.`,
  },
  {
    title: 'Landing Page',
    url: 'https://janniskaranikis.dev',
    sourceCodeUrl: 'https://github.com/JannisK89/landing-page',
    description:
      'Simple linktree type landing page for contact information, github, blog and social media links. Created using NextJS 14, Typescript and TailwindCSS.',
  },
  {
    title: 'Art Store',
    url: 'https://art-store.janniskaranikis.dev/',
    sourceCodeUrl: 'https://github.com/JannisK89/art-store',
    description:
      'Simple Ecommerce store for "Art" made for anyone that wants a playground for training test automation. Created using NextJS 14, Typescript and TailwindCSS.',
  },
  {
    title: 'Daedalus',
    url: 'https://daedalus.janniskaranikis.dev/',
    sourceCodeUrl: 'https://github.com/JannisK89/daedalus',
    description:
      'Test automation challenge site for training or as a test for interviewing potential candidates. Created using Sveltekit 3, Typescript and TailwindCSS.',
  },
  {
    title: 'Tech Blog',
    url: '/',
    sourceCodeUrl: 'https://github.com/JannisK89/tech-blog',
    description:
      'My Tech Blog where I write about stuff that interest me. Created using NextJS 13, Typescript and TailwindCSS.',
  },
]

export default function Portfolio() {
  return (
    <>
      <main className="mx-6 md:mx-0">
        <div className="max-w-4xl md:mx-auto md:my-8 my-4 h-full">
          <h2 className="text-3xl md:mt-8 mt-4 font-sans w-full font-semibold mb-8">
            Portfolio
          </h2>
          <ul className="flex flex-col gap-8">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
