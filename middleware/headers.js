module.exports=(req, res, next)=>{
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods','GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers','Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    res.header('Bearer', 'CpQ2MEVOgTTfTrdta8hUi_RiCXI0cTzeUuiri__M4gczA6cN5S2J77R27GMdm4Rlnw-zouCMY6j5lJAtBeh2cTFZHKlD1FXpDepgXufyNKrYAOZ-V659EGXkvU53XHYx');

    next();
}