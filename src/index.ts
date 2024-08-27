import app from './server';

const port = process.env.port || '3001';

app.listen(port, () => console.log(`Server is running on port ${port}`));
