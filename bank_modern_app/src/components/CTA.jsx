import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex flex-1 flex-col'>
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum maiores quidem quod? Blanditiis eveniet, sint fuga ullam nobis temporibus?</p>
    </div>
    <div><Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}/></div>


  </section>
)

export default CTA