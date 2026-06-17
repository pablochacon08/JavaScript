"use strict";

/**
 * Realiza un requerimiento asíncrono para obtener los datos de Coffee Sales.
 *
 * @async
 * @function getSalesCoffee
 * @returns {Promise<Document>} Documento XML con los datos obtenidos.
 */
export const getSalesCoffee = async () => {
    const response = await fetch("https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml");
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    return xml;
};