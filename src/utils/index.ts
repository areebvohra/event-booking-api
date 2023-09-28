export const randomNumber = () => {
    var minm = 1000;
    var maxm = 9999;
    const randomNumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    return randomNumber.toString();
}