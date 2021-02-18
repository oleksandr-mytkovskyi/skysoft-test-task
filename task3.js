const myBind = function (thisArg, target, arg1, arg2, arg3) {
    let bindArgs = [].slice.call(arguments, 2);
    return function() {
        let fnArgs = [].slice.call(arguments);
        return target.apply(thisArg, bindArgs.concat(fnArgs));
    }
};
  const user = 'admin:';
  const log = {
    error: myBind(console, console.log, '[Error]', user),
    warning: myBind(console, console.log, '[Warning]', user),
  };
  log.error('File not found!'); // [Error] admin: File not found!
  log.warning('No timezone set!'); // [Warning] admin: No timezone set!
