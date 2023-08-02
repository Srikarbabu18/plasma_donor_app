const adminService = require('./adminService');

const getDataController = async (req, res) => {
  var donorDetails = await adminService.getDataFromDBService();
  res.send({ status: true, data: donorDetails });
};

const createAdminController = async (req, res) => {
  console.log(req.body);
  var status = await adminService.createAdminDBServer(req.body);
  console.log('**********');
  console.log(status);
  if (status) {
    res.send({ status: true, message: 'Created Successfully' });
  } else {
    res.send({ status: false, message: 'Error' });
  }
};

const updateAdminDataController = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  var result = await adminService.updateOneAdminDBService(req.params.id, req.body);
  if (result) {
    res.send({ "status": true, "message": "updated" , "id": req.params.id});
  } else {
    res.send({ "status": false, "message": "not updated" , "id": req.params.id})
  }
};

const deleteAdminController = async (req, res) => {
  console.log(req.params.id);
  var result = await adminService.removeOneAdminDBService(req.params.id);
  if (result) {
    res.send({ "status": true, "message": "deleted", "id": req.params.id});
  } else {
    res.send({ "status": false, "message": "not deleted" , "id": req.params.id });
  }
};

module.exports = { getDataController, createAdminController, updateAdminDataController, deleteAdminController };
