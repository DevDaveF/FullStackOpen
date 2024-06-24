const Total = ({course}) => <h3> total of {course.parts.reduce((sum,parts) => {return sum + parts.exercises}, 0)} exercises </h3>

export default Total