import { Queue } from 'bullmq';

const myQueue = new Queue('bullmq1', {
  connection: {
    host: '127.0.0.1',
    port: 6379,
  },
});

const addJobs = async function addJobs(user , token) {
  try {
    await myQueue.add('emailJob', { user , token });
    console.log(`job with id ${user.email} added to Bull Mqueue`);
  } catch (error) {
    console.log('error while adding job from bullmq ', error);
  }
}

export default addJobs;