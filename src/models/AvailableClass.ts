import ApiCaller from 'src/utils/apiCaller';

export type ClassProps = {
  id: string;
  name: string;
};

export type AvailableClassProps = {
  items: ClassProps[];
};

const AvailableClass = (): Promise<AvailableClassProps> => ApiCaller.get('/available-classes');

export default AvailableClass;
