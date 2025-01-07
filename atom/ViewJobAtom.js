"use client"
import {atom} from 'recoil';    

export const viewJobState = atom({
    key: 'viewJobState', // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });