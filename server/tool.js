function returnSuccessFormat(data) {
  return {
    status: 200,
    data,
    msg: 'ok'
  }
}
function returnErrorFormat(status, message) {
  return {
    status: 200,
    data: '',
    msg: message
  }
}

module.exports = {
  returnErrorFormat,
  returnSuccessFormat
}
