import debug from 'debug';


export default (namespace) => debug(`ranking:${namespace || '*'}`);
