import React from 'react';
import styles from './employee.module.css';
import globalStyles from '../../app.module.css';

export const Employee = () =>{
    const onHandleEmployeeTextboxKeyPress = () =>{
        console.log('click')
    }
    return (
    <div class={styles.containerGrid}>
        <span>Employee Name</span>
        <input type="text" onKeyDown={onHandleEmployeeTextboxKeyPress}/>
    </div>
    )
}