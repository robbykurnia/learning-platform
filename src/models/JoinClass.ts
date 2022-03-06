import ApiCaller from 'src/utils/apiCaller';

export type JoinClassResProps = {
  message: string
};

export type JoinClassReqProps = {
  classId: number,
  attendeeFullName: string,
  attendeeEmail: string,
};

const JoinClass = (id: number, name: string, email: string): Promise<JoinClassResProps> => ApiCaller.post('/join-class', {
  classId: id,
  attendeeFullName: name,
  attendeeEmail: email,
});

export default JoinClass;
