import React from 'react';
import style from './MyInput.module.css';

function MyInput(props) {
    return (
        <input className={style.input} {...props}>

        </input>
    );
}

// const MyInput = React.forwardRef((props, ref) => {
//     return (
//         <input ref={ref} className={style.input} {...props}>

//         </input>
//     );
// });

export default MyInput;