'use strict'
var Fruta = require('../models/fruta');


async function saveFruta(req, res) {
    const fruta = new Fruta();

    const params = req.body;

    if (params.nombre) {
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        try {
            const frutaStored = await fruta.save(); // Usa `await` en lugar de callback
            res.status(200).send({
                fruta: frutaStored,
            });
        } catch (err) {
            res.status(500).send({
                message: "Error en el servidor",
            });
        }
    } else {
        res.status(400).send({
            message: "El nombre de la fruta es obligatorio",
        });
    }
};

async function getFrutas(req, res) {
    try {
        const frutas = await Fruta.find({}).sort({'_id':-1}); // Espera el resultado de la consulta
        if (frutas.length > 0) {
            res.status(200).send({ frutas });
        } else {
            res.status(404).send({ message: "No hay frutas" }); // Usa 404 para "no encontrado"
        }
    } catch (err) {
        res.status(500).send({ message: "Error en el servidor" });
    }
}

async function getFruta(req, res) {
    const frutaId = req.params.id; // Obtener el ID de los parámetros de la solicitud

    try {
        const fruta = await Fruta.findById(frutaId); // Esperar el resultado de la consulta
        if (fruta) {
            res.status(200).send({ fruta }); // Si se encuentra la fruta, enviarla en la respuesta
        } else {
            res.status(404).send({ message: "No hay fruta con ese ID" }); // Si no se encuentra la fruta, enviar 404
        }
    } catch (err) {
        res.status(500).send({ message: "Error en el servidor", error: err.message }); // Enviar error 500 si ocurre un problema en la base de datos
    }
}

async function updateFruta(req, res) {
    const frutaId = req.params.id;
    const updateData = req.body;

    try {
        const frutaUpdated = await Fruta.findByIdAndUpdate(frutaId, updateData, { new: true });

        if (frutaUpdated) {
            res.status(200).send({ fruta: frutaUpdated });
        } else {
            res.status(404).send({ message: "No se encontró la fruta con ese ID" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error en el servidor", error: err.message });
    }
}

async function deleteFruta(req, res) {
    const frutaId = req.params.id; // Obtener el ID de los parámetros de la solicitud

    try {
        // Usamos `findByIdAndDelete` para eliminar el documento con ese ID
        const frutaDeleted = await Fruta.findByIdAndDelete(frutaId);

        if (frutaDeleted) {
            res.status(200).send({ message: "Fruta eliminada correctamente" });
        } else {
            res.status(404).send({ message: "No se encontró la fruta con ese ID" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error en el servidor", error: err.message });
    }
}

module.exports = {
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};