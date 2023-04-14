import express from 'express';
const router = express.Router();
import getCertificateRoutes from './certificateCrud';


router.use('/getCertificateRoutes', getCertificateRoutes);


export default router;