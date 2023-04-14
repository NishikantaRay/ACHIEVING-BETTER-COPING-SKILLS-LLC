import mongoose from 'mongoose';
const CertificateDataSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    org:{
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
    dateofJ: {
        type: String,
        require: true,
    },
    dateofC: {
        type: String,
        require: true,
    },
    trainer:{
        type: String,
        require: true,
    },
    duration: {
        type: String,
        require: true,
    },
    cID: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true,
    }
})
const CertificateData = mongoose.model('CertificateData', CertificateDataSchema);
export { CertificateData }; 