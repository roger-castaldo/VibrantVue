import './sass/bulma-skins.scss';
import {css} from '../components/utilities';

const url = (document.currentScript===null||document.currentScript===undefined ? import.meta.url : document.currentScript.src);

css(`${url.substring(0,url.lastIndexOf("/"))}/style.css`);

export const AVAIABLE_SKINS = ['cerulean','cosmo','cyborg','dark','darkly','default','flatly','journal','light','litera','lumen','lux','materia','minty','morph','pulse','quartz','sandstone','simplex','sketchy','slate','solar','spacelab','superhero','united','vapor','yeti','zephyr'];

export function setSkin(skin){
    document.getElementsByTagName('html')[0].setAttribute('data-theme',skin??'');
};
