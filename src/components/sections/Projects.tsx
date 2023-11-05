import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Text } from "@components/common/Text";
import ProjectOne from "@components/projects/ProjectOne";
import e0 from "public/screenshots/ecommerce-product-preview.png";
import e1 from "public/screenshots/ecommerce-1.png";
import e2 from "public/screenshots/ecommerce-2.png";
import e4 from "public/screenshots/ecommerce-4.png";
import e5 from "public/screenshots/ecommerce-5.png";
import d0 from "public/screenshots/dd-product-preview.png";
import d1 from "public/screenshots/dd-1.png";
import d2 from "public/screenshots/dd-2.png";
import d3 from "public/screenshots/dd-3.png";
import d4 from "public/screenshots/dd-4.png";
import movie0 from "public/screenshots/movie-product-preview.png";
import movie1 from "public/screenshots/movie-1.png";
import movie2 from "public/screenshots/movie-2.png";
import movie3 from "public/screenshots/movie-3.png";
import movie4 from "public/screenshots/movie-4.png";

const galleries = {
  ecommerce: [e0, e1, e2, e4, e5],
  dd: [d0, d1, d2, d3, d4],
  movie: [movie0, movie1, movie2, movie3, movie4],
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Projects = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  return (
    <section
      id="projects"
      className="mt-[5rem] lg:mt-[10rem] mb-[5rem] relative flex flex-col justify-start bg-transparent w-full md:w-5/6 mx-auto px-0 gap-8 z-0"
    >
      <motion.div
        style={{ y }}
        className="absolute h-auto w-11/12 top-12 border-b-2 border-primary/30 mx-auto text-right"
      >
        <Text
          variant="XL/bold/black"
          className="uppercase tracking-wider text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px]"
        >
          Projects
        </Text>
      </motion.div>
      <ProjectOne
        demo_link='https://ecommerce-nhlong.vercel.app/'
        repo_link='https://github.com/nhlong27/ecommerce'
        galleries={galleries.ecommerce}
        title={"Epicola"}
        description={<>An e-commerce website for beverages.</>}
        role={
          "At the beginning I was intrigued by the intricacies of ecommerce site architecture, particularly when implemented with a headless CMS approach. My focus lies in crafting personalized solutions, such as building dedicated order and stock management services. I aim to create a self-sustaining ecosystem where payment processing relies on trusted Saas solutions like Stripe's checkout and webhook integration."
        }
        difficulties={
          "Regarding data management, my strategy involves web scraping from websites, a method I find effective, especially for dynamic data sources like those associated with companies like PepsiCo. However, given the volatility of this data, I'm keen on establishing a scheduled cron job that fetches new information and efficiently pushes it into Kafka topics."
        }
        solution={
          "To maintain data consistency and provide real-time updates, I intend to employ a separate service that consumes the data from Kafka and seamlessly updates the MongoDB database. This way, the backend remains robust and always reflects the latest information, ensuring a smooth experience for users and streamlined operations for the ecommerce platform."
        }
        features={
          <ul className="ml-8 text-lg">
            <li className="list-disc">
              User signs up/ signs in with credentials / signs in with Google
              provider
            </li>
            <li className="list-disc">
              User edits profile information User browses product catalogue,
              searches for product by keyword, filter options (category, brand,
              price range, sort by best rated, most reviewed)
            </li>
            <li className="list-disc">
              User views product details: images, description, price, in stock,
              etc.
            </li>
            <li className="list-disc">
              User adds products to cart User checkouts
            </li>
            <li className="list-disc">User pays for their order</li>
            <li className="list-disc">
              User views order history and payment details
            </li>
            <li className="list-disc">User leaves reviews for products</li>
          </ul>
        }
        technologies={
          <ul className="ml-8 text-lg">
            <li className="list-disc">
              Client: Nextjs/Typescript with TailwindCSS, Redux Toolkit
            </li>
            <li className="list-disc">
              Server: JWT-based Next-Auth. Nextjs api routes and GraphQL.
              prisma/PostgreSQL, mongoose/MongoDB, Redis databses. Kafka pub/sub
              service using cron job
            </li>
            <li className="list-disc">Services: Stripe checkout, webhook</li>
            <li className="list-disc">
              Deployment: Vercel, Railway.app, AWS S3
            </li>
          </ul>
        }
        x={20}
      />
      <ProjectOne
        demo_link='https://dengue-defense.vercel.app'
        repo_link='https://github.com/nhlong27/dengue-defense'
        galleries={galleries.dd}
        title={"Dengue Defense"}
        description={
          <>An application website for dengue, integrated with IoT devices</>
        }
        role={
          "Originally an application integrated with IoT devices for awareness and preventive measures, this is the refactored version of my thesis project built on Nextjs. This project encompasses frontend and backend development, designing a user-friendly interface with data visualization components, establishing APIs for IoT device communication, and configuring a database to store and retrieve information. "
        }
        difficulties={
          "This project has deepened my understanding of pub/sub mechanisms and their contextual applications. The implementation of polling mechanisms to interact with Kafka has given me practical experience in data collection strategies, while integrating a time series database for telemetry storage has honed my skills in data management."
        }
        solution={
          "My exploration of TRPC and type-safe APIs has also equipped me with a solid grasp of efficient communication protocols. I've also attempted session-based authentication, enhancing my knowledge of security measures."
        }
        features={
          <ul className="ml-8 text-lg">
            <li className="list-disc">
              User signs up/ signs in with credentials / signs in with Google
              provider
            </li>
            <li className="list-disc">
              User browses available patients, doctors
            </li>
            <li className="list-disc">User views past device logs</li>
            <li className="list-disc">
              User as DOCTOR creates / removes devices or assigns to patients
            </li>
            <li className="list-disc">
              User views device details: telemetries, assigned user, logs, etc.
            </li>
            <li className="list-disc">
              User as DOCTOR starts devices to collect telemetry
            </li>
          </ul>
        }
        technologies={
          <ul className="ml-8 text-lg">
            <li className="list-disc">
              Client: Nextjs/Typescript with TailwindCSS (component libraries -
              shadcn, recharts), Jotai
            </li>
            <li className="list-disc">
              Server: Session-based Next-Auth, TRPC with zod validation,
              prisma/PostgreSQL + timeseries, Kafka topics
            </li>
            <li className="list-disc">Deployment: Vercel, Supabase</li>
          </ul>
        }
        x={-20}
      />
      <ProjectOne
        demo_link='https://firmedia.site'
        repo_link='https://github.com/nhlong27/movieSite'
        galleries={galleries.movie}
        title={"Fir Media"}
        description={<>A nature-inspired movie website.</>}
        role={
          "My interest in building streaming websites led me to design and develop a comprehensive movie website. I gained knowledge about server architecture, CRUD operations using Restful APIs with Express, and authentication through JSON Web Tokens (JWT)."
        }
        difficulties={
          "Leveraging modern technologies like Vite and TypeScript, I streamlined development processes and ensured robust code quality. Exploring state management solutions such as Jotai and Zustand further enriched my skill set. Successfully deploying the movie website on the internet marked a significant achievement at the very beginning of my career."
        }
        solution={
          "I use Express.js and MongoDB to develop a robust RESTful API and ensure secure storage of JWT tokens for user authentication. I optimized API performance by implementing pagination through the utilization of React Query's infinite query feature. I also attempted to write some unit tests using Vitest with React Testing Library."
        }
        features={
          <ul className="ml-8 text-lg">
            <li className="list-disc">
              User signs up/ signs in with credentials
            </li>
            <li className="list-disc">
              User edits profile information: Username, email, image, password
              and may deactivate account
            </li>
            <li className="list-disc">
              User browses recommended (Trending, Up coming, Airing now, Top
              rated, Most popular) media in Home page
            </li>
            <li className="list-disc">
              User searches for media by: keyword, filter options
            </li>
            <li className="list-disc">
              User views media details: overview, trailers, genres, similar
              media, etc.
            </li>
            <li className="list-disc">
              User adds media to list based on: Favorite, Is Watching, Plan to
              Watch, Completed, Dropped.
            </li>
            <li className="list-disc">User rates media</li>
            <li className="list-disc">
              User comments or removes their comments for a media
            </li>
          </ul>
        }
        technologies={
          <ul className="ml-8 text-lg">
            <li className="list-disc">
              Client: React/Typescript with Vite, TailwindCSS, Jotai, Zustand
            </li>
            <li className="list-disc">
              Server: JWT-based auth, ExpressJS with Restful API, zod
              validation, mongoose/MongoDB
            </li>
            <li className="list-disc">Deploy: Onrender, Railway.app</li>
          </ul>
        }
        x={20}
      />
    </section>
  );
};

export default Projects;
