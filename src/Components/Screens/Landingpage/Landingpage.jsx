import React,{useEffect, useState} from 'react'
import Header from '../../Includes/Landingpage/Header';
import { HeaderFilter } from './HeaderFilter';

import Spotlight from './Spotlight'

export default function Landingpage() {
  const [isProfile, setProfile] = useState(false);


  return (
    <>
        <Spotlight />
       <HeaderFilter/>
    </>
  )
}
