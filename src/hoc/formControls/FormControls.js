import React from 'react';
import style from './formControls.module.css'



export const renderField = (Component) => {
    return ({input, meta, ...props}) => {
      return (
        <div className={style.forControl}>
          <Component {...props} {...input} className={meta.error && meta.touched && meta.active? style.error:""}/>
          {meta.touched && meta.error && meta.active && <div className={style.errorMessage}>{meta.error}</div>}
        </div>
      );
    }
  }