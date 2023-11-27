import './App.css'
import styled from 'styled-components';

// 1--- Using Inline Styling:

export function Box1() {
const box1Style = {
  width: '600px',
  height: '400px',
  backgroundColor: 'green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

return (
  <div style={box1Style}>
    <Box2 />
  </div>
)
}

export function Box2() {
const box2Style = {
  width: '550px',
  height: '350px',
  backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

return (
  <div style={box2Style}>
    <Box3 />
  </div>
)
}

export function Box3() {
const box3Style = {
  width: '500px',
  height: '300px',
  backgroundColor: 'pink',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
};

return (
  <div style={box3Style}>
    <Box4 />
    <Box4 />
  </div>
)
}
export function Box4() {
const box4Style = {
  width: '350px',
  height: '120px',
  backgroundColor: 'plum',
};

return (
  <div style={box4Style}>
  </div>
)
}


// 2--- Using Classes:

// export function Box1() {
//   return (
//     <div className='box1'>
//       <Box2 />
//     </div>
//   );
// }

// export function Box2() {
//   return (
//     <div className='box2'>
//       <Box3 />
//     </div>
//   );
// }

// export function Box3() {
//   return (
//     <div className='box3'>
//       <Box4 />
//       <Box4 />
//     </div>
//   );
// }

// export function Box4() {
//   return (
//     <div className='box4'>
//     </div>
//   );
// }


// 3--- Using Styled-Components:

// First, I need to install styled-components:
// npm install styled-components
// Now, you can use it in my components:


// const StyledBox1 = styled.div`
//   width: 600px;
//   height: 400px;
//   background-color: green;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export function Box1() {
//   return (
//     <StyledBox1>
//       <Box2 />
//     </StyledBox1>
//   );
// }

// const StyledBox2 = styled.div`
// width: '550px',
// height: '350px',
// backgroundColor: 'blue',
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export function Box2() {
//   return (
//     <StyledBox2>
//       <Box3 />
//     </StyledBox2>
//   );
// }
// const StyledBox3 = styled.div`
// width: '500px',
// height: '300px',
// backgroundColor: 'pink',
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export function Box3() {
//   return (
//     <StyledBox3>
//       <Box4 />
//       <Box4 />
//     </StyledBox3>
//   );
// }
// const StyledBox4 = styled.div`
// width: '350px',
// height: '120px',
// backgroundColor: 'plum',
// `;

// export function Box4() {
//   return (
//     <StyledBox4>
//     </StyledBox4>
//   );
// }

function App() {
 
  return (
    <>
      <Box1 />
    </>
  )
}

export default App
