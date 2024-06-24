const Part =({course}) => course.parts.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)
export default Part