import React from 'react';
import FeaturedCard from '@/config/ProjectCard';


function Projects() {

  return (
    <div className="flex flex-col mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-black dark:text-white"><span className="text-5xl">S</span>ome of my works.</h1>
      <p className="text-lg mb-8">
        Check out some of the projects I worked on.
      </p>
      <div className="grid grid-cols-1 gap-8">
        <FeaturedCard
          idx={1}
          title="Game Store"
          src="/projects/GameStore.png"
          description="An e-commerce store made up of NextJs, Typescript, NextAuth for authentication and Stripe."
          
          demoUrl="https://game-store-ne.vercel.app/home"
          githubUrl="https://github.com/aman2611/nextjs-ecommerce"
       />

        <FeaturedCard
          idx={2}
          title="Movie App"
          description="A movie app made with NextJs, React Redux, Redux Thunk and TailwindCSS."
          src="/projects/Movieapp.png"
          demoUrl="https://movie-app-nm.vercel.app/"
          githubUrl="https://github.com/aman2611/movie-app"
        />

        <FeaturedCard
          idx={3}
          title="Inshorts Clone"
          description="A clone of Inshorts.com - a news website made up of ReactJS and MaterialUI."
          src="/projects/InshortsClone.png"
          demoUrl="https://inshorts-clone-beta.vercel.app/"
          githubUrl="https://github.com/aman2611/inshorts-clone"
        />
      </div>
    </div>
  );
}

export default Projects;
