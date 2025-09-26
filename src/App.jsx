// // // import React from 'react'
// // // import { ThemeProvider } from './contextAPI/ThemeContext'
// // // import ThemeTogggleButton from './contextAPI/ThemeTogggleButton'

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <ThemeProvider>
// // //         <ThemeTogggleButton/>
// // //       </ThemeProvider>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React from 'react'
// // // import UserProfile from './contextAPI/user/UserProfile'
// // // import UserContextProvider from './contextAPI/user/UserContextProvider'
// // // import LoginForm from './contextAPI/user/LoginForm'

// // // const App = () => {
// // //   return (
// // //     <UserContextProvider>
// // //       <LoginForm/>
// // //       <UserProfile/>
// // //     </UserContextProvider>
// // //   )
// // // }

// // // export default App



// // import React, { useState, useEffect } from 'react';

// // const CountdownTimer = ({ initialSeconds }) => {
// //   const [seconds, setSeconds] = useState(initialSeconds);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setSeconds((prevSeconds) => prevSeconds - 1);
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Countdown Timer</h1>
// //       <p>{seconds} seconds remaining</p>
// //     </div>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <div>
// //       <CountdownTimer initialSeconds={60} />
// //     </div>
// //   );
// // };

// // export default App; 








// import React from "react";
// import withDataFetching from "./HOC/withDataFetching";
// import UserList from "./HOC/UserList";


// const UserListWithData = withDataFetching(
//   UserList,
//   "https://jsonplaceholder.typicode.com/users"
// );

// export default function App() {
//   return (
//     <div>
//       <h2>User List</h2>
//       <UserListWithData />
//     </div>
//   );
// }



// import React, { useLayoutEffect, useRef, useState } from 'react'

// const App = () => {
//     const boxRef = useRef(null);
//   const [boxWidth, setBoxWidth] = useState(0);

//   useLayoutEffect(() => {
//     // Runs right after DOM update but before paint
//     const width = boxRef.current.getBoundingClientRect().width;
//     setBoxWidth(width);
//   }, []);


//   return (
//     <div>
//       <div ref={boxRef} style={{ width: "50%" }}>
//       Box width: {boxWidth}px
//     </div>
//     </div>
//   )
// }

// export default App















// import React from 'react'
// import MultiStepForm from './UseReducerEx/MultiStepForm'

// const App = () => {
//   return (
//     <div>
//       <MultiStepForm/>
//     </div>
//   )
// }

// export default App








// import React, { useState, useCallback } from "react";

// const ChildButton = React.memo(({ onClick }) => {
//   console.log("ChildButton rendered!");
//   return <button onClick={onClick}>Increment</button>;
// });

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []); // function recreated only if dependencies change

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <ChildButton onClick={handleIncrement} />
//     </div>
//   );
// }

// export default App;



import React from 'react'
import Card from './componets/customComponets/Card'

const App = () => {
  return (
    <div>
      <Card titel="User Details" des="My name is sharan , i am from manvi ,i'm working as front end developer in Travercel Tech"/>
    </div>
  )
}

export default App
