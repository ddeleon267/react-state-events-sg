import React from 'react'
import { TomatoButton } from './Styles.js'

export const Item = (props) => {
  const onDelete = () => {
      props.handleOnDelete(props.id)
  }
    return (
        <div>
            {props.title}
            <TomatoButton id={props.id} onClick={onDelete}>Completed!</TomatoButton>
        </div>
    )
}

