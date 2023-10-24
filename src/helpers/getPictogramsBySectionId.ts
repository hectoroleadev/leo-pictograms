import { pictogramsList } from '../data';

export const getPictogramsBySectionId = (sectionId: string) => {
  const section = pictogramsList.find(
    (section) => section.section.id === sectionId
  );

  return section ? section.pictograms : undefined;
};
