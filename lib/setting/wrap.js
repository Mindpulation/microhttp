function res(success=true, data=null, message="Hit berhasil dikembalikan"){
  let obj = new Object();
  if(data == null){
    obj = {
      success : success,
      message : message  
    }
  }
  else{
    obj = {
      success : success,
      message : message,
      data : data
    }
  }
  return JSON.stringify(obj);
}

module.exports = res;