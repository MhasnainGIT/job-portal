import multer from 'multer';

const storage = multer.memoryStorage(); // or diskStorage based on your setup
const upload = multer({ storage }).single('logo');  // 'logo' is the field name for the file in the form

export default upload;
