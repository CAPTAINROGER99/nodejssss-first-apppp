const gfname = "MrsRandom";     //here we created a module to export
const gfname1 = "MrsRandom1";
const gfname2 = "MrsRandom2";

//module.exports = gfname;    //its an old method to export any module (to use new method we have to change "type to module" in pacakge.json)


export default gfname;
export {gfname1,gfname2} ;


export const generatepercent = () => {
    return `${~~(Math.random() * 100)} %`;    //we use ~~ to get only two characters we could also have used Math.floor((Math.random() * 100).toString());
};
