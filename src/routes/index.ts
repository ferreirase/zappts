import { Router } from 'express';
// import usersRoutes from './users.routes';
// import sessionRoutes from './session.routes';
// import lettersRoutes from './letters.routes';

const routes = Router();

// routes.use('/users', usersRoutes);
// routes.use('/session', sessionRoutes);
// routes.use('/letters', lettersRoutes);

routes.post('/notifications', async (req, res) => {
  console.log(req.body);

  return res.status(200).json({ received: true });
});

export default routes;
