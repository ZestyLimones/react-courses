import { Link } from 'react-router-dom';

function LessonSummary(props) {
  return (
    <section key={props.lesson.id} className="summary">
      <div>
        <div className="title">
          <h2>
            <Link
              className="no-underline coursor-pointer"
              to={'/lessons/' + props.lesson.id}
            >
              {props.lesson.title}
            </Link>
          </h2>
        </div>
      </div>
      <p>
        <Link
          className="no-underline coursor=pointer"
          to={'/lessons/' + props.lesson.id}
        >
          {props.lesson.description}
        </Link>
      </p>
    </section>
  );
}

export default LessonSummary;
