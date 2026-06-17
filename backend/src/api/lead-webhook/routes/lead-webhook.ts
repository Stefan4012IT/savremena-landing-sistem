export default {
  routes: [
    {
      method: 'POST',
      path: '/lead-webhook',
      handler: 'lead-webhook.submit',
      config: {
        auth: false,
      },
    },
  ],
}
