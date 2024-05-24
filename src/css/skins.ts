import './sass/bulma-skins.scss';
import {css} from '../components/utilities';
import { SkinTypes } from '../enums';

const url = (document.currentScript===null||document.currentScript===undefined ? import.meta.url : document.currentScript['src']);

css(`${url.substring(0,url.lastIndexOf("/"))}/style.css`);

export const AVAIABLE_SKINS:string[] = Object.values(SkinTypes)
    .filter((value,index,array) => array.indexOf(value)===index);

export const setSkin = (skin?:SkinTypes|null):void => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme',`${skin?skin:''}`);
};
