import { useParams } from 'react-router-dom';
import lessons from '../lessons';
import { Link } from 'react-router-dom';

function Lesson() {
  const { lessonId } = useParams();
  const lesson = lessons.find((lesson) => lesson.id === parseInt(lessonId));
  return (
    <div className="Lesson page">
      <header>
        <p>
          <Link to={'/'}> Back to Home</Link>
        </p>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </header>
    </div>
  );
}

export default Lesson;
