import React from 'react'

type Props = {
    title:String;
}

const BoardTitle = ({title}: Props) => {
  return <div className="">{title}</div>;
}

export default BoardTitle