import './sass/bulma-skins.scss';
import {css} from '../components/utilities';

const url = (document.currentScript===null||document.currentScript===undefined ? import.meta.url : document.currentScript.src);

css(`${url.substring(0,url.lastIndexOf("/"))}/style.css`);

export const AVAIABLE_SKINS = ['cerulean','cosmo','cyborg','darkly','default','flatly','journal','litera','lumen','lux','materia','minty','nuclear','pulse','sandstone','simplex','slate','solar','spacelab','superhero','united','yeti'];

export function setSkin(skin){
    document.getElementsByTagName('body')[0].setAttribute('data-skin',skin??'');
};