





import appLabels,{formInputLabel,appMessages} from './strings'


export const socials=
    [
        {
            source:require('../img/whatsupIcon.png'),
            name:appLabels.whatsApp,
        },{
            source:require('../img/gmailIcon.png'),
            name:appLabels.email,
        },{
            source:require('../img/smsIcon.png'),
            name:appLabels.sms,
        },{
            source:require('../img/smsIcon.png'),
            name:appLabels.active,
        }
    ]


let slipRefillsRange = []

for (let index = 0; index < 13; index++) {
    const element =  { label: ''+index, value: ''+index }

    slipRefillsRange.push(element)

    
}

const appObjects = {
    addSlipInfoRequiredItems: [["medicationDetails","name"],["medicationDetails","strength"],
    ["medicationDetails","dateRefilled"],["physicianDetails","name"]],
    addSlipInfoUpdateableItems:["dateRefilled","refillsLeft"],
    myInfoRequiredItems:[["personalInformation","firstName"],["personalInformation","lastName"],
    ["physicianDetails","firstName"],["physicianDetails","lastName"]],
    myInfoSexChoices:[
        { id: 'Male', title: 'Male' },
        { id: 'Female', title: 'Female'}],

    slipRefilLeftRange:slipRefillsRange,

    reconCileUpdateMenu:[
        { label: 'save', value: 'save', icon:'save',action:0},
        { label: 'save & load new slip', value: 'save & load new slip', icon:'upload-file',action:1},
        { label: 'save & return to reconcile', value: 'save & return to reconcile', icon:'exit-to-app',action:2},
        { label: 'cancel', value: 'cancel', icon:'cancel',action:3},

    ],

    dataKeysReview:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                '["medicationDetails"]["refillsLeft"]','["medicationDetails"]["imageData"]'],
    
    labelsReview:['name','dateRefilled','refillsLeft','imageData'],
    shareitemLabels : ["Medicine", "Date filled", "Doctor", "Refills left","Strength","Direction","Disease"],
    sharedataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
               '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]',
               '["medicationDetails"]["strength"]','["medicationDetails"]["direction"]',
               '["medicationDetails"]["diagnosis"]'], 
    reconcileitemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
    reconciledataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
    '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]'],
}


const medDetails = {
    medicationDetails:[{
        group:[{
            inputLabel:formInputLabel.medcineName,
            childKey:"name",
            rootKey:"medicationDetails",
        },{
            inputLabel:formInputLabel.strength,
            childKey:"strength",
            rootKey:"medicationDetails",
        }]},
        {group:[{
            inputLabel:formInputLabel.dateRefilled,
            childKey:"dateRefilled", 
            rootKey:"medicationDetails",
            iconName:"dateRange",
            func:"datePicker",
            editAble:false
        },{
            inputLabel:formInputLabel.refillsLeft,
            childKey:"refillsLeft",
            rootKey:"medicationDetails",
            iconName:"arrowRightBlack",
            iconName2:"arrowLefttBlack",
            func:"numberPicker",
            //inputType:"dropDown",
            //data:appObjects.slipRefilLeftRange,
            editAble:true,
            keyboard:'number-pad',
            
        }]}
    ,{
        inputLabel:formInputLabel.medcineDirection,
            childKey:"direction",
            rootKey:"medicationDetails",
    }]
}


const pharma={
    pharmacyDetailsLabel:[
        {
            inputLabel:formInputLabel.pharmacyName,
            childKey:"name",
            rootKey:"pharmacyDetails",
            inputType:'autoCompelete',
            suggessions:'pharma'
        },{
            inputLabel:formInputLabel.pharmacyPhone,
            childKey:"phone",
            rootKey:"pharmacyDetails",
            keyboard:"phone-pad"
        }
    ]
}

const physician={
    physiciansDetailsLabel:[
        {
        inputLabel:formInputLabel.physicianName,
        childKey:"name",
        rootKey:"physicianDetails",
        suggessions:'doc'
    },{
        inputLabel:formInputLabel.physicianPhone,
        childKey:"phone",
        rootKey:"physicianDetails",
        keyboard:"phone-pad"
    },{
        inputLabel:formInputLabel.nextAppointment,
        childKey:"dateAppointed",
        rootKey:"medicationDetails",
        iconName:"dateRange",
        func:"datePicker",
        editAble:false
    }
]
}

const additional={
    addistionDetailsLabel:[{
        inputLabel:formInputLabel.diagnosis,
        childKey:"diagnosis",
        rootKey:"medicationDetails",
        suggessions:'diag'
    }]
}


export const slipInfoFormLabels={
    folds:[{
        title:appLabels.medicationDetailsLabel,
        content:medDetails.medicationDetails
    },{
        title:appLabels.physiciansDetailsLabel,
        content:physician.physiciansDetailsLabel
    },{
        title:appLabels.addistionDetailsLabel,
        content:additional.addistionDetailsLabel
    },{
        title:appLabels.pharmacyDetailsLabel,
        content:pharma.pharmacyDetailsLabel
    }]
}

export const myInfoFormLabels={
    
          folds:  [
                {
                    title:appLabels.myInfoPersonalInformationLabel,
                    subView:true,
                    content:[
                        {group: [{inputLabel:formInputLabel.firstName,
                         childKey:"firstName",
                         rootKey:"personalInformation",
                         width:"49%"
                        },{inputLabel:formInputLabel.lastName,
                            childKey:"lastName",
                            rootKey:"personalInformation",
                            width:"49%"
                           }]},{group:[{inputLabel:formInputLabel.birthDate,
                            childKey:"birthDate",
                            rootKey:"personalInformation",
                            width:"49%",
                            iconName:"dateRange",
                            func:"datePicker",
                            editAble:false, 
                           },{inputLabel:formInputLabel.sex,
                               childKey:"sex",
                               rootKey:"personalInformation",
                               width:"49%",
                               inputType:"dropDown",
                               data:appObjects.myInfoSexChoices,
                               editAble:false,

                              },]}
                    ]

                },{
                    title:appLabels.myInfoStreetAddressLabel,
                    subView:true,
                    content:[
                       {group:[ {
                            inputLabel:formInputLabel.streetAddress,
                            childKey:"street",
                            rootKey:"address",
                            width:"49%",
                        },{
                            inputLabel:"City",
                            childKey:"city",
                            rootKey:"address",
                            width:"49%",
                        }]},
                        {group:[{
                            inputLabel:formInputLabel.state,
                            childKey:"state",
                            rootKey:"address",
                            width:"49%",
                            inputType:"dropDown",
                            data:require("../data/states.json")
                        },{
                            inputLabel:formInputLabel.zipCode,
                            childKey:"zipCode",
                            rootKey:"address",
                            width:"49%",
                        }]},{group:[{
                            inputLabel:formInputLabel.phone,
                            childKey:"phone",
                            rootKey:"address",
                            width:"49%",
                            keyboard:'phone-pad'
                        },{
                            inputLabel:formInputLabel.email,
                            childKey:"email",
                            rootKey:"address",
                            width:"49%",
                            keyboard:'email-address'
                        }]}
                    ],
                },{
                    title:appLabels.myInfoPPrimaryCarePhysician,
                    subView:true,
                    content:[
                        {group:[ {
                             inputLabel:formInputLabel.firstName,
                             childKey:"firstName",
                             rootKey:"physicianDetails",
                             width:"49%",
                             suggessions:'doc',
                         },{
                             inputLabel:formInputLabel.lastName,
                             childKey:"lastName",
                             rootKey:"physicianDetails",
                             width:"49%",
                         }]},{
                            inputLabel:formInputLabel.phone,
                            childKey:"phone",
                            rootKey:"physicianDetails",
                            width:"100%",
                            keyboard:'phone-pad'
                        }
                     ],
                },
                
                {
                    title:appLabels.myInfoPreferredPharmacy,
                    subView:false,
                    content:[{
                        inputLabel:formInputLabel.name,
                        childKey:"name",
                        rootKey:"pharmacyDetails",
                        width:"100%",
                        suggessions:'pharma'
                    },{
                        inputLabel:formInputLabel.phone,
                        childKey:"phone",
                        rootKey:"pharmacyDetails",
                        width:"100%",
                        keyboard:'phone-pad'
                    }]
                },{
                    title:appLabels.pinLabel,
                    subView:false,
                    content:[{
                        inputLabel:formInputLabel.pin,
                        childKey:"pin",
                        rootKey:"personalInformation",
                        width:"100%",
                        secureTextEntry:false,
                        keyboard:'number-pad',
                        editAble:true
                    }]
                }
            ]
        }
    


export default appObjects;