import { Text } from "@components/common/Text";
import React from "react";

const ProjectOne = () => {
  return (
    <div>
      App description
      <div>
        <Text variant="xl/bold/black">My Role</Text>
      </div>
      <div>
        <Text variant="xl/bold/black">Project Difficulties</Text>
      </div>
      <div>
        <Text variant="xl/bold/black">My Solution</Text>
      </div>
      <div>
        <Text variant="xl/bold/black">Notable Features</Text>
        <ul>
          <li>Feature one</li>
        </ul>
      </div>
      <div>
        <Text variant="xl/bold/black">Technologies Used</Text>
      </div>
    </div>
  );
};

export default ProjectOne;
