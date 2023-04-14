import express from 'express';
const router = express.Router();
import CertRouter from './certificate'

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.use('/certificateCRUD', CertRouter);
return router;
};

export default routes;
