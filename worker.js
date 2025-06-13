import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { mailSend } from './utils/nodemailer.utils.js';



const connection = new IORedis({ maxRetriesPerRequest: null });

const worker = new Worker(
  'bullmq1',
  async job => {

      try {
           await mailSend(job.data.user , job.data.token);
           console.log(`Attempt ${job.attemptsMade + 1} for ${job.data.user.email}`);
           console.log(`mail sent to ${job.data.user.email} at ${new Date().toLocaleString()}`);
       } catch (error) {
           console.log('error while sending mail from worker bullmq ', error);
       }
    
  },
  { connection },
);



worker.on('completed', job => {
  console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});