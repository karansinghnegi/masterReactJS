import React, { useContext } from 'react';
import CountContext from './CountContext';

export default function CountDisplay() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>
}