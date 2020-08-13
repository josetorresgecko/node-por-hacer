const fs = require('fs');
let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};
const getListado = (completado) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado == completado);
    return nuevoListado;
};
const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};
const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: "false"
    }
    cargarDb();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};
const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};
const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};