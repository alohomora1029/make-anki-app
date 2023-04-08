"use client"
import {
  RecoilRoot,
} from 'recoil';

export function Provider(props:any) {
  return (
    <RecoilRoot>
      {props.children}
    </RecoilRoot>
  );
}