import React from "react"

function Avatar(props) {
  return (
    <>
      <img style={{ height: props.height || "80px", width: props.width || "80px" }} src={"https://cdn-icons-png.flaticon.com/512/149/149071.png" || props.img} alt="avatar" srcset="" />
    </>
  )
}

export default Avatar
