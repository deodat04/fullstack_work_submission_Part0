import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
};

export default App;

// const Header = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   );
// };

// const Hello = ({ name, age }) => {
//   //const { name, age } = props
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       <Part
//         part={props.course.parts[0].name}
//         exercises={props.course.parts[0].exercises}
//       />
//       <Part
//         part={props.course.parts[1].name}
//         exercises={props.course.parts[1].exercises}
//       />
//       <Part
//         part={props.course.parts[2].name}
//         exercises={props.course.parts[2].exercises}
//       />
//     </div>
//   );
// };

// const Part = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </div>
//   );
// };

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         {" "}
//         Number of exercises is{" "}
//         {props.course.parts[0].exercises +
//           props.course.parts[1].exercises +
//           props.course.parts[2].exercises}{" "}
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   const name = "Santos";
//   const age = 20;

//   return (
//     <div>
//       <Header course={course.name} />
//       <h2>Greetings</h2>
//       <Hello name="Jean" age={20 + 2} />
//       <Hello name={name} age={age} />
//       <h2>Contents</h2>
//       <Content course={course} />

//       <Total course={course} />
//     </div>
//   );
// };

// export default App;

// const t = [1, -1, 3]

// const t2 = t.concat(5)

// console.log(t)  // [1, -1, 3] est affiché
// console.log(t2) // [1, -1, 3, 5] est affiché

// const t = [1, 2, 3]

// const m1 = t.map(value => value * 2)
// console.log(m1)   // [2, 4, 6] est affiché

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(
//       "hello, my name is " + this.name + "and i have " + this.age + " years old"
//     );
//   }
// }

// const adam = new Person("Adam Ondra", 35);
// adam.greet();

// const janja = new Person("Janja Garnbret", 22);
// janja.greet();
