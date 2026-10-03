import React from 'react';

export function Profile(props) {
  return <UserDetails {...props} />;
}
export const ProfileCard = ({ profile }) => {
  const { name, age, bio } = profile;

  return (
    <div >
      <h2>{name}</h2>
      <p>年齢: {age}歳</p>
      <p>{bio}</p>
      <div style={{
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px'
    }}></div>
    </div>
  )
}