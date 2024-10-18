import { useState, createContext, useEffect } from "react";

import { singleProjectData as VisitRethymnoData } from "../data/VisitRethymnoData";
import { singleProjectData as NexterData } from "../data/NexterData";
import { singleProjectData as CoachData } from "../data/CoachFinder";
import { singleProjectData as TravelerData } from "../data/TravelerData";
import { singleProjectData as VisitRethymnoVueData } from "../data/VisitRethymnoVueData";
import { singleProjectData as UsePopcornData } from "../data/UsePopcornData";
import { singleProjectData as Forkify } from "../data/ForkifyData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, projectId }) => {
  const [singleProjectData, setSingleProjectData] = useState(null);

  useEffect(() => {
    const selectProjectById = (id) => {
      let projectData = null;

      switch (parseInt(id)) {
        case 1:
          projectData = NexterData;
          break;
        case 2:
          projectData = VisitRethymnoVueData;
          break;
        case 3:
          projectData = CoachData;
          break;

        case 4:
          projectData = TravelerData;
          break;
        case 5:
          projectData = VisitRethymnoData;
          break;
        case 6:
          projectData = UsePopcornData;
          break;
        case 7:
          projectData = Forkify;
          break;

        default:
          console.error(`No data found for project with the id: ${id}`);
      }

      setSingleProjectData(projectData);
    };

    if (projectId) {
      selectProjectById(projectId);
    }
  }, [projectId]); // Runs when projectId changes

  return (
    <SingleProjectContext.Provider value={{ singleProjectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
