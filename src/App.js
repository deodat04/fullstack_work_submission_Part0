const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises is {props.total} </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <div>
      <Header course={course} />

      <p>
        {part1.name} {part1.exercises}
      </p>

      <p>
        {part2.name} {part2.exercises}
      </p>

      <p>
        {part3.name} {part3.exercises}
      </p>

      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;

// const t = [1, -1, 3]

// const t2 = t.concat(5)

// console.log(t)  // [1, -1, 3] est affiché
// console.log(t2) // [1, -1, 3, 5] est affiché

// const t = [1, 2, 3]

// const m1 = t.map(value => value * 2)
// console.log(m1)   // [2, 4, 6] est affiché
