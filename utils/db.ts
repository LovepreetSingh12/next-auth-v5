import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

function createClientPromise(uri: string): Promise<MongoClient> {
    if (process.env.NODE_ENV === 'development') {
        // In development mode, use a global variable so that the value
        // is preserved across module reloads caused by HMR (Hot Module Replacement).
        if (!(global as any)._mongoClientPromise) {
            client = new MongoClient(uri);
            (global as any)._mongoClientPromise = client.connect();
        }
        return (global as any)._mongoClientPromise;
    } else {
        // In production mode, it's best to not use a global variable.
        client = new MongoClient(uri);
        return client.connect();
    }
}

clientPromise = createClientPromise(uri);

// Helper function to get the database instance from the client
const getDb = async () => {
    const client = await clientPromise;
    return client.db(); // Add your database name here if necessary
};

export { getDb };
