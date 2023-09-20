export const AVAIABLE_SKINS = ['cerulean','cosmo','cyborg','darkly','default','flatly','journal','litera','lumen','lux','materia','minty','nuclear','pulse','sandstone','simplex','slate','solar','spacelab','superhero','united','yeti'];

export function setSkin(skin){
    document.getElementsByTagName('body')[0].setAttribute('data-skin',skin??'');
};