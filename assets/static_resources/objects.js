









const appObjects = {
    addSlipInfoRequiredItems: [["medicationDetails","name"],["medicationDetails","strength"],
    ["medicationDetails","dateRefilled"],["physicianDetails","name"]],
    addSlipInfoUpdateableItems:["dateRefilled","refillsLeft"],
    myInfoRequiredItems:[["personalInformation","firstName"],["personalInformation","lastName"],
    ["physicianDetails","firstName"],["physicianDetails","lastName"]],
    myInfoSexChoices:[
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'}]
}

export default appObjects;