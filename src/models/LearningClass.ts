import ApiCaller from 'src/utils/apiCaller';

export type MentorProps = {
  id: number,
  name: string,
  description: string
};

export type LearningClassProps = {
  id: number,
  name: string,
  mentors: MentorProps[],
  description: string
};

const LearningClass = (id: string): Promise<LearningClassProps> => ApiCaller.get(`/learning-class?id=${id}`);

export default LearningClass;
