export default function handler(req, res) {
    if (req.method === "GET") {
    res.status(200).json({ user: "John Doe" });
    } else if (req.method === "POST") {
    const { name } = req.body;
    res.status(201).json({ message: `User ${name} created!` });
    } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
    }

    const fetchUser = async () => {
        const response = await fetch("/api/user");
        const data = await response.json();
        console.log(data);
        };