export const css = (path:string|string[]) : Promise<any>=>{
    return new Promise((resolve) => {
        let promises = [];
        let head = document.head || document.getElementsByTagName('head')[0];
        (!Array.isArray(path) ? [path] : path).forEach((url,index) => {
            if (!url.toLowerCase().endsWith('.css')) {
                url += '.css';
            }
            let add = document.querySelectorAll('link[server_path="' + url + '"]').length == 0;
            if (add) {
                let style = document.createElement('link');
                let prom = new Promise(resolve => {
                    style.onload = function () { resolve(url); };
                });
                promises[index] = prom;
                head.appendChild(style);
                style.setAttribute('rel', 'stylesheet');
                style.setAttribute('type', 'text/css');
                style.setAttribute('server_path', url);
                style.setAttribute('href', url);
            } else
                promises[index] = Promise.resolve(url);
        });
        Promise.all(promises).then(results => {
            resolve(results);
        });
    });
};

type loadedModule = {
    path:string,
    result?:any|null
};

const loadedModules:loadedModule[] = [];

export const loadNonEs6Module = (path:string,windowProperties?:string[]) : Promise<any|undefined> => {
    return new Promise(resolve=>{
        let res = loadedModules.find(m=>m.path===path);
        if (res!==undefined && res!==null){
            if ((res.result===undefined && windowProperties!==undefined)
            ||(res.result===null && windowProperties===undefined)){
                let timeout = setTimeout(()=>{
                    let res = loadedModules.find(m=>m.path===path);
                    if (res===undefined || res===null){
                        clearTimeout(timeout);
                        resolve(undefined);
                    }else if ((res.result!==undefined && windowProperties!==undefined)
                    ||(res.result===undefined && windowProperties===undefined)){
                        clearTimeout(timeout);
                        resolve(res.result);
                    }
                },500);
            }else{
                resolve(res.result);
            }
        }else{
            loadedModules.push({
                path:path,
                result:(windowProperties===undefined ? null : undefined)
            });
            let script = document.createElement('script');
            script.onload = ()=>{
                let idx = loadedModules.findIndex(m=>m.path===path);
                if (windowProperties===undefined){
                    loadedModules[idx].result=undefined;
                }else{
                    let result = {};
                    windowProperties.forEach(p=>{
                        result[p] = window[p];
                    });
                    loadedModules[idx].result=result;
                }
                resolve(loadedModules[idx].result);
            };
            script.setAttribute('src',path);
            let head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(script);            
        }
    });
}