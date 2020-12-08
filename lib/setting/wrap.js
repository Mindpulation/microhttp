function res(success=true, data=null, message="Hit berhasil dikembalikan"){
  if(data == null){
    return{
      success : success,
      message : message  
    }
  }
  else{
    return {
      success : success,
      message : message,
      data : data
    }
  }
}

module.exports = res;