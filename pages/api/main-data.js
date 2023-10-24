export default async function handler(req, res) {
    try {
        const response = await fetch('http://santibertero.pythonanywhere.com/api/index/');
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al obtener los datos de la API.' });
    }
}
