

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { version, date, description, components, dataCenters } = req.body;

        console.log("Deployment Details:", {
            version,
            date,
            description,
            components,
            dataCenters
        });

        res.status(200).json({ message: 'Deployment data received successfully', data: req.body });
    } else {
       
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}
