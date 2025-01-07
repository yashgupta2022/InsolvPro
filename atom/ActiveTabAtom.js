"use client"
import {atom} from 'recoil';    

export const modalState = atom({
    key: 'modalState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });