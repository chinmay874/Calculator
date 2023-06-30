import React, { useState } from 'react'
import Button from '../Button/button'
import "./main.css"

function Main() {
  const[value, setvalue]=useState("0")
  return (
    <div className='Calculator_Frame'>
    <div>
      <textarea className='textview'/>
    </div>
    <div className='stylebutton'>
      <Button name="Clear"/>
      <Button name="C"/>
      <Button name="/"/>
    </div>
    <div className='stylebutton'>
    <Button name="7"/>
    <Button name="8"/>
    <Button name="9"/>
    <Button name="*"/>
    </div>
    <div className='stylebutton'>
    <Button name="4"/>
    <Button name="5"/>
    <Button name="6"/>
    <Button name="-"/>
    </div>
    <div className='stylebutton'>
    <Button name="1"/>
    <Button name="2"/>
    <Button name="3"/>
    <Button name="+"/>
    </div>
    <div className='stylebutton'>
    <Button name="0"/>
    <Button name="."/>
    <Button name="="/>

    </div> 
    
    </div>
  )
}

export default Main