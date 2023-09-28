import { Kafka, logLevel } from 'kafkajs';

// Create a Kafka producer
const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092'],
    logLevel: logLevel.ERROR, // Adjust the log level as needed
});

const producer = kafka.producer();

// Create a Kafka consumer
const consumer = kafka.consumer({ groupId: 'my-group' });

// Simulate a Kafka producer
export async function produceMessage(topic: string, message: any) {
    await producer.connect();
    await producer.send({
        topic,
        messages: [{ value: message }],
    });
    await producer.disconnect();
}

// Simulate a Kafka consumer
export async function consumeMessages(topic: string) {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Received message from Kafka on topic ${topic}: ${message.value.toString()}`);
        },
    });
}

// Kafka consumer
consumeMessages('my-topic')
    .then(() => {
        console.log('Consumer started');
    })
    .catch((error) => {
        console.error(`Error consuming messages: ${error}`);
    });
