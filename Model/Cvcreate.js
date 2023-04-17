const mongoose = require('mongoose')
const CvSchema = mongoose.Schema({
  address:{
    type:String
  },
  city:{
    type:String
  },
  clgfromdate:{
    type:String
  },
  clgtodate:{
    type:String
  },
  collegename:{
    type:String
  },
  current_ctc:{
    type:String
  },
  current_position:{
    type:String
  }
,
degree:{
  type:String
},
email:{
  type:String
},
expected_ctc:{
  type:String
},
 
firstname:{
  type:String
},
id:{
  type:String
},
joining_date:{
  type:String
},
joining_location:{
  type:String
},
 
  lastname:{
    type:String
  },

  leaving_date:{
    type:String
  },

  number:{
    type:Number
  },
  organisation:{
    type:String
  },

  percentage:{
    type:String
  },

    pincode:{
      type:String
    },
  
  project_description:{
    type:String
  },
  
  project_duration:{
    type:Number
  },

  project_fromdate:{
    type:String
  },

  project_technology:{
    type:String
  },
  
 
  project_title:{
    type:String
  },

  project_todate:{   type:String},
 
  skills:{
    type:Array
  }
  ,
  social:{
    type:Array
  },

  state:{
    type:String
  },
  summary:{
    type:String
  },
  team_size:{
    type:Number
  },
  university:{
    type:String
  },
  
  work_technology:{
    type:String
  }
  ,
created_at:{
  type:Date,
  default:Date.now
}

})
module.exports = mongoose.model("Cv",CvSchema)