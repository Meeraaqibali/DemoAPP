// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"))
// ReactDOM.render(<p>Today learn about ReactJS</p>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Project 1</li> <li>Project 2</li></ul>, 
//     document.getElementById("root")
// )

// function Navbar(){
//     return(
//  <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#">Action</a></li>
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li><hr className="dropdown-divider"/></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//               </li>
//             </ul>
//             <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
          
//           </div>
//         </div>
//       </nav>
        
//     )
// }


   
//       ReactDOM.render(
//         <div>
//             <Navbar/>
//         </div>, document.getElementById("root")
//       )



import { useAnimatedStyle, useAnimatedGestureHandler, withTiming } from 'https://cdn.jsdelivr.net/npm/react-native-reanimated@2.2.0/index.js';


      import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, useAnimatedStyle, useAnimatedGestureHandler, withTiming} from 'react-native-reanimated';

const LoaderButton = () => {
 const [isLoading, setLoading] = useState(false);

 const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
 };

 const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: isLoading ? withTiming(0.5, {duration: 500}) : withTiming(1, {duration: 500}),
        },
      ],
    };
 });

 const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startLoading = isLoading;
    },
    onActive: (event, ctx) => {
      if (ctx.startLoading && !isLoading) {
        handlePress();
      }
    },
 });

 return (
    <TouchableOpacity style={styles.button} onPress={handlePress} onHandlerStateChange={gestureHandler}>
      <View style={[styles.loader, animatedStyle]} />
    </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
 },
 loader: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ffffff',
 },
});

export default LoaderButton;


