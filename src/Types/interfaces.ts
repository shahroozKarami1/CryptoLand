 export interface INavLink {
  title: string;
  id: number;
  link: string;
}
export interface ISelectoptions  {
  id  :  number
  label  : string , 
}
export interface ISelectBox {
  data :  ISelectoptions[] , 
  isScroll : boolean
}