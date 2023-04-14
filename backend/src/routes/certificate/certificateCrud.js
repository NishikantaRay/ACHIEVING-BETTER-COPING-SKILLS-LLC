import express from 'express';
import { CertificateData } from '../../models/certificate.model';
import { newCertificateValidator, updateCertificateValidator, searchCertificateValidator, deleteCertificateValidator } from '../../validators/joi.validator';
const router = express.Router();
router.post('/addCertificate', newCertificateValidator, async (req, res) => {
    try {
        const existingData = await CertificateData.find({name:req.validatedBody.name,email:req.validatedBody.email,course:req.validatedBody.course});
        if (existingData.length === 0) {
            const { name, email, phone, org, course, dateofJ,dateofC,trainer,duration, cID, url } = req.validatedBody;
            const certificate = new CertificateData({ name, email, phone, org, course, dateofJ,dateofC,trainer,duration, cID, url });
            const result = await certificate.save();
            res.json({
                message: "Certificate Added Successfully",
                code: 200,
                data: result
            });
        } else {
            res.json({
                message: "Certificate Already Exists",
                code: 300,
                data: {}
            });
        }
        
    } catch (err) {
        console.log(err);
        res.json({
            message: "Error Occured",
            code: 500
        });
    }
});

router.post('/getCertificate', async (req, res) => {
    try {
        const result = await CertificateData.find();
        res.json({
            message: "Certificates Found Successfully",
            code: 200,
            data: result
        });

    } catch (err) {
        console.log(err);
        res.json({
            message: "Error Occured",
            code: 500
        });
    }
})

router.post('/updateCertificateByID', updateCertificateValidator, async (req, res) => {
    try {
        const existingId = await CertificateData.findById(req.validatedBody.id);
        if (existingId) {
            const { name, email, phone, org, course, dateofJ,dateofC,trainer,duration, cID, url } = req.validatedBody;
            const certificate = new CertificateData({ name, email, phone, org, course, dateofJ,dateofC,trainer,duration, cID, url });
            const updatedData = await CertificateData.findByIdAndUpdate(req.validatedBody.id, certificate);
            res.json({
                message: "Certificate Updated Successfully",
                code: 200,
                data: updatedData
            });
        } else {
            res.json({
                message: "Certificate Not Found",
                code: 404,
                data: {}
            });
        }
    } catch (err) {
        console.log(err);
        res.json({
            message: "Error Occured",
            code: 500
        });
    }
});

router.post('/deleteCertificateByID', deleteCertificateValidator, async (req, res) => {
    try {
        const deletedData = await CertificateData.findByIdAndDelete(req.validatedBody.id);
        res.json({
            message: "Certificate Deleted Successfully",
            code: 200,
            data: deletedData
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            message: "Error Occured",
            code: 500
        });
    }
});

router.post('/getCertificateByEmailAndCid', searchCertificateValidator, async (req, res) => {
    try {
        const getCertificateData = await CertificateData.find({ email: req.validatedBody.email, cID: req.validatedBody.cID });
        if(getCertificateData.length === 0){
            res.json({
                message: "Certificate Not Found",
                code: 404,
                data: {}
            });
        }else{
        res.json({
            message: "Certificate Found Successfully",
            code: 200,
            data: getCertificateData
        });
        }
    } catch (err) {
        console.log(err);
        res.json({
            message: "Error Occured",
            code: 500
        });
    }
});

export default router
