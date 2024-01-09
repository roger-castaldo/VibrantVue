export const css = (path:string|string[]) : Promise<any>=>{
    return new Promise((resolve) => {
        let promises = [];
        var head = document.head || document.getElementsByTagName('head')[0];
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