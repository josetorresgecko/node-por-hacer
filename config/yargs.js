const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('listar', 'lista las tareas', {
        completado
    })
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza un estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}