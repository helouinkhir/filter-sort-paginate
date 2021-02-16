import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAlertService {

  constructor() { }

  getBreakdowns(): any {
    return[
      {AlertType: "Lorem ipsum dolor sit amet1," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  },
      {AlertType: "Lorem ipsum dolor sit ame2," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  },
      {AlertType: "Lorem ipsum dolor sit amet3," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  },
      {AlertType: "Lorem ipsum dolor sit amet4," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  },
      {AlertType: "Lorem ipsum dolor sit amet5," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  },
      {AlertType: "Lorem ipsum dolor sit amet6," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  }
      ,
      {AlertType: "Lorem ipsum dolor sit amet7," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  }
      ,
      {AlertType: "Lorem ipsum dolor sit amet8," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  }
      ,
      {AlertType: "Lorem ipsum dolor sit amet9," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  }
      ,
      {AlertType: "Lorem ipsum dolor sit amet10," , vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 2029" , pilotName: "Sadhna Pandey",  }
    ]
  }

  getLiveAlerts() {
    return[
      {alertType:"Stoppage exceeded 1 hour", location:"Pappe Da Dhaba, NH74, Latur", date:"21 Jun 2020" , time:"02:54PM" , vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" ,  pilotName: "Sadhna Pandey",},
      {alertType:"Stoppage exceeded 1 hour", location:"Pappe Da Dhaba, NH74, Latur", date:"21 Jun 2020" , time:"02:54PM" , vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" ,  pilotName: "Sadhna Pandey",},
      {alertType:"Stoppage exceeded 1 hour", location:"Pappe Da Dhaba, NH74, Latur", date:"21 Jun 2020" , time:"02:54PM" , vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" ,  pilotName: "Sadhna Pandey",},
      {alertType:"Stoppage exceeded 1 hour", location:"Pappe Da Dhaba, NH74, Latur", date:"21 Jun 2020" , time:"02:54PM" , vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" ,  pilotName: "Sadhna Pandey",},
      {alertType:"Stoppage exceeded 1 hour", location:"Pappe Da Dhaba, NH74, Latur", date:"21 Jun 2020" , time:"02:54PM" , vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" ,  pilotName: "Sadhna Pandey",},
    ]
  }

  getReminders() {
    return[
      {alertType:"Driver License about to expire", alertDepartment : "driving license" , documentNo : "9876"},
      {alertType:"Driver License about to expire", alertDepartment : "driving license" , documentNo : "9876"},
      {alertType:"Driver License about to expire", alertDepartment : "driving license" , documentNo : "9876"},
      {alertType:"Driver License about to expire", alertDepartment : "driving license" , documentNo : "9876"},
      {alertType:"Driver License about to expire", alertDepartment : "driving license" , documentNo : "9876"}

  ]
    }

  getRenewals() {
    return [
      {alertType:"Your TELEMATICS is due for renewal on" , date: "01 Apr 2021" ,vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" , pilotName: "Sadhna Pandey"},
      {alertType:"Your TELEMATICS is due for renewal on" , date: "01 Apr 2021" ,vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" , pilotName: "Sadhna Pandey"},
      {alertType:"Your TELEMATICS is due for renewal on" , date: "01 Apr 2021" ,vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" , pilotName: "Sadhna Pandey"},
      {alertType:"Your TELEMATICS is due for renewal on" , date: "01 Apr 2021" ,vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" , pilotName: "Sadhna Pandey"},
      {alertType:"Your TELEMATICS is due for renewal on" , date: "01 Apr 2021" ,vehicleModel:"Pro 6019" , registrationNo: "MH02 GP 2029" , pilotName: "Sadhna Pandey"},
    ]
  }

  getMaintenanceAlerts() {
    return [
      {AlertHeading: "Clean the carbuerator," , alertDetail:"Lorem ipsum dolor sit amet", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",  },
      {AlertHeading: "Clean the carbuerator," , alertDetail:"Lorem ipsum dolor sit amet", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",  },
      {AlertHeading: "Clean the carbuerator," , alertDetail:"Lorem ipsum dolor sit amet", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",  },
      {AlertHeading: "Clean the carbuerator," , alertDetail:"Lorem ipsum dolor sit amet", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",  },
      {AlertHeading: "Clean the carbuerator," , alertDetail:"Lorem ipsum dolor sit amet", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",  },

    ]
  }

  getServiceAlerts() {
    return [
      {AlertHeading: "2nd Service" ,alertType:"Free", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",},
      {AlertHeading: "2nd Service" ,alertType:"Free", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",},
      {AlertHeading: "2nd Service" ,alertType:"Free", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",},
      {AlertHeading: "2nd Service" ,alertType:"Free", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",},
      {AlertHeading: "2nd Service" ,alertType:"Free", vehicleModel:"Pro 6019" , registrationNo:"MH02 GP 1921" , pilotName: "Sadhna Pandey",}
    ]
  }
}
