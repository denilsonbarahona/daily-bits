module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '05fd87e5fd27c8f7b7a32f93bc2c23f3'),
  },
});
