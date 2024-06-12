import { Resend } from 'resend';

export const resend = new Resend(process.env.resendToken);

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'gouravberi1323@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });