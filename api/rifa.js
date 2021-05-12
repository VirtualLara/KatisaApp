import { API_URL } from '../utils/constants';



export async function getrifaApi() {

    try {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        var moment = require('moment');
        firstDay = moment(firstDay).format('YYYY-MM-DD');
        lastDay = moment(lastDay).format('YYYY-MM-DD');

        const url = `${API_URL}/rifas?fechini=${firstDay}&fechfin=${lastDay}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

/* //formas de declarar fechas
let fecha = new Date();
let año = fecha.getFullYear()
let mes = fecha.getMonth() + 1
let diaActual = fecha.getDate()
let ultimodia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate()
const ultimodia = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() */
