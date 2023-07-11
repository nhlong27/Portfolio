import { Text } from "@components/common/Text";
import React from "react";

const ProjectOne = () => {
  return (
    <div>
      <Text variant="XL/bold/primary" className="font-bold font-serif">
        Fir Media
      </Text>
      <Text variant="lg/normal/black" className="my-3 ">
        A nature-inspired movie website. Both frontend and backend are hosted on{" "}
        <a
          href="https://render.com/"
          target="_blank"
          className="text-secondary hover:underline"
        >
          Render
        </a>{" "}
        and MongoDB database on{" "}
        <a
          href="https://railway.app/"
          target="_blank"
          className="text-secondary hover:underline"
        >
          Railway
        </a>
        .
      </Text>
      <div className="my-6">
        <Text variant="xl/bold/black">My Role</Text>
        <Text variant="lg/normal/black" className="w-full whitespace-nowrap">
          In this project, I took charge of the complete software development
          process, overseeing every stage from initiation to completion. This
          experience highlights my capacity to independently acquire new skills
          and effectively adapt to emerging technologies, allowing me to expand
          my knowledge to full-stack development.
        </Text>
      </div>
      <div className="my-6">
        <Text variant="xl/bold/black">Project Difficulties</Text>
        <Text variant="lg/normal/black" className="w-full whitespace-nowrap">
          The implementation of the backend according to industry best practices
          and security standards posed the greatest challenge in this project. I
          had to acquire some proficiency in backend technologies while also
          adopting a full TypeScript development approach
        </Text>
      </div>
      <div className="my-6">
        <Text variant="xl/bold/black">My Solution</Text>
        <Text variant="lg/normal/black" className="w-full whitespace-nowrap">
          I use Express.js and MongoDB to develop a robust RESTful API and
          ensure secure storage of JWT tokens for user authentication. As for
          the frontend, I ventured beyond traditional approaches like Redux and
          explored state management libraries like Jotai and Zustand.
          Additionally, I optimized API performance by implementing pagination
          through the utilization of React Query's infinite query feature. I
          also attempted to write some unit tests using Vitest with React
          Testing Library.
        </Text>
      </div>
      <div className="my-6">
        <Text variant="xl/bold/black">Notable Features</Text>
        <ul>
          <li>Sign in/ Registration</li>
          <li>Token Authentication with JSON Web Tokens</li>
          <li>Lazy loading image with infinite scroll</li>
          <li>Custom swiper</li>
          <li>Save movies and categorized them</li>
          <li>Movies saved to history after watched</li>
          <li>Comment section for each movie</li>
        </ul>
      </div>
      
    </div>
  );
};

export default ProjectOne;
