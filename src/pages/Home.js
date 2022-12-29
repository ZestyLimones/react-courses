import lessons from '../lessons';
import LessonSummary from '../components/LessonSummary';

function Home() {
  return (
    <div className="Home Page">
      <header>
        <h1>Orlando's Medical Teachings</h1>
      </header>
      {lessons.map((lesson) => (
        <LessonSummary lesson={lesson} key={lesson.id} />
      ))}
    </div>
  );
}

export default Home;
