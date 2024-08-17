import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      id:1,
      desc: "Let's create some coll stuff together using react.js",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green"}
    },
    {
      id:2,
      desc: "Here is the beginning of the journey of creating cool stuff with react.js",
      fileSize: ".6mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload now", tagColor: "blue"}
    },
    {
      id:3,
      desc: "Got to learn some new things like framermotion which helped us in enabling the dragging of the docs.",
      fileSize: ".3mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download now", tagColor: "green"}
    }
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-screen z-[3] flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} key={item.id} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
