import React from 'react'

const DoctorDetails = (props) => {
  return (
    <div>
        <li>Monday <span>{props.monday}</span></li>
        <li>Tuesday <span>{props.tuesday}</span></li>
        <li>Wednesday <span>{props.wednesday}</span></li>
        <li>Thursday <span>{props.thursday}</span></li>
        <li>Friday <span>{props.friday}</span></li>
        <li>Saturday <span>{props.saturday}</span></li>
    </div>
  )
}

export default DoctorDetails