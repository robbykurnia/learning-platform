import React from 'react';
import Card from 'src/components/Card';
import Link from 'src/components/Link';
import AvailableClass, { AvailableClassProps, ClassProps } from 'src/models/AvailableClass';
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

function Home() {
  const [classes, setClasses] = React.useState<ClassProps[]>([]);
  React.useEffect(() => {
    AvailableClass().then((res: AvailableClassProps) => {
      setClasses(res.items);
    });
  }, []);
  return (
    <Container>
      {classes.map((item: ClassProps) => (
        <Link to={`detail/${item.id}`} key={item.id}>
          <Card>
            <div>{item.name}</div>
          </Card>
        </Link>
      ))}
    </Container>
  );
}

export default Home;
