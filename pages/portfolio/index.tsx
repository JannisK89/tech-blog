import Project from '../../components/Project'

type Project = {
  title: string
  url: string
  sourceCodeUrl: string
  description: string
}

const projects: Project[] = [
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
      <main className="mx-6 md:mx-0 md:h-[calc(100vh-202px)]">
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
