const templateResponseArr = {
  200 : {
    type : 'object',
    properties : {
      success : {type:'boolean'},
      message : {type:'string'}, 
      data    : {
        type:'array',           
      }       
    }
  }
}

const optFindAll = {
  schema : {
    body:{
      type : 'object',
      properties : {
        param : {type :'object'},
        field : {type :'object'},
        sort  : {type :'object'}
      },
      required:['param', 'field', 'sort']
    },
    response:templateResponseArr
  }
};

const optFindOne = {
  schema : {
    body:{
      type : 'object',
      properties : {
        param : {type :'object'},
        field : {type :'object'},        
      },
      required:['param', 'field']
    },
    response: {
      200 : {
        type : 'object',
        properties : {
          success : {type:'boolean'},
          message : {type:'string'}, 
          data    : {
            type:'object',
            properties : {
              _id : {type:'string'}
            }           
          }       
        }
      }
    }
    
  }
};

const optFindPage = {
  schema : {
    body:{
      type : 'object',
      properties : {
        page  : {type :'integer'},
        len   : {type :'integer'},
        param : {type :'object'},
        field : {type :'object'},
        sort  : {type :'object'}
      },
      required:['page','len','param', 'field', 'sort']
    },
    response:templateResponseArr
  }
};

const optFindRange = {
  schema : {
    body:{
      type : 'object',
      properties : {
        start  : {type :'integer'},
        end   : {type :'integer'},
        param : {type :'object'},
        field : {type :'object'},
        sort  : {type :'object'}
      },
      required:['start','end','param', 'field', 'sort']
    },
    response:templateResponseArr
  }
};

const optCount = {
  schema : {
    body:{
      type : 'object',
      properties : {
        param : {type :'object'},        
      },
      required:['param']
    },
    response: {
      200 : {
        type : 'object',
        properties : {
          success : {type:'boolean'},
          message : {type:'string'}, 
          data    : {type:'integer'}
        }
      }
    }
  }
};

const optInsertOne = {
  schema : {
    body : {
      type : 'object',
      properties : {
        param : {type:'object'}
      },
      required :['param']
    },
    response: {
      200 : {
        type : 'object',
        properties : {
          success : {type:'boolean'},
          message : {type:'string'}          
        }
      }
    }
  }
}

const optInsertMany = {
  schema : {
    body : {
      type : 'object',
      properties : {
        param : {type:'array'}
      },
      required :['param']
    },
    response: {
      200 : {
        type : 'object',
        properties : {
          success : {type:'boolean'},
          message : {type:'string'}          
        }
      }
    }
  }
}

const optUpdate = {
  schema : {
    body : {
      type : 'object',
      properties : {
        param : {type:'object'},
        change : {type:'object'}
      },
      required :['param', 'change']
    },
    response: {
      200 : {
        type : 'object',
        properties : {
          success : {type:'boolean'},
          message : {type:'string'}          
        }
      }
    }
  }
}

const optDelete = {
  schema : {
    body : {
      type : 'object',
      properties : {
        param : {type:'object'}
      },
      required :['param']
    },
    response: {
      200 : {
        type : 'object',
        properties : {
          success : {type:'boolean'},
          message : {type:'string'}          
        }
      }
    }
  }
}

module.exports = {
  optFindAll,
  optFindOne,
  optFindPage,
  optFindRange,
  optCount,
  optInsertOne,
  optInsertMany,
  optDelete,
  optUpdate
}
