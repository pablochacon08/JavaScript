"use strict";

import { getSalesCoffee } from "./requirements.js";

/**
 * Procesa la respuesta de getSalesCoffee y muestra el resultado en el Datatable.
 *
 * @async
 * @function processSalesCoffee
 */
const processSalesCoffee = async () => {
    const xml = await getSalesCoffee();
    const rows = xml.querySelectorAll("row");
    const tbody = document.getElementById("tabla-body");

    rows.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="border px-4 py-2">${row.querySelector("Date").textContent}</td>
            <td class="border px-4 py-2">${row.querySelector("Time").textContent}</td>
            <td class="border px-4 py-2">${row.querySelector("coffee_name").textContent}</td>
            <td class="border px-4 py-2">${row.querySelector("cash_type").textContent}</td>
            <td class="border px-4 py-2">${row.querySelector("money").textContent}</td>
            <td class="border px-4 py-2">${row.querySelector("Time_of_Day").textContent}</td>
            <td class="border px-4 py-2">${row.querySelector("Weekday").textContent}</td>
        `;
        tbody.appendChild(tr);
    });

    $("#example").DataTable();
};

window.addEventListener("DOMContentLoaded", processSalesCoffee);