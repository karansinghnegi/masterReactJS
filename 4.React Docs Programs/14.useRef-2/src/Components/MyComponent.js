import React, {useRef, useEffect } from 'react';
import Username from './Username';
import UserAvatar from './UserAvatar'

const MyComponent = (props) => {

  const user = useRef({
      name: 'Karan Singh Negi',
      avatarURL: "https://icotar.com/avatar/jake.png?bg=e91e63s"
  })

  useEffect(() => {
    setTimeout(() => {
      user.current = {
        name: "Isiaka Aleem",
        avatarURL: "https://icotar.com/avatar/craig.png?s=50", // a new image
      };
    },5000)
  })

    return (
        <div>
            <Username name={user.current.name} />
            <UserAvatar src={user.current.avatarURL} />
        </div>
    )
}


export default MyComponent;

