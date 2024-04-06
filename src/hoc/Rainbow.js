import React from 'react'

const Rainbow= (WrappedComponent) => {
    const colors = ['voilet', 'indigo', 'blue', 'green', 'yellow','orange','red','pink'];
    const randomColor = colors[Math.floor(Math.random()*5)];
    const className = randomColor+'-text';
   return (props) => {
    return(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
   } 

}
 
export default Rainbow;