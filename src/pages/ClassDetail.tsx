import React from 'react';
import { useParams } from 'react-router-dom';
import RegisterClass from 'src/components/RegisterClass';
import LearningClass, { LearningClassProps } from 'src/models/LearningClass';
import styled from 'styled-components';

const Container = styled.div`
padding: 16px;

& > * {
  margin-bottom: 8px;
}

.title, .mentor {
  font-weight: bold;
}
`;

function ClassDetail() {
  const params = useParams();
  const [detail, setDetail] = React.useState<LearningClassProps | null>(null);

  React.useEffect(() => {
    if (params.id) {
      LearningClass(params.id)
        .then((res: LearningClassProps) => setDetail(res))
        .catch(() => setDetail(null));
    }
  }, [params.id]);

  return (
    <Container data-testid="ClassDetail">
      {detail && (
        <>
          <div className="title">{detail.name}</div>
          <div>Description</div>
          <div>{detail.description}</div>
          <div>Mentor:</div>
          {detail.mentors.map((mentor) => (
            <React.Fragment key={mentor.id}>
              <div>
                <div className="mentor">{mentor.name}</div>
                <div>{mentor.description}</div>
              </div>
            </React.Fragment>
          ))}
          {params.id && <RegisterClass id={params.id} />}
        </>
      )}
    </Container>
  );
}

export default ClassDetail;
